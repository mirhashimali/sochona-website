import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin",
        "/admin/leads",
        "/studio",
        "/api/",
        "/thank-you"
      ],
    },
    sitemap: "https://sochona.net/sitemap.xml",
  };
}