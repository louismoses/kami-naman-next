"use client";
import IndexHero from "@/components/IndexPage/IndexHero";
import IndexVideo from "@/components/IndexPage/IndexVideo";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="relative">
      <IndexHero />
      <IndexVideo />
      <div className="absolute z-10 w-full flex flex-col items-center bottom-16">
        <div>
          <Button size="md" variant="outlined">
            Read more
          </Button>
        </div>
        <div>sm icons</div>
      </div>
    </main>
  );
}
