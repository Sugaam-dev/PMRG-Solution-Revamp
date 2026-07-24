import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full border font-semibold shadow-[0_12px_28px_rgba(15,23,42,0.16)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "border-transparent bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#38BDF8] text-white hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(37,99,235,0.24)]",
  secondary:
    "border-[#BFDBFE] bg-white/95 text-slate-900 hover:-translate-y-0.5 hover:border-[#60A5FA] hover:bg-[#F8FAFC]",
  outline:
    "border-[#BFDBFE] bg-transparent text-slate-900 hover:-translate-y-0.5 hover:border-[#60A5FA] hover:bg-[#EFF6FF]",
  ghost: "border-0 bg-transparent text-slate-900 shadow-none hover:bg-[#EFF6FF] hover:text-slate-950",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-[15px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, ...props }, ref) => {
    const classes = cn(base, variants[variant], sizes[size], className);

    if ("href" in props && props.href !== undefined) {
      const { href, ...rest } = props as ButtonAsLink;
      const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
      if (external) {
        return (
          <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={classes} {...rest}>
            {children}
          </a>
        );
      }
      return (
        <Link ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={classes} {...rest}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...(props as ButtonAsButton)}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
