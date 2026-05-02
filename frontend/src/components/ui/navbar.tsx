"use client";

import { ArrowUpRight, Menu, Search, ShoppingBasket, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useCartStore } from "@/lib/store";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Collections", href: "/collections" },
  { name: "Blog", href: "/blog" },
];

export function Navbar() {
  const cartItems = useCartStore((state) => state.items);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          CycleSupply
        </Link>

        <nav className="hidden lg:flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} passHref legacyBehavior>
              <Button 
                variant="ghost" 
                className="cursor-pointer relative group hover:text-primary transition-colors text-base font-medium"
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link href="/search">
            <Button variant="ghost" size="icon" className="cursor-pointer hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="cursor-pointer hover:text-primary transition-colors relative">
              <ShoppingBasket className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Button>
          </Link>
          <Link href="/login">
            <Button
              variant="secondary"
              className="cursor-pointer bg-primary-foreground p-0 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group text-secondary ml-2"
            >
              <span className="pl-4 py-2 text-sm font-medium">John Doe</span>
              <div className="rounded-full flex items-center justify-center m-auto bg-background w-8 h-8 ml-2 group-hover:scale-110 transition-transform duration-300">
                <User className="w-4 h-4 text-foreground" />
              </div>
            </Button>
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild className="lg:hidden ml-auto">
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[300px] sm:w-[400px] p-0 bg-background/95 backdrop-blur-md border-r border-border/50"
          >
            <SheetHeader className="p-6 text-left border-b border-border/50">
              <SheetTitle className="flex items-center justify-between">
                <Link href="/" className="text-xl font-semibold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  CycleSupply
                </Link>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col p-6 space-y-1">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} passHref legacyBehavior>
                  <Button 
                    variant="ghost" 
                    className="justify-start px-2 h-12 text-base font-medium hover:bg-accent/50 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </nav>
            <Separator className="mx-6" />
            <div className="p-6 flex flex-col gap-4">
              <Link href="/search" passHref legacyBehavior>
                <Button variant="outline" className="justify-start gap-2 h-12 hover:bg-accent/50 transition-colors w-full">
                  <Search className="w-4 h-4" />
                  Search
                </Button>
              </Link>
              <Link href="/cart" passHref legacyBehavior>
                <Button variant="outline" className="justify-start gap-2 h-12 hover:bg-accent/50 transition-colors relative w-full">
                  <ShoppingBasket className="w-4 h-4" />
                  Cart
                  <span className="absolute right-3 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                    {cartItemCount}
                  </span>
                </Button>
              </Link>
            </div>
            <Separator className="mx-6" />
            <div className="p-6">
              <Link href="/login" passHref legacyBehavior>
                <Button className="w-full h-12 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl">
                  John Doe
                  <User className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
