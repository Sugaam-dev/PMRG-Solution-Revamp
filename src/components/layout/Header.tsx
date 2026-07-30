"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { NAV_ITEMS, COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { MegaMenu } from "./MegaMenu";
import MobileNav from "./MobileNav";
import NavSearch from "./NavSearch";
import { FacebookBrandIcon, InstagramBrandIcon, LinkedInBrandIcon, WhatsAppBrandIcon } from "./SocialBrandIcons";
import { IconPress } from "@/components/animations/IconPress";

export default function Header() {
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number>(0);
  const isOverLight = true;

  // Single scroll handler: updates progress on every frame
  useEffect(() => {
    function onScroll() {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const progress = Math.min(window.scrollY / 120, 1);
        setScrollProgress(progress);
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

  const textColor = "text-black";
  const textMutedColor = "text-black/80";
  const bgColor = `linear-gradient(180deg, rgba(240, 249, 255, ${bgOpacity.toFixed(2)}) 0%, rgba(224, 242, 254, ${Math.max(bgOpacity - 0.05, 0.1).toFixed(2)}) 100%)`;
  const borderColor = `rgba(125, 211, 252, ${borderOpacity.toFixed(3)})`;

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
          backgroundColor: "transparent",
          backgroundImage: bgColor,
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
            height: `clamp(56px, ${80 - scrollProgress * 16}px, ${80 - scrollProgress * 16}px)`,
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
                      "link-underline flex items-center gap-0.5 whitespace-nowrap rounded-md px-1.5 py-1.5 text-[0.7rem] font-bold transition-colors duration-500 lg:px-2 lg:py-1.5 lg:text-[0.68rem] lgx:px-2.5 lgx:py-1.5 lgx:text-[0.74rem] xl:gap-1 xl:px-3 xl:py-2 xl:text-[0.8rem] 2xl:text-sm",
                      active
                        ? textColor
                        : cn(textMutedColor, "hover:text-black")
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
            <NavSearch isOverLight />

            {/* Social Icons */}
            <div className="hidden items-center gap-1 lg:flex lg:gap-1 lgx:gap-1 xl:gap-1.5">
              <motion.a
                href={COMPANY.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileTap={{ scale: 0.92 }}
                className={cn(
                  "group flex h-7 w-7 items-center justify-center rounded-lg border transition-all duration-300 lg:h-7 lg:w-7 lgx:h-[1.875rem] lgx:w-[1.875rem] xl:h-8 xl:w-8 2xl:h-9 2xl:w-9 hover:-translate-y-0.5 hover:scale-105 hover:shadow-md hover:shadow-sky-200/50",
                  isOverLight
                    ? "border-gray-200 text-gray-500 hover:border-sky-200 hover:bg-sky-50/80 hover:text-gray-700"
                    : "border-line text-fg-subtle hover:border-line-strong hover:text-fg"
                )}
              >
                <IconPress>
                  <LinkedInBrandIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </IconPress>
              </motion.a>
              <motion.a
                href={COMPANY.social.instagram || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                whileTap={{ scale: 0.92 }}
                className={cn(
                  "group flex h-7 w-7 items-center justify-center rounded-lg border transition-all duration-300 lg:h-7 lg:w-7 lgx:h-[1.875rem] lgx:w-[1.875rem] xl:h-8 xl:w-8 2xl:h-9 2xl:w-9 hover:-translate-y-0.5 hover:scale-105 hover:shadow-md hover:shadow-sky-200/50",
                  isOverLight
                    ? "border-gray-200 text-gray-500 hover:border-sky-200 hover:bg-sky-50/80 hover:text-gray-700"
                    : "border-line text-fg-subtle hover:border-line-strong hover:text-fg"
                )}
              >
                <IconPress>
                  <InstagramBrandIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </IconPress>
              </motion.a>
              <motion.a
                href={COMPANY.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                whileTap={{ scale: 0.92 }}
                className={cn(
                  "group flex h-7 w-7 items-center justify-center rounded-lg border transition-all duration-300 lg:h-7 lg:w-7 lgx:h-[1.875rem] lgx:w-[1.875rem] xl:h-8 xl:w-8 2xl:h-9 2xl:w-9 hover:-translate-y-0.5 hover:scale-105 hover:shadow-md hover:shadow-sky-200/50",
                  isOverLight
                    ? "border-gray-200 text-gray-500 hover:border-sky-200 hover:bg-sky-50/80 hover:text-gray-700"
                    : "border-line text-fg-subtle hover:border-line-strong hover:text-fg"
                )}
              >
                <IconPress>
                  <FacebookBrandIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </IconPress>
              </motion.a>
              <motion.a
                href={COMPANY.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                whileTap={{ scale: 0.92 }}
                className={cn(
                  "group flex h-7 w-7 items-center justify-center rounded-lg border transition-all duration-300 lg:h-7 lg:w-7 lgx:h-[1.875rem] lgx:w-[1.875rem] xl:h-8 xl:w-8 2xl:h-9 2xl:w-9 hover:-translate-y-0.5 hover:scale-105 hover:shadow-md hover:shadow-sky-200/50",
                  isOverLight
                    ? "border-gray-200 text-gray-500 hover:border-sky-200 hover:bg-sky-50/80 hover:text-gray-700"
                    : "border-line text-fg-subtle hover:border-line-strong hover:text-fg"
                )}
              >
                <IconPress>
                  <WhatsAppBrandIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </IconPress>
              </motion.a>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-gray-700 transition-colors duration-500 hover:bg-gray-100 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <div aria-hidden className="h-[56px] sm:h-[64px] md:h-[72px] lg:h-[80px]" />

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}