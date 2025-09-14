
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Next.js SaaS MVP Boilerplate</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        This is a modern, visually appealing MVP boilerplate for SaaS applications.
      </p>
      <Button className="mt-8">Get Started</Button>
    </main>
  );
}
