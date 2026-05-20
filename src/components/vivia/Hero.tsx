import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-20 md:pt-28 md:pb-32 lg:min-h-[90vh] lg:flex lg:items-center">
      {/* Subtle decorative background elements */}
      <div className="pointer-events-none absolute right-0 top-0 -translate-y-1/3 translate-x-1/3 h-[800px] w-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_60%)] from-primary/15 to-transparent blur-3xl opacity-80" />
      <div className="pointer-events-none absolute left-0 bottom-0 translate-y-1/3 -translate-x-1/3 h-[600px] w-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_60%)] from-primary/5 to-transparent blur-3xl" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8 items-center">
          
          {/* Left Side: Content */}
          <div className="flex flex-col text-left animate-fade-up max-w-2xl">
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-7xl lg:text-[80px]">
              Encuentra tu <br />
              hogar <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow italic">sin ruido.</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl leading-relaxed text-muted-foreground">
              Adiós al caos de las redes sociales. VIVIA es un entorno exclusivo, seguro y enfocado netamente en lo que importa: 
              <span className="font-semibold text-ink"> tu próximo inmueble.</span>
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              {/* <Button
                size="lg"
                className="group h-14 gap-3 rounded-full bg-primary px-8 text-lg font-semibold text-white shadow-glow transition-all hover:bg-primary-glow hover:scale-[1.02] active:scale-95"
              >
                Explorar App
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button> */}
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-border bg-card/50 backdrop-blur-sm px-8 text-lg font-semibold text-ink transition-all hover:bg-accent/10 hover:border-accent/30 hover:text-primary active:scale-95"
              >
                Ver Demo Online
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center font-bold text-xs">A</div>
                <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center font-bold text-xs text-primary">M</div>
                <div className="w-10 h-10 rounded-full bg-ink border-2 border-background flex items-center justify-center font-bold text-xs text-white">L</div>
              </div>
              <p>+2,000 usuarios ya encontraron su lugar</p>
            </div>
          </div>

          {/* Right Side: Phone Mockups */}
          <div className="relative h-[500px] md:h-[650px] w-full">
            {/* Left Phone (Background) */}
            <PhoneFrame 
              className="absolute left-0 lg:-left-12 top-20 -rotate-12 scale-[0.85] opacity-60 hover:opacity-100 hover:rotate-0 hover:z-30 transition-all duration-500 ease-out z-10" 
              image={`${import.meta.env.BASE_URL}Screenshot_20260415-190333.png`} 
            />
            
            {/* Center Phone (Featured) */}
            <PhoneFrame 
              className="absolute left-1/2 -translate-x-1/2 top-0 z-20 shadow-2xl hover:-translate-y-4 transition-all duration-500 ease-out" 
              image={`${import.meta.env.BASE_URL}Screenshot_20260415-190400.png`} 
              featured 
            />
            
            {/* Right Phone (Background) */}
            <PhoneFrame 
              className="absolute right-0 lg:-right-4 top-16 rotate-12 scale-[0.9] opacity-80 hover:opacity-100 hover:rotate-0 hover:z-30 transition-all duration-500 ease-out z-10" 
              image={`${import.meta.env.BASE_URL}Screenshot_20260415-190408.png`} 
            />
          </div>

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
  <div className={`group ${className}`} style={{ animationDelay: featured ? "0s" : "0.5s" }}>
    <div
      className={`mx-auto aspect-[9/19] w-full max-w-[260px] md:max-w-[300px] overflow-hidden rounded-[2.5rem] md:rounded-[3rem] border-8 md:border-[10px] border-ink bg-card shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] ${
        featured ? "ring-4 ring-primary/20" : ""
      } transform-gpu`}
    >
      <div className="absolute top-0 inset-x-0 h-6 bg-ink rounded-b-3xl w-1/2 mx-auto z-50 flex justify-center items-center gap-2">
        <div className="w-12 h-1.5 bg-background/20 rounded-full" />
      </div>
      <img 
        src={image} 
        alt="Vivia App Screenshot" 
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
      />
    </div>
    {featured && (
      <div className="absolute -inset-20 -z-10 rounded-full bg-primary/20 blur-[80px]" />
    )}
  </div>
);
