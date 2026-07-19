import { client } from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";

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

  // Safety check: if no post exists, show a simple "Not found" message
  if (!post) {
    return (
      <main className="p-12 text-center text-white">
        <h1 className="text-2xl">Post not found.</h1>
      </main>
    );
  }

  // Render the post
  return (
    <main className="max-w-3xl mx-auto p-12 text-white/90 bg-black/50 backdrop-blur-sm rounded-3xl mt-20">
      <h1 className="text-5xl font-bold mb-6">{post.title}</h1>
      <div className="prose prose-invert prose-lg">
        <PortableText value={post.body} />
      </div>
    </main>
  );
}