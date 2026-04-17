import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-28">
      <div className="container">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-primary p-12 text-center text-primary-foreground shadow-glow md:p-20">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
              Tu nuevo hogar te está esperando en{" "}
              <em className="font-display not-italic">VIVIA.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">
              Descarga la app, crea tu perfil y comienza a buscar sin distracciones.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="h-14 gap-2 rounded-full bg-ink px-8 text-base font-semibold text-ink-foreground hover:bg-ink/90"
              >
                <Apple className="h-5 w-5" />
                App Store
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="h-14 gap-2 rounded-full bg-white px-8 text-base font-semibold text-ink hover:bg-white/90"
              >
                <Smartphone className="h-5 w-5" />
                Google Play
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
