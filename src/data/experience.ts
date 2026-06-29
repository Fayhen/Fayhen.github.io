import type { Locale } from "../i18n/locales";

export interface JobExperience {
  title: string
  slug: string
  icon: string
  link: string
  items: Record<Locale, string[]>
  startAt: string
  endAt: string
}

export const experience: JobExperience[] = [
  {
    title: "Idopter Labs",
    slug: "idopter-labs",
    icon: "https://cdn.prod.website-files.com/60930e761e53ba18e420b3c7/609319a4e3a75fe9bbd58f7a_principal-negativo-dark.svg",
    link: "https://en.idopterlabs.com.br/",
    items: {
      "en": [
        "Building and maintaining a multi-sided B2B marketplace platform with integrated business management (Elixir, Phoenix).",
        "Lead development of an Elixir/Strapi CMS platform deployed to a university institution.",
        "Development of internal workflow tooling inspired by Shortcut."
      ],
      "pt-br": [
        "Construção e manutenção de uma plataforma de marketplace B2B multilateral com gestão empresarial integrada (Elixir, Phoenix).",
        "Liderança no desenvolvimento de uma plataforma CMS em Elixir/Strapi entregue a uma instituição universitária.",
        "Desenvolvimento de ferramentas internas de fluxo de trabalho inspiradas no Shortcut."
      ]
    },
    startAt: "2023",
    endAt: "current"
  },
  {
    title: "Midiacode",
    slug: "midiacode",
    icon: "https://static.midiacode.com/favicon/midiacode/favicon-128x128.png",
    link: "https://midiacode.com/",
    items: {
      "en": [
        "Built a CMS platform using Vue.js and Firebase within a distributed architecture.",
        "Architected and maintained Python APIs and GCP Cloud Functions."
      ],
      "pt-br": [
        "Construção de uma plataforma CMS com Vue.js e Firebase em uma arquitetura distribuída.",
        "Arquitetura e manutenção de APIs em Python e Cloud Functions na GCP."
      ]
    },
    startAt: "2021",
    endAt: "2023"
  },
  {
    title: "Freelance",
    slug: "freelance",
    icon: "/images/tool-icon.svg",
    link: "",
    items: {
      "en": [
        "Delivered custom web solutions for small businesses.",
        "Modernized and maintained legacy Python APIs."
      ],
      "pt-br": [
        "Entrega de soluções web sob medida para pequenas empresas.",
        "Modernização e manutenção de APIs legadas em Python."
      ]
    },
    startAt: "2020",
    endAt: "2021"
  }
];

export const volunteering: JobExperience[] = [
  {
    title: "Devs Norte",
    slug: "devs-norte",
    icon: "/images/devs-norte.svg",
    link: "https://devsnorte.com/",
    items: {
      "en": [
        "Volunteering at Devs Norte, helping connect developers across Northern Brazil by organizing events, facilitating discussions on technology, and supporting career growth."
      ],
      "pt-br": [
        "Voluntariado na Devs Norte, ajudando a conectar pessoas desenvolvedoras do Norte do Brasil por meio da organização de eventos, da facilitação de discussões sobre tecnologia e do apoio ao crescimento de carreira.",
      ]
    },
    startAt: "2019",
    endAt: "current"
  }
];

export const years = () => Math.abs(new Date().getFullYear() - 2020);
