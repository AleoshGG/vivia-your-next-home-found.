import {
  Fingerprint,
  KeyRound,
  Route,
  Save,
  Camera,
  Building2,
  UserPlus,
  BellRing,
  CloudUpload,
  LayoutGrid,
  MessageCircle,
  SlidersHorizontal,
} from "lucide-react";

const features = [
  { icon: Fingerprint, title: "Autenticación Biométrica", text: "Acceso seguro con huella o reconocimiento facial." },
  { icon: KeyRound, title: "Persistencia de Sesión", text: "Mantén tu sesión activa con guardado seguro de credenciales." },
  { icon: Route, title: "Enrutamiento por Roles", text: "Inicio personalizado según seas Arrendador o Arrendatario." },
  { icon: Save, title: "Guardado de Progreso", text: "Tus formularios se guardan localmente. Cero pérdida de datos." },
  { icon: Camera, title: "Cámara Integrada", text: "Captura fotos de propiedades directo desde tu dispositivo." },
  { icon: Building2, title: "Gestión de Propiedades", text: "Publica, edita y visualiza inmuebles en renta o venta." },
  { icon: UserPlus, title: "Sistema de Seguimiento", text: "Sigue a tus arrendadores favoritos y monitorea su actividad." },
  { icon: BellRing, title: "Notificaciones Push", text: "Entérate al instante cuando se publique una nueva propiedad." },
  { icon: CloudUpload, title: "Sincronización Inteligente", text: "Sube fotos en alta resolución solo con red estable." },
  { icon: LayoutGrid, title: "Renderizado Optimizado", text: "Visualización fluida de inmuebles y sus características." },
  { icon: MessageCircle, title: "Contacto Directo", text: "Enlace inmediato con WhatsApp para cerrar acuerdos." },
  { icon: SlidersHorizontal, title: "Búsqueda con Filtros", text: "Filtra por cuartos, baños, precio y mucho más." },
];

export const Features = () => {
  return (
    <section id="funcionalidades" className="py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Funcionalidades
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
            Todo lo que necesitas, <em className="text-primary">nada de lo que sobra.</em>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Tecnología nativa pensada para minimizar la fricción y maximizar tu retención.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-smooth hover:border-primary/40 hover:shadow-card"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 transition-smooth group-hover:scale-150 group-hover:bg-primary/10" />
              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-ink">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
