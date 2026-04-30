export interface JobExperience {
  title: string
  slug: string
  icon: string
  link: string
  items: string[]
  startAt: string
  endAt: string
}

export const experience: JobExperience[] = [
  {
    title: "Idopter Labs",
    slug: "idopter-labs",
    icon: "https://cdn.prod.website-files.com/60930e761e53ba18e420b3c7/609319a4e3a75fe9bbd58f7a_principal-negativo-dark.svg",
    link: "https://en.idopterlabs.com.br/",
    items: [
      "Building and maintaining a multi-sided B2B marketplace platform with integrated business management (Elixir, Phoenix).",
      "Lead development of an Elixir/Strapi CMS platform deployed to a university client.",
      "Development of internal workflow tooling inspired by Shortcut."
    ],
    startAt: "2023",
    endAt: "current"
  },
  {
    title: "Midiacode",
    slug: "midiacode",
    icon: "https://static.midiacode.com/favicon/midiacode/favicon-128x128.png",
    link: "https://midiacode.com/",
    items: [
      "Built a CMS platform using Vue.js and Firebase within a distributed architecture.",
      "Architected and maintained Python APIs and GCP Cloud Functions."
    ],
    startAt: "2021",
    endAt: "2023"
  },
  {
    title: "Freelance",
    slug: "freelance",
    icon: "",
    link: "",
    items: [
      "Delivered custom web solutions for small businesses.",
      "Modernized and maintained legacy Python APIs."
    ],
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
    items: [
      "Volunteering at Devs Norte, helping connect developers across Northern Brazil by organizing events, facilitating discussions on technology, and supporting career growth."
    ],
    startAt: "2019",
    endAt: "current"
  }
];
