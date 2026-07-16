"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Briefcase, ArrowUpRight, X } from "lucide-react";
import { JOB_LISTINGS } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Job = (typeof JOB_LISTINGS)[number];

export default function JobsList() {
  const departments = useMemo(
    () => ["All", ...Array.from(new Set(JOB_LISTINGS.map((j) => j.department)))],
    []
  );
  const [dept, setDept] = useState("All");
  const [active, setActive] = useState<Job | null>(null);

  const filtered = useMemo(
    () => (dept === "All" ? JOB_LISTINGS : JOB_LISTINGS.filter((j) => j.department === dept)),
    [dept]
  );

  return (
    <>
      {/* department filters */}
      <div className="flex flex-wrap gap-2">
        {departments.map((d) => (
          <button
            key={d}
            onClick={() => setDept(d)}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-medium transition-all",
              dept === d
                ? "border-brand/50 bg-blue-50 text-brand"
                : "border-light-line bg-white text-fg-dark-muted hover:border-light-line-strong hover:text-fg-dark"
            )}
          >
            {d}
          </button>
        ))}
      </div>

      {/* list */}
      <div className="mt-6 flex flex-col gap-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((job) => (
            <motion.div
              layout
              key={job.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <button onClick={() => setActive(job)} className="block w-full text-left">
                <GlassCard theme="light" className="group flex flex-col gap-4 p-5 transition-all hover:-translate-y-0.5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-light-line bg-blue-50 text-brand">
                      <Briefcase className="h-4.5 w-4.5" style={{ width: 18, height: 18 }} />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-fg-dark transition-colors group-hover:text-brand">
                        {job.title}
                      </h3>
                      <p className="mt-1 text-sm text-fg-dark-muted">{job.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:shrink-0">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-light-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-fg-dark-muted">{job.department}</span>
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-light-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-fg-dark-muted">
                      <MapPin className="h-3 w-3" />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-emerald-600">{job.type}</span>
                    <ArrowUpRight className="h-4 w-4 text-fg-dark-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                  </div>
                </GlassCard>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {active && <JobModal job={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </>
  );
}

function JobModal({ job, onClose }: { job: Job; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-end justify-center p-0 sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md" onClick={onClose} />
      <motion.div
        className="relative w-full max-w-lg overflow-hidden rounded-t-3xl border border-light-line bg-white shadow-2xl sm:rounded-3xl"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative overflow-hidden p-7 sm:p-8">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-light-line text-fg-dark-muted transition-colors hover:bg-light-bg-grey hover:text-fg-dark"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-light-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-fg-dark-muted">{job.department}</span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-light-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-fg-dark-muted">
              <MapPin className="h-3 w-3" />
              {job.location}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-emerald-600">{job.type}</span>
          </div>
          <h2 className="mt-4 text-2xl font-bold leading-tight text-fg-dark">{job.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-fg-dark-muted">{job.description}</p>

          <p className="mt-5 text-sm leading-relaxed text-fg-dark-muted">
            You'll join a cross-functional pod shipping production software for enterprise
            clients. We move fast, ship often, and care deeply about craft. If that sounds
            like you, we'd love to hear from you.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/contact" className="flex-1">
              Apply Now
            </Button>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
