import { AlertTriangle, Search, ShieldAlert } from "lucide-react";

const pains = [
  {
    icon: AlertTriangle,
    title: "Ruido mediático",
    text: "Tu publicación compite con memes, política y contenido viral irrelevante.",
  },
  {
    icon: Search,
    title: "Búsquedas frustrantes",
    text: "Sin filtros precisos por cuartos, baños o precio. Pierdes horas filtrando manualmente.",
  },
  {
    icon: ShieldAlert,
    title: "Riesgo de estafas",
    text: "Perfiles falsos y entornos poco profesionales ponen en riesgo tu dinero.",
  },
];

export const Problem = () => {
  return (
    <section className="border-y border-border bg-muted/40 py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            El problema
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
            El mercado actual es <em className="text-primary">caótico</em> e ineficiente.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Depender de redes sociales generalistas para algo tan importante como tu próximo hogar
            no tiene sentido.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {pains.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border border-border bg-card p-8 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
