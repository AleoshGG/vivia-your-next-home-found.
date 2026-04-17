import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30 py-12">
      <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
        <Logo />
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} VIVIA. Buscar casa sin tanto drama.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="transition-smooth hover:text-foreground">Privacidad</a>
          <a href="#" className="transition-smooth hover:text-foreground">Términos</a>
        </div>
      </div>
    </footer>
  );
};
