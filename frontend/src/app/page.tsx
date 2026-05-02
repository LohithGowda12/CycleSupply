import { CommerceHero } from "@/components/ui/commerce-hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";

export default function Home() {
  // Get 4 featured products
  const featuredProducts = products.slice(0, 4);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <CommerceHero />

      {/* Featured Products Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trending Now</h2>
              <p className="text-muted-foreground text-lg max-w-2xl">Discover the most popular gear our community is riding right now.</p>
            </div>
            <Link href="/shop" passHref>
              <Button variant="outline" className="hidden md:flex">View All</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <div key={product.id} className="group bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col relative">
                <Link href={`/shop/${product.id}`} className="absolute inset-0 z-10">
                  <span className="sr-only">View {product.name}</span>
                </Link>
                <div className="relative h-48 w-full bg-muted/20 p-4 flex items-center justify-center overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-muted-foreground z-20">
                    {product.category}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors line-clamp-2 relative z-20">
                    <Link href={`/shop/${product.id}`}>{product.name}</Link>
                  </h3>
                  <p className="text-xl font-bold mt-auto pt-4 relative z-20">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/shop" passHref>
            <Button variant="outline" className="w-full mt-8 md:hidden">View All Products</Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Rider Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah J.", role: "Gravel Racer", quote: "CycleSupply had the exact groupset I needed when nobody else did. Fast shipping and perfect packaging." },
              { name: "Mike T.", role: "Weekend Warrior", quote: "The customer service is unmatched. They helped me pick out the perfect wheelset for my local climbs." },
              { name: "Elena R.", role: "Commuter", quote: "High-quality gear that actually lasts. I've bought all my winter apparel from them and it's fantastic." }
            ].map(testimonial => (
              <div key={testimonial.name} className="bg-muted/10 p-8 rounded-3xl border border-border/50 relative text-left">
                <div className="text-4xl text-primary/20 absolute top-4 left-6">"</div>
                <p className="text-lg relative z-10 mb-6 italic text-muted-foreground pt-4">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Join the Peloton</h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive deals, early access to new gear, and the latest cycling guides.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-20">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-secondary relative z-20"
            />
            <Button size="lg" variant="secondary" className="rounded-xl px-8 font-bold text-primary hover:bg-secondary/90 transition-colors relative z-20">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}
