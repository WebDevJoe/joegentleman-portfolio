import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { MyWork } from "@/components/MyWork";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-stretch bg-white">
      <Nav />
      <Hero />
      <MyWork />
      <CtaSection />
      <Footer />
    </main>
  );
}
