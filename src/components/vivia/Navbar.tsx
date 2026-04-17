import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const links = [
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#solucion", label: "La Solución" },
  { href: "#galeria", label: "Galería" },
];

export const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Button size="sm" className="rounded-full bg-ink text-ink-foreground hover:bg-ink/90 gap-2">
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Descargar App</span>
          <span className="sm:hidden">Descargar</span>
        </Button>
      </div>
    </header>
  );
};
