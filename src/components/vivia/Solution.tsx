import { CheckCircle2 } from "lucide-react";

const points = [
  "Entorno digital exclusivo para bienes raíces",
  "Conexión directa entre oferta y demanda",
  "Cero monetización interna: enlaces externos a WhatsApp",
  "Arquitectura ágil, segura y sin chat nativo (sin distracciones)",
];

export const Solution = () => {
  return (
    <section id="solucion" className="bg-ink py-28 text-ink-foreground">
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-glow">
              La solución
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
              Un espacio diseñado <em className="text-primary-glow">solo para ti.</em>
            </h2>
            <p className="mt-6 text-lg text-white/70">
              VIVIA elimina el ruido y conecta de manera directa y eficiente la oferta con la
              demanda, permitiéndote encontrar exactamente lo que necesitas en tiempo récord.
            </p>

            <ul className="mt-10 space-y-4">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-primary-glow" />
                  <span className="text-white/90">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mockup placeholder */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl" />
            <div className="relative animate-float aspect-[9/19] w-full max-w-[300px] overflow-hidden rounded-[2.5rem] border-[10px] border-white/10 bg-white/5 backdrop-blur shadow-glow">
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary font-display text-xl font-bold text-primary-foreground shadow-glow">
                  V
                </div>
                <p className="text-xs font-medium text-white/60">
                  Pega aquí mockup principal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
