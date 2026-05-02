import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 bg-muted/20 p-8 rounded-3xl border border-border/50">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Welcome back</h2>
          <p className="text-muted-foreground mt-2">Log in to your CycleSupply account</p>
        </div>
        
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input id="email" type="email" placeholder="you@example.com" required />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
            </div>
            <Input id="password" type="password" required />
          </div>
          
          <Button type="submit" className="w-full text-base h-12">
            Sign In
          </Button>
        </form>
        
        <div className="text-center text-sm text-muted-foreground mt-4">
          Don't have an account? <a href="#" className="text-primary hover:underline">Sign up</a>
        </div>
      </div>
    </div>
  );
}
