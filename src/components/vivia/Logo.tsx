interface LogoProps {
  variant?: "light" | "dark";
}

export const Logo = ({ variant = "dark" }: LogoProps) => {
  const textColor = variant === "light" ? "text-white" : "text-ink";
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground font-display font-bold text-lg shadow-glow">
        V
      </div>
      <span className={`font-display text-xl font-bold tracking-tight ${textColor}`}>
        VIVIA
      </span>
    </div>
  );
};
