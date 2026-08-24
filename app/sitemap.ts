import type { MetadataRoute } from "next"

const baseUrl = "https://central-laboratory-for-testing-moni.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/ar/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
        url: `${baseUrl}/ar/contact_Us`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
      url: `${baseUrl}/ar/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ar/about_Us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // {
    //   url: `${baseUrl}/en/`,
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 1,
    // },
    // {
    //   url: `${baseUrl}/en/contact_Us`,
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
    // {
    //   url: `${baseUrl}/en/about_Us`,
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
    // {
    //   url: `${baseUrl}/en/services`,
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
  ]
}