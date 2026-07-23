"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, AlertCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SERVICE_INTERESTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Fields = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  role: string;
  service: string;
  message: string;
  consent: boolean;
};

type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  role: "",
  service: "",
  message: "",
  consent: false,
};

export default function ContactForm() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (vals: Fields): Errors => {
    const e: Errors = {};
    if (!vals.name.trim()) e.name = "Please enter your name";
    if (!vals.email.trim()) e.email = "Please enter your work email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(vals.email))
      e.email = "Please enter a valid email";
    if (!vals.organization.trim())
      e.organization = "Please enter your organization";
    if (!vals.service) e.service = "Please select an area of interest";
    if (!vals.message.trim()) e.message = "Please describe your requirement";
    else if (vals.message.trim().length < 10)
      e.message = "Requirement should be at least 10 characters";
    if (!vals.consent)
      e.consent = "Please agree to the privacy terms to continue";
    return e;
  };

  const update = (key: keyof Fields, value: string | boolean) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setSubmitting(true);
    // Simulate async submission (no backend in this static build).
    await new Promise((r) => setTimeout(r, 1100));
    setSubmitting(false);
    setSuccess(true);
  };

  if (success) {
    return <SuccessState onReset={() => {
      setValues(EMPTY);
      setSuccess(false);
    }} />;
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <Field
        label="Full name"
        name="name"
        value={values.name}
        onChange={(v) => update("name", v)}
        error={errors.name}
        placeholder="Jane Doe"
        required
      />
      <Field
        label="Work email"
        name="email"
        type="email"
        value={values.email}
        onChange={(v) => update("email", v)}
        error={errors.email}
        placeholder="jane@company.com"
        required
      />
      <Field
        label="Organization"
        name="organization"
        value={values.organization}
        onChange={(v) => update("organization", v)}
        error={errors.organization}
        placeholder="Acme Telecom"
        required
      />
      <Field
        label="Phone number"
        name="phone"
        type="tel"
        value={values.phone}
        onChange={(v) => update("phone", v)}
        placeholder="+91 9876 543210"
      />
      <div className="sm:col-span-2">
        <Field
          label="Role / designation"
          name="role"
          value={values.role}
          onChange={(v) => update("role", v)}
          placeholder="CTO, Head of Digital, Project Lead…"
        />
      </div>

      {/* area of interest */}
      <div className="sm:col-span-2">
        <label className="mb-2 block text-sm font-medium text-fg-dark">
          Area of interest <span className="text-brand">*</span>
        </label>
        <select
          value={values.service}
          onChange={(e) => update("service", e.target.value)}
          className={cn(
            "w-full rounded-xl border bg-white px-4 py-3 text-sm text-fg-dark transition-colors focus:outline-none focus:ring-2",
            errors.service
              ? "border-red-300 focus:border-red-400 focus:ring-red-200/50"
              : "border-light-line focus:border-brand/50 focus:ring-brand/20"
          )}
        >
          <option value="">Select an area…</option>
          {SERVICE_INTERESTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <AnimatePresence>
          {errors.service && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -4 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -4 }}
              className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500"
            >
              <AlertCircle className="h-3 w-3" />
              {errors.service}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="sm:col-span-2">
        <Field
          label="Brief requirement"
          name="message"
          as="textarea"
          value={values.message}
          onChange={(v) => update("message", v)}
          error={errors.message}
          placeholder="Describe the business problem, outcome or capability you are exploring…"
          required
        />
      </div>

      {/* consent checkbox */}
      <div className="sm:col-span-2">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={values.consent}
            onChange={(e) => update("consent", e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-light-line text-brand focus:ring-brand/20 accent-brand"
          />
          <span className="text-xs leading-relaxed text-fg-dark-muted">
            By submitting this form, you agree that PMRG Solution may contact
            you about this enquiry. Your information will be handled according
            to our Privacy Policy.
          </span>
        </label>
        <AnimatePresence>
          {errors.consent && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -4 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -4 }}
              className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500"
            >
              <AlertCircle className="h-3 w-3" />
              {errors.consent}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={submitting}>
          {submitting ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Submitting…
            </>
          ) : (
            <>
              Submit My Requirement
              <Send className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  as = "input",
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  as?: "input" | "textarea";
  required?: boolean;
}) {
  const base = cn(
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-fg-dark placeholder:text-fg-dark-subtle transition-all focus:outline-none focus:ring-2",
    error
      ? "border-red-300 focus:border-red-400 focus:ring-red-200/50"
      : "border-light-line focus:border-brand/50 focus:ring-brand/20"
  );

  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-fg-dark">
        {label} {required && <span className="text-brand">*</span>}
      </label>
      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={4}
          className={cn(base, "resize-none")}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={base}
        />
      )}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -4 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -4 }}
            className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500"
          >
            <AlertCircle className="h-3 w-3" />
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center py-8 text-center"
    >
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.1 }}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-cyan text-white shadow-lg"
      >
        <Check className="h-8 w-8" strokeWidth={3} />
      </motion.span>
      <h3 className="mt-6 text-2xl font-bold text-fg-dark">Requirement submitted!</h3>
      <p className="mt-2 max-w-sm text-sm text-fg-dark-muted">
        PMRG will review the enquiry, identify the relevant capability owner
        and contact you using the information provided.
      </p>
      <button
        onClick={onReset}
        className="mt-6 text-sm font-medium text-brand hover:underline"
      >
        Submit another requirement
      </button>
    </motion.div>
  );
}
