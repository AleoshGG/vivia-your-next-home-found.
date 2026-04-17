import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-20">
      {/* Subtle decorative background elements */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-primary/5 to-transparent opacity-60" />

      <div className="container relative">
        <div className="mx-auto max-w-5xl text-center animate-fade-up">
          <h1 className="font-display text-6xl font-bold leading-[1.1] tracking-tight text-[#111827] md:text-8xl lg:text-[100px]">
            Encuentra tu hogar <br />
            <span className="italic text-primary font-display">sin distracciones.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
            Adiós al ruido de las redes sociales. VIVIA es un entorno exclusivo, <br className="hidden md:block" />
            seguro y enfocado netamente en lo que importa: <span className="font-bold text-[#111827]">tu próximo inmueble.</span>
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group h-12 gap-2 rounded-full bg-primary px-8 text-lg font-bold text-white transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
            >
              Explorar App
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              className="h-12 rounded-full bg-[#111827] px-8 text-lg font-bold text-white transition-all hover:bg-[#111827]/90 hover:scale-105 active:scale-95"
            >
              Ver Demo Online
            </Button>
          </div>
        </div>

        {/* Mockups */}
        <div className="relative mx-auto mt-16 grid max-w-6xl grid-cols-1 items-end gap-4 md:grid-cols-3">
          <PhoneFrame 
            className="md:translate-y-8" 
            image={`${import.meta.env.BASE_URL}Screenshot_20260415-190333.png`} 
          />
          <PhoneFrame 
            className="md:-translate-y-4 md:scale-110 z-10" 
            image={`${import.meta.env.BASE_URL}Screenshot_20260415-190400.png`} 
            featured 
          />
          <PhoneFrame 
            className="md:translate-y-8" 
            image={`${import.meta.env.BASE_URL}Screenshot_20260415-190408.png`} 
          />
        </div>
      </div>
    </section>
  );
};

const PhoneFrame = ({
  className = "",
  image,
  featured = false,
}: {
  className?: string;
  image: string;
  featured?: boolean;
}) => (
  <div className={`relative ${className} animate-float`} style={{ animationDelay: featured ? "0s" : "1s" }}>
    <div
      className={`mx-auto aspect-[9/19] w-full max-w-[300px] overflow-hidden rounded-[3rem] border-[10px] border-[#111827] bg-muted shadow-2xl ${
        featured ? "ring-4 ring-primary/10" : ""
      }`}
    >
      <img 
        src={image} 
        alt="Vivia App Screenshot" 
        className="h-full w-full object-cover" 
      />
    </div>
    {featured && (
      <div className="absolute -inset-10 -z-10 rounded-full bg-primary/10 blur-[100px]" />
    )}
  </div>
);
