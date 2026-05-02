"use client";

import { useCartStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const { items, removeFromCart, getCartTotal } = useCartStore();

  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          {items.length === 0 ? (
            <div className="bg-muted/20 p-6 rounded-2xl border border-border/50 text-center py-12">
              <p className="text-muted-foreground mb-4">Your cart is currently empty.</p>
              <Link href="/shop">
                <Button>Continue Shopping</Button>
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="flex gap-4 bg-muted/20 p-4 rounded-2xl border border-border/50">
                <div className="relative w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-background">
                  <Image 
                    src={item.product.image} 
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col flex-grow justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold line-clamp-1">{item.product.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.product.category}</p>
                    </div>
                    <p className="font-bold">{item.product.price}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium">Qty: {item.quantity}</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        <div className="md:col-span-1 bg-muted/20 p-6 rounded-2xl border border-border/50 h-fit sticky top-24">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span className="text-muted-foreground">Subtotal</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4 pb-4 border-b border-border/50">
            <span className="text-muted-foreground">Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <div className="flex justify-between font-bold text-lg mb-6">
            <span>Total</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>
          <Button 
            className="w-full py-6 text-lg rounded-xl" 
            disabled={items.length === 0}
          >
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
