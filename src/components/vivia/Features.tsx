import { ShieldCheck, Sparkles, MapPin, CheckCircle2 } from "lucide-react";
import { ChatDemo } from "./ChatDemo";

const Screenshot = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative mx-auto w-full max-w-[300px]">
    <div className="aspect-[9/19] w-full overflow-hidden isolate rounded-[2.5rem] border-8 border-ink bg-card shadow-card">
      <img src={src} alt={alt} className="h-full w-full rounded-[2rem] object-cover" loading="lazy" />
    </div>
  </div>
);

type Story = {
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  bullets: string[];
  icon: typeof ShieldCheck;
  accent: string;
  badge?: string;
  visual: React.ReactNode;
};

const stories: Story[] = [
  {
    eyebrow: "Contra las estafas",
    title: <>Aquí sabes con quién <span className="text-tertiary">estás hablando.</span></>,
    body: "Cada arrendador puede verificar su identidad con su INE o licencia y una selfie. Una persona del equipo de VIVIA lo revisa — no un robot — y solo entonces recibe su insignia de verificado, visible en su perfil y en cada publicación.",
    bullets: [
      "Insignia de verificado en perfil y publicaciones",
      "Revisión humana, caso por caso",
      "Si algo no cuadra, repórtalo con un toque",
    ],
    icon: ShieldCheck,
    accent: "bg-tertiary text-white",
    visual: <Screenshot src={`${import.meta.env.BASE_URL}app-verificacion.jpeg`} alt="Verificación de identidad en VIVIA" />,
  },
  {
    eyebrow: "Contra los anuncios pobres",
    title: <>Tu propiedad, presentada como <span className="text-transparent bg-clip-text bg-gradient-premium">se merece.</span></>,
    body: "Llena los datos de tu propiedad y deja que la inteligencia artificial redacte por ti un título atractivo y una descripción profesional. La ves escribirse en tiempo real, lista para publicar.",
    bullets: [
      "Título y descripción profesionales en segundos",
      "Publicación guiada en 4 pasos, con vista previa final",
      "Fotos organizadas por espacio: sala, cocina, recámara…",
    ],
    icon: Sparkles,
    accent: "bg-gradient-premium text-ink",
    badge: "Premium",
    visual: <Screenshot src={`${import.meta.env.BASE_URL}app-ia-componiendo.jpeg`} alt="La IA de VIVIA componiendo el título y la descripción de una propiedad" />,
  },
  {
    eyebrow: "Contra la comunicación rota",
    title: <>Habla directo, sin dar tu <span className="text-chat-bubble">número.</span></>,
    body: "El chat vive dentro de la app: sabes si tu mensaje llegó y si lo leyeron. Y si tu internet falla, los mensajes se guardan y se envían solos cuando vuelve la conexión.",
    bullets: [
      "Confirmación de entregado y leído",
      "Funciona aunque se vaya el internet",
      "Notificaciones solo cuando importan",
    ],
    icon: CheckCircle2,
    accent: "bg-chat-bubble text-white",
    visual: <ChatDemo />,
  },
  {
    eyebrow: "Contra la búsqueda a ciegas",
    title: <>Lo que hay cerca de ti, <span className="text-primary">en el mapa.</span></>,
    body: "Filtra por precio, área, habitaciones y baños. La sección \"Cerca de ti\" usa tu ubicación para mostrarte lo que hay en tu zona, y cada propiedad viene con su ubicación exacta en un mapa hecho para Chiapas.",
    bullets: [
      "Filtros útiles y orden por precio",
      "\"Cerca de ti\" con tu ubicación real",
      "Pin exacto en el mapa — sin adivinar la zona",
    ],
    icon: MapPin,
    accent: "bg-gradient-primary text-white",
    visual: <Screenshot src={`${import.meta.env.BASE_URL}app-busqueda.jpeg`} alt="Búsqueda con filtros en VIVIA" />,
  },
];

export const Features = () => {
  return (
    <section id="funcionalidades" className="py-28 md:py-32 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-24">
          <h2 className="font-display text-4xl font-bold leading-tight text-ink md:text-6xl tracking-tight">
            Cada problema, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">resuelto.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            VIVIA no es un tablón de anuncios más: cada parte de la app existe para eliminar un riesgo real de rentar o comprar en línea.
          </p>
        </div>

        <div className="mx-auto flex max-w-6xl flex-col gap-24 md:gap-32">
          {stories.map((story, i) => (
            <div
              key={story.eyebrow}
              className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
            >
              {/* Text */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl shadow-soft ${story.accent}`}>
                    <story.icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                    {story.eyebrow}
                  </p>
                  {story.badge && (
                    <span className="rounded-full bg-gradient-premium px-3 py-1 text-xs font-semibold text-ink">
                      {story.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-3xl md:text-4xl font-bold leading-[1.15] text-ink tracking-tight">
                  {story.title}
                </h3>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-justify">
                  {story.body}
                </p>

                <ul className="mt-7 space-y-3">
                  {story.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-ink/90">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                {story.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
