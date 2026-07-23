import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const freeFeatures = [
  "Buscar y filtrar propiedades",
  "Sección \"Cerca de ti\"",
  "Publicar propiedades con fotos, video y mapa",
  "Verificación de identidad",
  "Chat en tiempo real",
  "Compartir propiedades por WhatsApp o redes",
  "Favoritos y reporte de publicaciones sospechosas",
];

const premiumFeatures = [
  "Publica propiedades ilimitadas",
  "Responde chats sin límite",
  "Genera título y descripción con IA",
];

export const Pricing = () => {
  return (
    <section id="planes" className="py-28 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl font-bold leading-tight text-ink md:text-5xl tracking-tight">
            Gratis para empezar. <span className="text-transparent bg-clip-text bg-gradient-premium">Premium</span> cuando quieras ir más rápido.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Buscar, publicar, verificarte y chatear no tiene costo. Premium quita los límites y suma la redacción con IA para arrendadores.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 grid-cols-1 md:grid-cols-2 items-stretch">
          {/* Free plan */}
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-10 flex flex-col">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-primary" />
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <Check className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-ink mt-6">Plan Gratuito</h3>
            <p className="mt-2 text-muted-foreground">Todo lo esencial para encontrar o publicar tu próximo hogar.</p>
            <ul className="mt-8 space-y-4 flex-1">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-ink/90">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Premium plan */}
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-premium p-10 flex flex-col text-ink shadow-glow">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/30 px-4 py-1.5 text-sm font-semibold">
                <Sparkles className="h-4 w-4" />
                Vivia Premium
              </span>
              <h3 className="font-display text-2xl font-bold mt-4">Para arrendadores sin límites</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-5xl font-extrabold tracking-tight">$250</span>
                <span className="text-lg font-semibold text-ink/80">MXN / mes</span>
              </div>
              <p className="mt-1 text-sm text-ink/70">Cada pago suma 30 días de Premium.</p>
              <ul className="mt-8 space-y-4 flex-1">
                {premiumFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/40">
                      <Check className="h-4 w-4 text-ink" />
                    </div>
                    <span className="font-medium">{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="mt-10 h-14 rounded-full bg-ink px-8 text-base font-semibold text-white hover:bg-ink/90 w-full sm:w-auto"
              >
                Conoce Premium
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
