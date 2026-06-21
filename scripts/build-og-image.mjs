/* eslint-disable no-console */
import sharp from "sharp";

import { existsSync, statSync } from "node:fs";
import { Buffer } from "node:buffer";
import { locales } from "../src/i18n/locales.ts";
import { ui } from "../src/i18n/ui.ts";

const SOURCE = "src/assets/images/profile-pic.jpg";

if (!existsSync(SOURCE)) {
  console.error(`Source image not found: ${SOURCE}`);
  process.exit(1);
}

const targets = locales.map((loc) => `public/og-image-${loc}.jpg`);
const isFresh = (file) => existsSync(file) && statSync(file).mtimeMs >= statSync(SOURCE).mtimeMs;

if (targets.every(isFresh)) {
  console.info("Open Graph images are up to date, skipping.");
  process.exit(0);
}

const outputFor = (loc) => `public/og-image-${loc}.jpg`;
const escapeXml = (s) => s.replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c]));

try {
  const WIDTH = 1200;
  const HEIGHT = 630;
  const SIZE = 540;
  const RADIUS = 64;

  const avatar = await sharp(SOURCE)
    .resize(SIZE, SIZE, { fit: "cover" })
    .toBuffer();

  const mask = Buffer.from(
    `<svg width="${SIZE}" height="${SIZE}">
      <rect width="${SIZE}" height="${SIZE}" rx="${RADIUS}" ry="${RADIUS}" />
    </svg>`
  );

  const rounded = await sharp(avatar)
    .composite([{ input: mask, blend: "dest-in" }])
    .png()
    .toBuffer();

  for (const locale of locales) {
    const role = ui[locale]["intro.role"];

    const textSvg = Buffer.from(
      `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
         <text x="640" y="300" font-family="Inter, sans-serif" font-size="76" font-weight="700" fill="#0d0d0d">${escapeXml("Diego Souza")}</text>
         <text x="640" y="372" font-family="Inter, sans-serif" font-size="40" fill="#4a4a4a">${escapeXml(role)}</text>
       </svg>`
    );

    const output = outputFor(locale);

    await sharp({
      create: {
        width: WIDTH,
        height: HEIGHT,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      }
    })
      .composite([
        { input: rounded, top: 45, left: 80 },
        { input: textSvg, top: 0, left: 0 }
      ])
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(output);

    console.info(`Wrote new Open Graph image to: ${output}`);
  }
} catch(err){
  console.error("Open Graph image generation failed:", err);
  process.exit(1);
}
