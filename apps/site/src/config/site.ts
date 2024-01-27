import { absoluteURL } from "@/lib/utils"

export const siteConfig = {
  name: "Phase Bot",
  url: absoluteURL(""),
  ogImage: absoluteURL("/opengraph-image.png"),
  favicon: absoluteURL("/favicon.png"),
  apple: absoluteURL("/phase.png"),
  description:
    "Phase is a free to use, open source Discord bot that aims to be the all-in-one solution for as many servers as possible.",
  creator: "notcharliee",
  author: {
    name: "notcharliee",
    url: "https://github.com/notcharliee",
  },
  links: {
    twitter: "https://twitter.com/notcharliee",
    github: "https://github.com/notcharliee/phase",
  },
  keywords: [
    "Discord",
    "Bot",
    "Phase",
    "Free",
  ],
}

export type SiteConfig = typeof siteConfig