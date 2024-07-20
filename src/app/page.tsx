"use client";
import IndexHero from "@/components/IndexPage/IndexHero";
import IndexVideo from "@/components/IndexPage/IndexVideo";
import IndexNav from "@/components/Navigation/IndexNav";

export default function Home() {
  return (
    <main className="relative">
      <IndexHero />
      <IndexVideo />
      <IndexNav />
    </main>
  );
}
