import { Navbar } from "@/components/vivia/Navbar";
import { Hero } from "@/components/vivia/Hero";
import { Problem } from "@/components/vivia/Problem";
import { Solution } from "@/components/vivia/Solution";
import { Features } from "@/components/vivia/Features";
import { CTA } from "@/components/vivia/CTA";
import { Footer } from "@/components/vivia/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <Solution />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
