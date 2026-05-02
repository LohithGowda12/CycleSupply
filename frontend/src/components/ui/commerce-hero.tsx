"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Drivetrain",
    image: "/images/cat_drivetrain.png",
    href: "/shop",
  },
  {
    title: "Wheels & Tires",
    image: "/images/cat_wheels.png",
    href: "/shop",
  },
  {
    title: "Accessories",
    image: "/images/cat_accessories.png",
    href: "/shop",
  },
  {
    title: "Apparel",
    image: "/images/cat_apparel.png",
    href: "/shop",
  },
];

export function CommerceHero() {
  return (
    <div className="w-full relative container px-2 mx-auto max-w-7xl min-h-screen pb-12">
      
      {/* Hero Section with Background Image */}
      <div className="mt-6 rounded-3xl relative overflow-hidden min-h-[70vh] flex items-center justify-center">
        <Image 
          src="/images/hero_bg.png" 
          alt="Cyclist climbing mountain"
          fill
          className="object-cover object-center absolute inset-0 z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20 z-10" />
        
        <motion.section
          className="w-full px-4 py-24 relative z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight text-white drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Build your dream bike
              <br />
              with the finest parts.
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Explore our comprehensive catalog of high-performance drivetrain components, durable wheels, and essential accessories for every terrain.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <Link href="/shop" passHref>
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                  Shop All Gear
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mt-12">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            className="group relative bg-muted/50 backdrop-blur-sm rounded-3xl p-4 sm:p-6 min-h-[250px] sm:min-h-[300px] w-full overflow-hidden transition-all duration-500 border border-border/20 shadow-sm hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          >
            <Link href={category.href} className="absolute inset-0 z-20">
              <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[clamp(1.5rem,4vw,2.5rem)] font-bold relative z-10 text-white my-2 sm:my-4 group-hover:text-white/90 transition-colors duration-300 drop-shadow-md">
                {category.title}
              </h2>
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover opacity-70 group-hover:scale-110 group-hover:opacity-90 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-background/95 backdrop-blur-sm rounded-tl-xl flex items-center justify-center z-10 border-l border-t border-border/50">
                <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <ArrowUpRight className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
