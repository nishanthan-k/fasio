import { BrandCarousel } from "@/components/BrandCarousel";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <BrandCarousel />
    </div>
  );
}
