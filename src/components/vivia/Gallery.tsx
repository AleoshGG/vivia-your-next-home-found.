export const Gallery = () => {
  return (
    <section id="galeria" className="py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Experiencia VIVIA
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
            Una interfaz que <em className="text-primary">respira elegancia.</em>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Limpia, funcional en cada pixel y optimizada para la mejor experiencia móvil.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="group relative aspect-[9/19] overflow-hidden rounded-3xl border-[8px] border-ink bg-gradient-to-br from-secondary to-muted shadow-card transition-smooth hover:-translate-y-2 hover:shadow-glow"
            >
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground font-display font-bold">
                  V
                </div>
                <p className="text-[10px] font-medium text-muted-foreground">
                  Mockup {i}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
