import { client } from "@/sanity/client";
import Link from "next/link";

// Instructs Next.js to revalidate the cache every 30 seconds if a new request comes in.
// You get the speed of a static site with the freshness of a dynamic database.
export const revalidate = 30;

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
}

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(`*[_type == "post"]`);

  return (
    <main className="p-12 max-w-4xl mx-auto w-full pt-24">
      <h1 className="text-4xl font-bold mb-8">Agency Blog</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug.current}`}
            className="block p-6 border border-white/10 rounded-xl hover:border-white/30 transition-all"
          >
            <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
            <p className="text-sm text-white/50 mt-2">Read more →</p>
          </Link>
        ))}
      </div>
    </main>
  );
}