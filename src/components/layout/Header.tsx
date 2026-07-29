"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { ChevronDown, Menu, Linkedin, Instagram, Facebook } from "lucide-react";
import { NAV_ITEMS, COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { MegaMenu } from "./MegaMenu";
import MobileNav from "./MobileNav";
import NavSearch from "./NavSearch";

/**
 * Detect the theme of the section currently under the header.
 *
 * During popLayout transitions, both old and new pages coexist as sibling
 * motion.divs, each containing its own <main class="flex-1">.
 * We always inspect the *last* one, which is the incoming page.
 */
function detectCurrentTheme(): "light" | "dark" {
  const HEADER_BOTTOM = 80;

  // During transitions, multiple <main class="flex-1"> exist.
  // The LAST one is always the incoming (new) page.
  const allMains = document.querySelectorAll("main.flex-1");
  const incomingMain = allMains.length > 0
    ? (allMains[allMains.length - 1] as HTMLElement)
    : null;
  if (!incomingMain) return "dark";

  // 1. Check [data-section-theme] inside the incoming page
  const sections = incomingMain.querySelectorAll("[data-section-theme]");
  for (let i = sections.length - 1; i >= 0; i--) {
    const el = sections[i] as HTMLElement;
    const rect = el.getBoundingClientRect();
    if (rect.top <= HEADER_BOTTOM && rect.bottom > 0) {
      return el.dataset.sectionTheme === "light" ? "light" : "dark";
    }
  }
  if (sections.length > 0) {
    return (sections[0] as HTMLElement).dataset.sectionTheme === "light"
      ? "light"
      : "dark";
  }

  // 2. Fallback: check class-name hints on the page content.
  //    Covers pages that don't use PageHero / data-section-theme
  //    (industries, platforms, etc. which set bg-white on their own <main>).

  // Check nested <main> elements (pages wrap content in <main class="bg-white">)
  const innerMains = incomingMain.querySelectorAll("main");
  for (const m of innerMains) {
    const cls = m.className || "";
    if (cls.includes("bg-white") || cls.includes("bg-[#f8fafc]") || cls.includes("section-light")) {
      return "light";
    }
  }

  // Check the first <section> for background class hints
  const firstSection = incomingMain.querySelector("section") as HTMLElement | null;
  if (firstSection) {
    const cls = firstSection.className || "";
    const style = firstSection.getAttribute("style") || "";
    if (
      cls.includes("bg-white") ||
      cls.includes("bg-[#f8fafc]") ||
      cls.includes("bg-slate-50") ||
      cls.includes("section-light") ||
      (style.includes("background") && (style.includes("white") || style.includes("#f8")))
    ) {
      return "light";
    }
    if (
      cls.includes("section-dark") ||
      cls.includes("bg-[#0") ||
      cls.includes("bg-ink") ||
      cls.includes("bg-onyx")
    ) {
      return "dark";
    }
  }

  return "dark";
}

export default function Header() {
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isOverLight, setIsOverLight] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number>(0);

  // Single scroll handler: updates progress AND detects theme on every frame
  useEffect(() => {
    function onScroll() {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const progress = Math.min(window.scrollY / 120, 1);
        setScrollProgress(progress);
        const theme = detectCurrentTheme();
        setIsOverLight(theme === "light");
      });
    }

    // Reset scroll state for new page (browser scrolls to top on navigation)
    setScrollProgress(0);

    // Run once immediately
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [pathname]);

  // Re-detect after route change — the new page's DOM may not be ready yet.
  // Uses a MutationObserver to catch when the new page content renders,
  // plus fallback timeouts as a safety net.
  useEffect(() => {
    const redetect = () => {
      // Use rAF to ensure styles are painted before sampling
      requestAnimationFrame(() => {
        setIsOverLight(detectCurrentTheme() === "light");
      });
    };

    // Immediate attempt (may still see old DOM or empty)
    redetect();

    // Fallback timeouts covering a range of render speeds
    const t1 = setTimeout(redetect, 50);
    const t2 = setTimeout(redetect, 150);
    const t3 = setTimeout(redetect, 400);
    const t4 = setTimeout(redetect, 800);

    // MutationObserver: fires redetect on ANY DOM change (covers pages
    // with or without data-section-theme). Debounced to avoid thrashing.
    let observer: MutationObserver | null = null;
    let debounceTimer: ReturnType<typeof setTimeout>;
    let detectCount = 0;
    observer = new MutationObserver(() => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        redetect();
        detectCount++;
        // After a few successful detections, the page is stable — disconnect
        if (detectCount >= 3) observer?.disconnect();
      }, 30);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Auto-disconnect after 2s to avoid lingering observers
    const tCleanup = setTimeout(() => observer?.disconnect(), 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(tCleanup);
      observer?.disconnect();
    };
  }, [pathname]);

  useEffect(() => setMobileOpen(false), [pathname]);

  const scrolled = scrollProgress > 0.05;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // ── Continuously interpolated glassmorphism ──
  // t ramps from 0 → 1 as scrollProgress goes from 0 → 0.15 (ease-out curve)
  const rawT = Math.min(scrollProgress / 0.15, 1);
  const t = 1 - (1 - rawT) * (1 - rawT); // ease-out quadratic

  const blurAmount = 12 + t * 12;   // 12px → 24px
  const bgOpacity = isOverLight
    ? 0.70 + t * 0.22    // 0.70 → 0.92
    : 0.40 + t * 0.35;   // 0.40 → 0.75
  const borderOpacity = 0.04 + t * 0.04; // 0.04 → 0.08

  // Float effect: margin, border-radius, top offset, shadow
  const marginPx = t * 8;        // 0 → 8px
  const radiusPx = t * 16;       // 0 → 16px (rounded-2xl)
  const topPx = t * 8;           // 0 → 8px
  const shadowOpacity = t * 0.15; // 0 → 0.15

  // Colors adapt based on section theme
  const textColor = isOverLight ? "text-gray-900" : "text-fg";
  const textMutedColor = isOverLight ? "text-gray-600" : "text-fg-muted";
  const bgColor = isOverLight
    ? `rgba(255, 255, 255, ${bgOpacity.toFixed(2)})`
    : `rgba(10, 10, 10, ${bgOpacity.toFixed(2)})`;
  const borderColor = isOverLight
    ? `rgba(0, 0, 0, ${borderOpacity.toFixed(3)})`
    : `rgba(255, 255, 255, ${borderOpacity.toFixed(3)})`;

  return (
    <>
      <header
        ref={headerRef}
        className="fixed inset-x-0 z-50"
        style={{
          top: `${topPx}px`,
          marginLeft: `${marginPx}px`,
          marginRight: `${marginPx}px`,
          borderRadius: `${radiusPx}px`,
          backgroundColor: bgColor,
          backdropFilter: `blur(${blurAmount}px) saturate(140%)`,
          WebkitBackdropFilter: `blur(${blurAmount}px) saturate(140%)`,
          border: `1px solid ${borderColor}`,
          boxShadow: t > 0.01 ? `0 4px 30px rgba(0, 0, 0, ${shadowOpacity.toFixed(3)})` : "none",
          transition: "background-color 500ms ease, border-color 500ms ease",
        }}
      >
        <div
          className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-3 transition-all duration-300 sm:px-5 md:px-6 lg:px-8 xl:px-12"
          style={{
            height: `clamp(52px, ${76 - scrollProgress * 16}px, ${76 - scrollProgress * 16}px)`,
          }}
        >
          <Logo scrolled={scrolled} />

          <nav className="hidden items-center lg:flex lg:gap-0 lgx:gap-0.5 xl:gap-0.5 2xl:gap-1">
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
                      "link-underline flex items-center gap-0.5 whitespace-nowrap rounded-md px-1.5 py-1.5 text-[0.7rem] font-medium transition-colors duration-500 lg:px-2 lg:py-1.5 lg:text-[0.68rem] lgx:px-2.5 lgx:py-1.5 lgx:text-[0.74rem] xl:gap-1 xl:px-3 xl:py-2 xl:text-[0.8rem] 2xl:text-sm",
                      active
                        ? textColor
                        : cn(textMutedColor, isOverLight ? "hover:text-gray-900" : "hover:text-fg")
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
                  {hasChildren && <MegaMenu items={item.children!} open={openMenu === item.label} onClose={() => setOpenMenu(null)} />}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-1 sm:gap-1.5 lg:gap-1.5 lgx:gap-2 xl:gap-2.5">
            <NavSearch isOverLight={isOverLight} />

            {/* Social Icons */}
            <div className="hidden items-center gap-1 lg:flex lg:gap-1 lgx:gap-1 xl:gap-1.5">
              <a
                href={COMPANY.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-lg border transition-colors duration-500 lg:h-7 lg:w-7 lgx:h-[1.875rem] lgx:w-[1.875rem] xl:h-8 xl:w-8 2xl:h-9 2xl:w-9",
                  isOverLight
                    ? "border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    : "border-line text-fg-subtle hover:border-line-strong hover:text-fg"
                )}
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={COMPANY.social.instagram || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-lg border transition-colors duration-500 lg:h-7 lg:w-7 lgx:h-[1.875rem] lgx:w-[1.875rem] xl:h-8 xl:w-8 2xl:h-9 2xl:w-9",
                  isOverLight
                    ? "border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    : "border-line text-fg-subtle hover:border-line-strong hover:text-fg"
                )}
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={COMPANY.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-lg border transition-colors duration-500 lg:h-7 lg:w-7 lgx:h-[1.875rem] lgx:w-[1.875rem] xl:h-8 xl:w-8 2xl:h-9 2xl:w-9",
                  isOverLight
                    ? "border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    : "border-line text-fg-subtle hover:border-line-strong hover:text-fg"
                )}
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={COMPANY.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-lg border transition-colors duration-500 lg:h-7 lg:w-7 lgx:h-[1.875rem] lgx:w-[1.875rem] xl:h-8 xl:w-8 2xl:h-9 2xl:w-9",
                  isOverLight
                    ? "border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    : "border-line text-fg-subtle hover:border-line-strong hover:text-fg"
                )}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-lg border transition-colors duration-500 lg:hidden",
                isOverLight
                  ? "border-gray-300 text-gray-700 hover:bg-gray-100"
                  : "border-line text-fg hover:bg-surface"
              )}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <div aria-hidden className="h-[52px] sm:h-[60px] md:h-[68px] lg:h-[76px]" />

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}