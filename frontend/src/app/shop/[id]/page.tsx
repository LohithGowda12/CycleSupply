"use client";

import { use } from "react";
import { products } from "@/lib/data";
import { useCartStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Shield, Truck } from "lucide-react";

export default function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const product = products.find((p) => p.id === parseInt(resolvedParams.id));
  const addToCart = useCartStore((state) => state.addToCart);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Product not found</h1>
        <Link href="/shop">
          <Button>Back to Shop</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-16">
      <Link href="/shop" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Shop
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="bg-muted/20 rounded-3xl p-8 flex items-center justify-center border border-border/50 relative overflow-hidden min-h-[400px]">
          <Image 
            src={product.image} 
            alt={product.name} 
            fill
            className="object-cover rounded-3xl"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <div className="mb-2">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">{product.category}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
          <p className="text-3xl font-bold mb-8">{product.price}</p>
          
          <div className="mb-8">
            <p className="text-muted-foreground text-lg leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Check className="w-5 h-5 text-green-500" />
              <span>In stock and ready to ship</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Truck className="w-5 h-5 text-blue-500" />
              <span>Free shipping on orders over $100</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Shield className="w-5 h-5 text-purple-500" />
              <span>2-year manufacturer warranty</span>
            </div>
          </div>

          <div className="mt-auto pt-8 border-t border-border/50">
            <Button 
              size="lg" 
              className="w-full sm:w-auto px-12 py-6 text-lg rounded-xl font-bold hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
