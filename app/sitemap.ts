import { MetadataRoute } from "next";
import { client } from "@/sanity/client";

const baseUrl = "https://sochona.net";

// All static routes with structured priority
const staticRoutes = [
  // Flagship Hubs (Highest Priority)
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/in", priority: 1.0, changeFrequency: "weekly" as const },

  // Core Pillars & High-Ticket Indian Verticals
  { path: "/in/b2b-manufacturing", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/in/healthcare", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/in/real-estate", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/in/education", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/in/d2c-brands", priority: 0.9, changeFrequency: "weekly" as const },

  // Core Execution Pillars
  { path: "/in/zero-ad-waste", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/in/speed-infrastructure", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/in/whatsapp-automation", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/in/custom-crm", priority: 0.8, changeFrequency: "monthly" as const },

  // Global Core Pages
  { path: "/book", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/attract", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/convert", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/run-smarter", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services", priority: 0.8, changeFrequency: "monthly" as const },

  // Global Specialized Hubs
  { path: "/services/automation", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services/automation/ai-chatbot-integration", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/automation/custom-crm-vs-saas", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/automation/proposal-invoice-automation", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/automation/unified-admin-dashboards", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/branding", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services/branding/strategic-rebranding", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/branding/the-cost-of-fragmentation", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/branding/ui-ux-conversion-friction", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/branding/visual-psychology-roi", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/consulting", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services/consulting/ai-competitive-moat", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/consulting/diagnosing-revenue-leakage", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/consulting/digital-transformation-blueprint", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/consulting/fractional-executive-advantage", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/maintenance", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services/maintenance/core-web-vitals-penalty", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/maintenance/edge-architecture-latency", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/maintenance/proactive-code-maintenance", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/maintenance/zero-trust-security", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/performance-marketing", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services/performance-marketing/attribution-in-privacy-era", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/performance-marketing/pmax-vs-search-intent", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/performance-marketing/scaling-capital-strategy", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/performance-marketing/the-economics-of-cro", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/seo", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services/seo/ai-overviews", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/seo/entity-authority", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/seo/local-monopoly", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/seo/technical-infrastructure", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/web-development", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services/web-development/conversion-first-ux", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/web-development/edge-delivery-performance", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/web-development/modern-stack-vs-cms", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/web-development/pwa-vs-native", priority: 0.7, changeFrequency: "monthly" as const },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  let blogEntries: MetadataRoute.Sitemap = [];
  
  // Safe fetch with fallback: will never crash deployment if Sanity is down
  try {
    const posts: { slug: { current: string } }[] = await client.fetch(
      `*[_type == "post"]{ slug }`
    );

    if (posts && Array.isArray(posts)) {
      blogEntries = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug.current}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }));
    }
  } catch (error) {
    console.error("Sanity sitemap fetch error (safely handled):", error);
  }

  return [...staticEntries, ...blogEntries];
}