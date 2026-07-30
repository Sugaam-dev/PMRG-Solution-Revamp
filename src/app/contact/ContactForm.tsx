"use client";
 
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, AlertCircle, Send } from "lucide-react";
import PhoneInput, {
  isValidPhoneNumber,
  type Value as PhoneValue,
} from "react-phone-number-input";
import "react-phone-number-input/style.css"; 
 
import { Button } from "@/components/ui/Button";
import { SERVICE_INTERESTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
 
const WEB3FORMS_ACCESS_KEY = "60ebdd86-b734-41ad-8703-46aa9afaea71";
 
const EMAIL_RE =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
 
type Fields = {
  name: string;
  email: string;
  phone: PhoneValue | undefined;
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
  phone: undefined,
  organization: "",
  role: "",
  service: "",
  message: "",
  consent: false,
};
 
export default function ContactForm() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
 
  const validate = (vals: Fields): Errors => {
    const e: Errors = {};
 
    if (!vals.name.trim()) e.name = "Please enter your name";
 
    if (!vals.email.trim()) {
      e.email = "Please enter your work email";
    } else if (!EMAIL_RE.test(vals.email.trim())) {
      e.email = "Please enter a valid email address";
    }
 
    if (!vals.organization.trim()) e.organization = "Please enter your organization";
 
    if (!vals.phone) {
      e.phone = "Please enter your phone number";
    } else if (!isValidPhoneNumber(vals.phone)) {
      e.phone = "Please enter a valid phone number for the selected country";
    }
 
    if (!vals.service) e.service = "Please select an area of interest";
 
    if (!vals.message.trim()) e.message = "Please describe your requirement";
    else if (vals.message.trim().length < 10) {
      e.message = "Requirement should be at least 10 characters";
    }
 
    if (!vals.consent) e.consent = "Please agree to the privacy terms to continue";
 
    return e;
  };
 
  const update = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
    if (submitError) setSubmitError(null);
  };
 
  const blur = (key: keyof Fields) => {
    setTouched((t) => ({ ...t, [key]: true }));
    const fieldErrors = validate(values);
    setErrors((prev) => ({ ...prev, [key]: fieldErrors[key] }));
  };
 
  const onEmailChange = (v: string) => {
    update("email", v);
    if (touched.email) {
      const err = !v.trim()
        ? "Please enter your work email"
        : !EMAIL_RE.test(v.trim())
        ? "Please enter a valid email address"
        : undefined;
      setErrors((e) => ({ ...e, email: err }));
    }
  };
 
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
 
    const allTouched = Object.fromEntries(
      Object.keys(EMPTY).map((k) => [k, true])
    ) as Record<keyof Fields, boolean>;
    setTouched(allTouched);
 
    if (!values.consent) {
      setErrors((prev) => ({ ...prev, consent: "Please agree to the privacy terms to continue" }));
      return;
    }
 
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
 
    setSubmitting(true);
    setSubmitError(null);
 
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: values.name,
          email: values.email,
          phone: values.phone,
          organization: values.organization,
          role: values.role,
          service_interest: values.service,
          message: values.message,
          botcheck: "",
        }),
      });
 
      const data = await res.json();
 
      if (data.success) {
        setSuccess(true);
      } else {
        setSubmitError(data.message ?? "Submission failed. Please try again.");
      }
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };
 
  if (success) {
    return (
      <SuccessState
        onReset={() => {
          setValues(EMPTY);
          setTouched({});
          setErrors({});
          setSuccess(false);
          setSubmitError(null);
        }}
      />
    );
  }
 
  const canSubmit = values.consent && !submitting;
 
  return (
    <form onSubmit={onSubmit} noValidate className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <input type="checkbox" name="botcheck" className="hidden" />
 
      <Field
        label="Full name"
        name="name"
        value={values.name}
        onChange={(v) => update("name", v)}
        onBlur={() => blur("name")}
        error={errors.name}
        placeholder="Jane Doe"
        required
      />
 
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-fg-dark">
          Work email <span className="text-brand">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={(e) => onEmailChange(e.target.value)}
          onBlur={() => blur("email")}
          placeholder="jane@company.com"
          autoComplete="email"
          className={cn(
            "w-full rounded-xl border bg-white px-4 py-3 text-sm text-fg-dark placeholder:text-fg-dark-subtle transition-all focus:outline-none focus:ring-2",
            errors.email
              ? "border-red-300 focus:border-red-400 focus:ring-red-200/50"
              : "border-light-line focus:border-brand/50 focus:ring-brand/20"
          )}
        />
        <AnimatePresence>
          {errors.email && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -4 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -4 }}
              className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500"
            >
              <AlertCircle className="h-3 w-3 shrink-0" />
              {errors.email}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
 
      <Field
        label="Organization"
        name="organization"
        value={values.organization}
        onChange={(v) => update("organization", v)}
        onBlur={() => blur("organization")}
        error={errors.organization}
        placeholder="Acme Telecom"
        required
      />
 
      <div>
        <label className="mb-2 block text-sm font-medium text-fg-dark">
          Phone number <span className="text-brand">*</span>
        </label>
 
            <PhoneInput
           defaultCountry="IN"
          international
           countryCallingCodeEditable={false}
         value={values.phone}
        onChange={(v) => update("phone", v)}
        onBlur={() => blur("phone")}
        className={cn("phone-wrap", errors.phone && "phone-wrap-error")}
       numberInputProps={{
         className: cn("phone-input", errors.phone && "phone-input-error"),
        }}
       countrySelectProps={{
       className: cn("phone-country", errors.phone && "phone-country-error"),
     }}
     placeholder="+91 9876543210"
      />
 
        <AnimatePresence>
          {errors.phone && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -4 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -4 }}
              className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500"
            >
              <AlertCircle className="h-3 w-3 shrink-0" />
              {errors.phone}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
 
      <div className="sm:col-span-2">
        <Field
          label="Role / designation"
          name="role"
          value={values.role}
          onChange={(v) => update("role", v)}
          placeholder="CTO, Head of Digital, Project Lead…"
        />
      </div>
 
      <div className="sm:col-span-2">
        <label className="mb-2 block text-sm font-medium text-fg-dark">
          Area of interest <span className="text-brand">*</span>
        </label>
        <select
          value={values.service}
          onChange={(e) => update("service", e.target.value)}
          onBlur={() => blur("service")}
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
          onBlur={() => blur("message")}
          error={errors.message}
          placeholder="Describe the business problem, desired outcome, or capability you are exploring, and your preferred time to connect..."
          required
        />
      </div>
 
      <div className="sm:col-span-2">
        <label className="flex cursor-pointer items-start gap-3 group">
          <input
            type="checkbox"
            checked={values.consent}
            onChange={(e) => update("consent", e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-light-line text-brand focus:ring-brand/20 accent-brand"
          />
          <span className="text-xs leading-relaxed text-fg-dark-muted">
            By submitting this form, you agree that PMRG Solution may contact you about this enquiry.
            Your information will be handled according to our Privacy Policy.
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
 
      {submitError && (
        <div className="sm:col-span-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {submitError}
        </div>
      )}
 
<div className="sm:col-span-2 flex flex-col gap-1.5">
  <Button
    type="submit"
    size="lg"
    disabled={!values.consent || submitting}
    aria-disabled={!values.consent || submitting}
    className={cn("w-full sm:w-auto transition-all duration-200")}
  >
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
 
  <AnimatePresence>
    {!values.consent && (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-xs text-fg-dark-muted"
      >
        Please accept the privacy terms above to enable this button.
      </motion.p>
    )}
  </AnimatePresence>
</div>
    </form>
  );
}
 
function Field({
  label,
  name,
  value,
  onChange,
  onBlur,
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
  onBlur?: () => void;
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
          onBlur={onBlur}
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
          onBlur={onBlur}
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
        PMRG will review the enquiry, identify the relevant capability owner and contact you using the information provided.
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