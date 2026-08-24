import type { MetadataRoute } from "next"

const baseUrl = "https://central-laboratory-for-testing-moni.vercel.app"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}