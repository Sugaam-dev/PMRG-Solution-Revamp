import { CLIENTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Auto-scrolling, pauseable client logo ticker.
 * Pure CSS marquee; duplicated list for a seamless loop.
 */
export default function ClientLogos({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const list = [...CLIENTS, ...CLIENTS];
  const isLight = theme === "light";

  return (
    <div className="relative w-full overflow-hidden mask-fade-x">
      <div className="marquee-track flex w-max items-center gap-14">
        {list.map((client, i) => (
          <span
            key={i}
            className={cn(
              "whitespace-nowrap font-display text-base font-bold uppercase tracking-wider transition-colors sm:text-lg",
              isLight
                ? "text-gray-400 hover:text-gray-700"
                : "text-fg-subtle hover:text-fg"
            )}
          >
            {client.name}
          </span>
        ))}
      </div>
    </div>
  );
}
