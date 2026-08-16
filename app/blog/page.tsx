import { client } from "@/sanity/client";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Blog & Insights",
  description: "Technical insights on modern web architecture, AI systems, and performance marketing from the Sochona team.",
};

// Instructs Next.js to revalidate the cache every 30 seconds if a new request comes in.
// You get the speed of a static site with the freshness of a dynamic database.
export const revalidate = 30;

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt?: string;
}

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(`*[_type == "post"] | order(_createdAt desc)`);

  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10 space-y-12">
        {/* Header Section */}
        <div className="space-y-4">
          <div className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-sm font-medium text-neutral-400">
            <span className="flex h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Knowledge Base
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Engineering & <span className="text-orange-500">Systems Blog</span>
          </h1>
          <p className="text-neutral-400 max-w-2xl text-lg leading-relaxed">
            Deep dives into modern web architecture, AI agent automation, and data-driven scaling strategies.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-6">
          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group block p-8 bg-neutral-900/60 border border-neutral-800 rounded-3xl hover:border-neutral-700 hover:bg-neutral-900/90 transition-all backdrop-blur-sm"
              >
                <div className="flex justify-between items-start gap-4">
                  <h2 className="text-2xl font-semibold text-white group-hover:text-orange-400 transition-colors">
                    {post.title}
                  </h2>
                  <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                </div>
                {post.excerpt && (
                  <p className="text-neutral-400 text-sm mt-3 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                )}
                <div className="flex items-center gap-2 text-xs text-neutral-500 mt-6 font-medium">
                  <span>Read article</span>
                  <span>→</span>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center py-16 bg-neutral-900/40 border border-neutral-800 rounded-3xl">
              <p className="text-neutral-400">No articles published yet. Check back soon.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}