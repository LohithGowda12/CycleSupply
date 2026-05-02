import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SearchPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-8">What are you looking for?</h1>
      
      <div className="flex w-full max-w-2xl mx-auto items-center space-x-2 mb-12">
        <Input 
          type="search" 
          placeholder="Search for parts, tools, or accessories..." 
          className="h-14 text-lg rounded-full px-6 bg-muted/20 border-border/50" 
        />
        <Button type="submit" size="icon" className="h-14 w-14 rounded-full">
          <Search className="h-6 w-6" />
        </Button>
      </div>

      <div className="text-left">
        <h2 className="text-xl font-semibold mb-4">Popular Searches</h2>
        <div className="flex flex-wrap gap-3">
          {["11-speed chain", "tubeless tires", "carbon drop bars", "disc brake pads"].map((term) => (
            <span key={term} className="px-4 py-2 rounded-full bg-muted/50 border border-border text-sm font-medium hover:bg-primary/10 hover:text-primary transition cursor-pointer">
              {term}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
