"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useCartStore } from "@/lib/store";
import Link from "next/link";

export default function ShopPage() {
  const [products, setProducts] = useState<any[]>([]);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    fetch('https://cycle-supply-api-193664692195.us-central1.run.app/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Failed to fetch products from backend:", err));
  }, []);

  return (
    <div className="container mx-auto max-w-7xl px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Shop All Parts</h1>
        <div className="bg-green-500/10 text-green-600 px-4 py-2 rounded-full text-sm font-medium border border-green-500/20">
          Connected to Live Backend API
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Filters Sidebar */}
        <div className="lg:col-span-1 border-r border-border/50 pr-6 hidden lg:block">
          <h2 className="text-xl font-semibold mb-6 border-b border-border/50 pb-2">Filters</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3">Categories</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {["Drivetrain", "Wheels & Tires", "Components", "Apparel", "Tools", "Accessories"].map(cat => (
                  <li key={cat} className="flex items-center space-x-2 cursor-pointer hover:text-primary transition-colors">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>{cat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">Price Range</h3>
              <input type="range" className="w-full" />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>$0</span>
                <span>$6000+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground">Showing 1-{products.length} products from Database</p>
            <select className="bg-background border border-border rounded-md px-3 py-1 text-sm">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.length === 0 ? (
              <p className="col-span-3 text-center text-muted-foreground py-12">Loading products from backend...</p>
            ) : products.map((product) => (
              <div key={product.id} className="group bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col relative">
                <Link href={`/shop/${product.id}`} className="absolute inset-0 z-10">
                  <span className="sr-only">View {product.name}</span>
                </Link>
                
                <div className="relative h-48 w-full bg-muted/20 p-4 flex items-center justify-center overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    width={400}
                    height={300}
                    className="object-cover w-full h-full rounded-xl group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
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
                  <Button 
                    className="w-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 relative z-20"
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
