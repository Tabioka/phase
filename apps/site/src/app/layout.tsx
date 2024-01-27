import "@/styles/globals.css"
import "@/styles/keyframes.css"

import { GeistSans } from "geist/font/sans"

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Metadata, Viewport } from "next"

import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"

import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"


export const metadata = {
  title: { default: siteConfig.name, template: `%s - ${siteConfig.name}` },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  authors: siteConfig.author,
  creator: siteConfig.creator,
  keywords: siteConfig.keywords,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 2656,
        height: 1080,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@" + siteConfig.creator,
  },
  icons: {
    icon: siteConfig.favicon,
    apple: siteConfig.apple,
  },
} satisfies Metadata


export const viewort = {
  colorScheme: "dark",
  themeColor: "#f8f8f8",
} satisfies Viewport


export default ({ children }: { children: React.ReactNode }) => (
  <html lang="en" style={{ colorScheme: "dark" }}>
    <body className={cn("font-geist-sans tracking-tight", GeistSans.variable)}>
      <TooltipProvider children={children} />
      <Toaster />
      <Analytics />
      <SpeedInsights />
    </body>
  </html>
)
