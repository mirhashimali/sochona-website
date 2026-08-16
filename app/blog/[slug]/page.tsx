import { client } from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// This generates the SEO tags dynamically
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug });
  
  return {
    title: post?.title || "Blog Post",
    description: post?.excerpt || "Read our latest insights on the Sochona blog.",
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // We must await the params before extracting the slug
  const { slug } = await params;

  // Fetch the data from Sanity
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug }
  );

  // Safety check: if no post exists, show a styled "Not found" message
  if (!post) {
    return (
      <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-md w-full bg-neutral-900/60 border border-neutral-800 rounded-3xl p-8 text-center space-y-4 backdrop-blur-sm relative z-10">
          <h1 className="text-2xl font-bold">Post not found.</h1>
          <p className="text-neutral-400 text-sm">The article you are looking for does not exist or has been removed.</p>
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sm text-neutral-900 bg-white font-medium px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  // Render the post
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 space-y-10">
        {/* Back Link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Blog
        </Link>

        {/* Article Header */}
        <div className="space-y-4 border-b border-neutral-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            {post.title}
          </h1>
          {post.publishedAt && (
            <p className="text-sm text-neutral-500">
              Published on {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          )}
        </div>

        {/* Article Body */}
        <div className="text-neutral-300 leading-relaxed">
          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-orange-400 prose-strong:text-white">
            <PortableText value={post.body} />
          </div>
        </div>
      </div>
    </main>
  );
}