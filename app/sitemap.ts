import { MetadataRoute } from "next";
import { client } from "@/sanity/client";

const baseUrl = "https://sochona.net";

// All static routes in the site
const staticRoutes = [
  "",
  "/about",
  "/contact",
  "/blog",
  "/attract",
  "/convert",
  "/run-smarter",
  "/services",
  "/services/automation",
  "/services/automation/ai-chatbot-integration",
  "/services/automation/custom-crm-vs-saas",
  "/services/automation/proposal-invoice-automation",
  "/services/automation/unified-admin-dashboards",
  "/services/branding",
  "/services/branding/strategic-rebranding",
  "/services/branding/the-cost-of-fragmentation",
  "/services/branding/ui-ux-conversion-friction",
  "/services/branding/visual-psychology-roi",
  "/services/consulting",
  "/services/consulting/ai-competitive-moat",
  "/services/consulting/diagnosing-revenue-leakage",
  "/services/consulting/digital-transformation-blueprint",
  "/services/consulting/fractional-executive-advantage",
  "/services/maintenance",
  "/services/maintenance/core-web-vitals-penalty",
  "/services/maintenance/edge-architecture-latency",
  "/services/maintenance/proactive-code-maintenance",
  "/services/maintenance/zero-trust-security",
  "/services/performance-marketing",
  "/services/performance-marketing/attribution-in-privacy-era",
  "/services/performance-marketing/pmax-vs-search-intent",
  "/services/performance-marketing/scaling-capital-strategy",
  "/services/performance-marketing/the-economics-of-cro",
  "/services/seo",
  "/services/seo/ai-overviews",
  "/services/seo/entity-authority",
  "/services/seo/local-monopoly",
  "/services/seo/technical-infrastructure",
  "/services/web-development",
  "/services/web-development/conversion-first-ux",
  "/services/web-development/edge-delivery-performance",
  "/services/web-development/modern-stack-vs-cms",
  "/services/web-development/pwa-vs-native",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  // Pull all blog post slugs from Sanity for dynamic entries
  const posts: { slug: { current: string } }[] = await client.fetch(
    `*[_type == "post"]{ slug }`
  );

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...blogEntries];
}