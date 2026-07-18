import { client } from "@/sanity/client";
import { PortableText } from "@portabletext/react";

// This tells Next.js to treat params as a Promise, fixing the recent error
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
    <main className="max-w-3xl mx-auto p-12 text-white/90 bg-black/50 backdrop-blur-md rounded-2xl border border-white/10">
      <h1 className="text-5xl font-bold mb-6">{post.title}</h1>
      
      {/* 
         The 'prose' classes come from the @tailwindcss/typography plugin.
         They automatically style your blog body content.
      */}
      <div className="prose prose-invert prose-lg">
        <PortableText value={post.body} />
      </div>
    </main>
  );
}