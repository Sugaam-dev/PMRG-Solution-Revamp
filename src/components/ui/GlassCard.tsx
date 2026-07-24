import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  /** Reserved for API compatibility — hover lift is always subtle now. */
  glowOnHover?: boolean;
  /** Slightly darker / more defined surface. */
  strong?: boolean;
  /** Card theme: "dark" for dark backgrounds, "light" for light backgrounds */
  theme?: "dark" | "light";
  as?: keyof JSX.IntrinsicElements;
};

export function GlassCard({
  children,
  className,
  glowOnHover = true,
  strong = false,
  theme = "dark",
  as: Tag = "div",
}: GlassCardProps) {
  const isDark = theme === "dark";

  return (
    <Tag
      className={cn(
        "relative overflow-hidden rounded-xl border border-light-line bg-white text-fg-dark shadow-card-light transition-all duration-200",
        isDark
          ? cn(
              strong ? "border-line-strong" : "border-light-line",
              glowOnHover && "hover:border-brand/30 hover:-translate-y-1 hover:shadow-card-light-hover"
            )
          : cn(
              glowOnHover && "hover:border-brand/30 hover:-translate-y-1 hover:shadow-card-light-hover"
            ),
        className
      )}
    >
      {children}
    </Tag>
  );
}
