/* eslint-disable no-console */
import { existsSync, statSync } from "node:fs";
import { Buffer } from "node:buffer";
import sharp from "sharp";

const SOURCE = "src/assets/images/profile-pic.jpg";
const OUTPUT = "public/og-image.jpg";

if (!existsSync(SOURCE)) {
  console.error(`Source image not found: ${SOURCE}`);
  process.exit(1);
}

if (existsSync(OUTPUT) && statSync(OUTPUT).mtimeMs >= statSync(SOURCE).mtimeMs) {
  console.info("OG image is up to date, skipping.");
  process.exit(0);
}

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

  await sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
    .composite([{ input: rounded, gravity: "center" }])
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile("public/og-image.jpg");

  console.info("Wrote new Open Graph image to: public/og-image.jpg");
} catch(err){
  console.error("OG image generation failed:", err);
  process.exit(1);
}

