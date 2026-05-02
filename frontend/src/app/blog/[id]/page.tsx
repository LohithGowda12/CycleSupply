import { blogPosts } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function BlogDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.id === parseInt(resolvedParams.id));

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
        <Link href="/blog">
          <Button>Back to Blog</Button>
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen pb-24">
      {/* Banner */}
      <div className="relative w-full h-[40vh] md:h-[60vh] bg-muted/20">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-end container mx-auto max-w-4xl px-4 pb-12">
          <span className="text-sm font-bold text-primary uppercase tracking-wider mb-4 drop-shadow-md">{post.category}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all articles
        </Link>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 font-medium">
            {post.excerpt}
          </p>
          <div className="w-12 h-1 bg-primary mb-8 rounded-full" />
          <p className="text-lg leading-relaxed whitespace-pre-wrap">
            {post.content}
          </p>
        </div>
      </div>
    </article>
  );
}
