import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="PMRG Solution"
      width={152}
      height={64}
      className={cn("h-8 w-auto", className)}
      priority
    />
  );
}

export function Logo({
  className,
  textClassName,
  scrolled = false,
}: {
  className?: string;
  textClassName?: string;
  scrolled?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label="PMRG Solution — home"
    >
      <span className="transition-transform duration-200 group-hover:scale-105">
        <Image
          src="/logo.png"
          alt="PMRG Solution"
          width={380}
          height={160}
          className={cn(
            "w-auto transition-all duration-500",
            scrolled
              ? "h-7 sm:h-8 md:h-9 lg:h-10 xl:h-11"
              : "h-9 sm:h-10 md:h-11 lg:h-12 xl:h-14",
            textClassName
          )}
          style={{
            filter: [
              "drop-shadow(0px -1px 0px rgba(255,255,255,0.2))",
              "drop-shadow(1px 2px 1px rgba(0,0,0,0.5))",
              "drop-shadow(2px 4px 3px rgba(0,0,0,0.25))",
            ].join(" "),
          }}
          priority
        />
      </span>
    </Link>
  );
}

