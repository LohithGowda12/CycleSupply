import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/data";

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">CycleSupply Blog</h1>
      <p className="text-muted-foreground text-lg mb-12">Read the latest news, guides, and reviews from the cycling world.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="group">
            <div className="bg-muted/20 border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
              <div className="h-56 relative w-full overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{post.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
                <div className="mt-auto pt-4 text-sm font-medium text-primary flex items-center">
                  Read More <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
