"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { MegaMenu } from "./MegaMenu";
import MobileNav from "./MobileNav";

export default function Header() {
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleScroll = useCallback(() => {
    // Progress 0→1 over the first 120px of scroll
    const progress = Math.min(window.scrollY / 120, 1);
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => setMobileOpen(false), [pathname]);

  const scrolled = scrollProgress > 0.05;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Interpolate background opacity for glassmorphism (0 → 0.7)
  const bgOpacity = (scrollProgress * 0.7).toFixed(2);
  const blurAmount = (scrollProgress * 16).toFixed(0);
  const borderOpacity = (scrollProgress * 0.06).toFixed(3);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: `rgba(10, 10, 10, ${scrolled ? bgOpacity : "1"})`,
          backdropFilter: scrolled ? `blur(${blurAmount}px)` : "none",
          WebkitBackdropFilter: scrolled ? `blur(${blurAmount}px)` : "none",
          borderBottom: `1px solid rgba(255, 255, 255, ${scrolled ? borderOpacity : "0"})`,
        }}
      >
        <div
          className={cn(
            "container-pmrg flex items-center justify-between transition-all duration-300"
          )}
          style={{
            height: `${80 - scrollProgress * 16}px`,
          }}
        >
          <Logo scrolled={scrolled} />

          <nav className="hidden items-center gap-0.5 lg:flex">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              const hasChildren = !!item.children;
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => hasChildren && setOpenMenu(item.label)}
                  onMouseLeave={() => hasChildren && setOpenMenu(null)}
                >
                  <Link
                    href={item.href}
                    data-active={active}
                    className={cn(
                      "link-underline flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      active ? "text-fg" : "text-fg-muted hover:text-fg"
                    )}
                  >
                    {item.label}
                    {hasChildren && (
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200",
                          openMenu === item.label && "rotate-180"
                        )}
                      />
                    )}
                  </Link>
                  {hasChildren && <MegaMenu items={item.children!} open={openMenu === item.label} />}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Button href="/contact" size="sm" className="hidden sm:inline-flex">
              Get Started
            </Button>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-fg transition-colors hover:bg-surface lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <div aria-hidden className="h-20" />

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
