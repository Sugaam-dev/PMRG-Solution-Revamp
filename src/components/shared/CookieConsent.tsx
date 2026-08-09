"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";
import { useEffect, useState } from "react";

type CookieChoice =
  | "accepted_all"
  | "accepted_required"
  | "rejected_all";

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  const [customize, setCustomize] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem("pmrg_cookie");

    if (!savedConsent) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (choice: CookieChoice) => {
    localStorage.setItem("pmrg_cookie", choice);
    setShow(false);
    setCustomize(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-4 bottom-4 z-[70] mx-auto max-w-3xl"
        >
          <div className="rounded-xl border border-line-strong bg-surface-2 p-5 shadow-card-hover">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-3 text-accent">
                <Cookie className="h-5 w-5" />
              </span>

              <p className="flex-1 text-sm leading-relaxed text-fg-muted">
                We use cookies to enhance your browsing experience and analyze
                site traffic. You can choose your cookie preferences below.
              </p>

              {!customize && (
                <div className="flex w-full items-center gap-2 sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setCustomize(true)}
                    className="flex-1 rounded-lg border border-line px-4 py-2 text-sm text-fg-muted transition-colors hover:bg-surface-3 hover:text-fg sm:flex-none"
                  >
                    Customize Cookies
                  </button>

                  <button
                    type="button"
                    onClick={() => saveConsent("accepted_all")}
                    className="flex-1 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-ink transition-transform hover:scale-[1.02] sm:flex-none"
                  >
                    Accept Cookies
                  </button>
                </div>
              )}
            </div>

            {customize && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.25 }}
                className="mt-5 border-t border-line pt-4"
              >
                <p className="mb-3 text-sm font-medium text-fg">
                  Choose your cookie preference:
                </p>

                <div className="flex flex-col gap-2 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => saveConsent("accepted_all")}
                    className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-ink transition-transform hover:scale-[1.02]"
                  >
                    Accept All Cookies
                  </button>

                  <button
                    type="button"
                    onClick={() => saveConsent("accepted_required")}
                    className="rounded-lg border border-line px-4 py-2 text-sm text-fg-muted transition-colors hover:bg-surface-3 hover:text-fg"
                  >
                    Accept Required Cookies Only
                  </button>

                  <button
                    type="button"
                    onClick={() => saveConsent("rejected_all")}
                    className="rounded-lg border border-line px-4 py-2 text-sm text-fg-muted transition-colors hover:bg-surface-3 hover:text-fg"
                  >
                    Reject All Cookies
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}