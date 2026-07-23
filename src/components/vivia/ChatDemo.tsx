import { useEffect, useRef, useState } from "react";
import { BadgeCheck, Check, CheckCheck } from "lucide-react";

const useInView = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
};

const Message = ({
  own = false,
  delay,
  inView,
  read = false,
  children,
}: {
  own?: boolean;
  delay: number;
  inView: boolean;
  read?: boolean;
  children: React.ReactNode;
}) => (
  <div
    className={`flex ${own ? "justify-end" : "justify-start"} ${
      inView ? "animate-fade-up" : "opacity-0"
    } motion-reduce:animate-none motion-reduce:opacity-100`}
    style={{ animationDelay: `${delay}s` }}
  >
    <div
      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
        own
          ? "bg-chat-bubble text-white rounded-br-md"
          : "bg-white text-ink rounded-bl-md border border-border/60"
      }`}
    >
      {children}
      {own && (
        <span className="mt-1 flex items-center justify-end gap-1 text-[10px] text-white/80">
          {read ? <CheckCheck className="h-3.5 w-3.5 text-cyan-200" /> : <Check className="h-3.5 w-3.5" />}
        </span>
      )}
    </div>
  </div>
);

export const ChatDemo = () => {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[360px]">
      <div className="overflow-hidden rounded-[2rem] border border-border bg-secondary/60 shadow-card">
        {/* Header */}
        <div className="flex items-center gap-3 bg-ink px-5 py-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-sm font-bold text-white">
            CH
          </div>
          <div className="min-w-0">
            <p className="flex items-center gap-1.5 text-sm font-semibold text-white">
              Carlos Hernández
              <BadgeCheck className="h-4 w-4 shrink-0 text-cyan-300" />
            </p>
            <p className="text-xs text-white/60">Arrendador verificado · en línea</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex flex-col gap-3 px-4 py-6 min-h-[300px]">
          <Message own delay={0.1} inView={inView} read>
            Me interesa: Casa con patio en Tuxtla Gutiérrez
          </Message>

          <Message delay={0.7} inView={inView}>
            ¡Hola! Con gusto. ¿Te gustaría visitarla este fin de semana?
          </Message>

          <Message own delay={1.3} inView={inView} read>
            Sí, ¿el sábado en la mañana?
          </Message>

          {/* Typing indicator */}
          <div
            className={`flex justify-start ${inView ? "animate-fade-up" : "opacity-0"} motion-reduce:animate-none motion-reduce:opacity-100`}
            style={{ animationDelay: "2s" }}
          >
            <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-border/60 bg-white px-4 py-3 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:0ms]" />
              <span className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:150ms]" />
              <span className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:300ms]" />
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="border-t border-border/60 bg-white px-5 py-3">
          <p className="text-center text-xs text-muted-foreground">
            El primer mensaje se envía solo, con el nombre de la propiedad.
          </p>
        </div>
      </div>
    </div>
  );
};
