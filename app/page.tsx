
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">SaaS MVP</div>
        <nav>
          <Button variant="ghost">Sign In</Button>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center p-8">
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/20 max-w-2xl">
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight mb-4">
            The Modern Boilerplate for Your Next Big Idea
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Launch your SaaS application faster than ever with our pre-built, production-ready MVP boilerplate. Focus on your product, not the boilerplate.
          </p>
          <Button size="lg" className="group">
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </main>

      <footer className="p-4 text-center text-gray-400">
        <p>&copy; 2024 SaaS MVP. All rights reserved.</p>
      </footer>
    </div>
  );
}
