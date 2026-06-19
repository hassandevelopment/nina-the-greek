"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

// ─── Types ───────────────────────────────────────────────────────────────────

type EventType = "private-dining" | "corporate-event" | "celebration" | "";
type GuestCount = "up-to-20" | "20-40" | "45-60" | "full-restaurant" | "";
type Duration = "few-hours" | "half-day" | "full-day" | "";
type TimePreference = "lunch" | "dinner" | "";

interface FormData {
  eventType: EventType;
  guestCount: GuestCount;
  duration: Duration;
  privateChef: boolean;
  date: string;
  timePreference: TimePreference;
  specialRequests: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
}

// ─── SVG Icons ───────────────────────────────────────────────────────────────

function WineGlassIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 22h8M12 15v7M6 2h12l-2 8a4 4 0 0 1-8 0L6 2z" />
    </svg>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M12 12v4M10 14h4" />
    </svg>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
      <path d="M5 17l.75 2.25L8 20l-2.25.75L5 23l-.75-2.25L2 20l2.25-.75L5 17z" />
      <path d="M19 3l.5 1.5L21 5l-1.5.5L19 7l-.5-1.5L17 5l1.5-.5L19 3z" />
    </svg>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

// ─── Progress Indicator ──────────────────────────────────────────────────────

const STEP_LABELS = ["Event Type", "Details", "Requests", "Contact", "Confirm"];

function ProgressIndicator({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex items-center justify-center mb-12" aria-label="Form progress">
      {STEP_LABELS.map((label, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isActive = stepNumber === currentStep;
        return (
          <div key={stepNumber} className="flex items-center">
            <div className="flex flex-col items-center gap-2">
              <div
                className={[
                  "w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300",
                  isCompleted
                    ? "bg-nina-sky text-white"
                    : isActive
                    ? "bg-nina-blue text-nina-cream ring-2 ring-nina-sky ring-offset-2"
                    : "bg-white border-2 border-nina-blue/20 text-nina-blue/40",
                ].join(" ")}
                aria-current={isActive ? "step" : undefined}
              >
                {isCompleted ? (
                  <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" />
                  </svg>
                ) : (
                  stepNumber
                )}
              </div>
              <span
                className={[
                  "text-xs tracking-wide hidden sm:block",
                  isActive ? "text-nina-blue font-semibold" : "text-nina-blue/40",
                ].join(" ")}
              >
                {label}
              </span>
            </div>
            {index < STEP_LABELS.length - 1 && (
              <div
                className={[
                  "h-px w-12 sm:w-16 mx-1 mb-5 transition-all duration-300",
                  isCompleted ? "bg-nina-sky" : "bg-nina-blue/15",
                ].join(" ")}
                aria-hidden="true"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Step 1: Event Type ──────────────────────────────────────────────────────

const EVENT_TYPES: {
  value: Exclude<EventType, "">;
  label: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
}[] = [
  {
    value: "private-dining",
    label: "Private Dining",
    description: "An intimate dining experience with a curated menu for your group.",
    Icon: WineGlassIcon,
  },
  {
    value: "corporate-event",
    label: "Corporate Event",
    description: "Professional gatherings, team dinners, and client entertainment.",
    Icon: BriefcaseIcon,
  },
  {
    value: "celebration",
    label: "Celebration",
    description: "Birthdays, anniversaries, engagements, and milestone events.",
    Icon: SparklesIcon,
  },
];

function StepEventType({
  value,
  onChange,
}: {
  value: EventType;
  onChange: (v: EventType) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-3xl text-nina-blue mb-2">What type of event are you planning?</h2>
        <p className="text-nina-blue/60 text-base">Select the option that best describes your gathering.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        {EVENT_TYPES.map(({ value: v, label, description, Icon }) => {
          const selected = value === v;
          return (
            <button
              key={v}
              type="button"
              onClick={() => onChange(v)}
              className={[
                "group flex flex-col items-center text-center p-6 border-2 transition-all duration-200 bg-white",
                selected
                  ? "border-nina-sky bg-nina-sky/5 shadow-md"
                  : "border-nina-blue/10 hover:border-nina-blue/30 hover:shadow-sm",
              ].join(" ")}
              aria-pressed={selected}
            >
              <div
                className={[
                  "w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-200",
                  selected ? "bg-nina-sky/20 text-nina-sky" : "bg-nina-blue/5 text-nina-blue/50 group-hover:bg-nina-blue/10",
                ].join(" ")}
              >
                <Icon className="w-7 h-7" />
              </div>
              <span
                className={[
                  "font-serif text-lg mb-2 transition-colors duration-200",
                  selected ? "text-nina-blue" : "text-nina-blue/80",
                ].join(" ")}
              >
                {label}
              </span>
              <span className="text-sm text-nina-blue/50 leading-relaxed">{description}</span>
              {selected && (
                <div className="mt-3 w-5 h-5 rounded-full bg-nina-sky flex items-center justify-center">
                  <svg viewBox="0 0 12 12" fill="currentColor" className="w-3 h-3 text-white" aria-hidden="true">
                    <path d="M10.28 2.28a.75.75 0 0 0-1.06 0L4.5 7l-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0 0-1.06z" />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Step 2: Details ─────────────────────────────────────────────────────────

function PillOption({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "px-5 py-2.5 border-2 text-sm font-semibold tracking-wide transition-all duration-200",
        selected
          ? "border-nina-sky bg-nina-sky/10 text-nina-blue"
          : "border-nina-blue/15 bg-white text-nina-blue/60 hover:border-nina-blue/30 hover:text-nina-blue",
      ].join(" ")}
      aria-pressed={selected}
    >
      {label}
    </button>
  );
}

const GUEST_COUNT_OPTIONS: { value: GuestCount; label: string }[] = [
  { value: "up-to-20", label: "Up to 20" },
  { value: "20-40", label: "20-40" },
  { value: "45-60", label: "45-60" },
  { value: "full-restaurant", label: "Full Restaurant" },
];

const DURATION_OPTIONS: { value: Duration; label: string }[] = [
  { value: "few-hours", label: "Few Hours" },
  { value: "half-day", label: "Half Day" },
  { value: "full-day", label: "Full Day" },
];

const TIME_OPTIONS: { value: TimePreference; label: string }[] = [
  { value: "lunch", label: "Lunch" },
  { value: "dinner", label: "Dinner" },
];

function StepDetails({
  formData,
  onChange,
}: {
  formData: FormData;
  onChange: (updates: Partial<FormData>) => void;
}) {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-3xl text-nina-blue mb-2">Tell us about your event</h2>
        <p className="text-nina-blue/60 text-base">Help us plan the perfect experience for you.</p>
      </div>

      {/* Guest Count */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold tracking-widest uppercase text-nina-blue/70">
          Number of Guests
        </label>
        <div className="flex flex-wrap gap-3">
          {GUEST_COUNT_OPTIONS.map(({ value, label }) => (
            <PillOption
              key={value}
              label={label}
              selected={formData.guestCount === value}
              onClick={() => onChange({ guestCount: value })}
            />
          ))}
        </div>
      </div>

      {/* Duration */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold tracking-widest uppercase text-nina-blue/70">
          Event Duration
        </label>
        <div className="flex flex-wrap gap-3">
          {DURATION_OPTIONS.map(({ value, label }) => (
            <PillOption
              key={value}
              label={label}
              selected={formData.duration === value}
              onClick={() => onChange({ duration: value })}
            />
          ))}
        </div>
      </div>

      {/* Private Chef */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative mt-0.5 flex-shrink-0">
            <input
              type="checkbox"
              checked={formData.privateChef}
              onChange={(e) => onChange({ privateChef: e.target.checked })}
              className="sr-only"
            />
            <div
              className={[
                "w-5 h-5 border-2 flex items-center justify-center transition-all duration-200",
                formData.privateChef
                  ? "bg-nina-sky border-nina-sky"
                  : "bg-white border-nina-blue/25 group-hover:border-nina-blue/50",
              ].join(" ")}
              aria-hidden="true"
            >
              {formData.privateChef && (
                <svg viewBox="0 0 12 12" fill="currentColor" className="w-3 h-3 text-white" aria-hidden="true">
                  <path d="M10.28 2.28a.75.75 0 0 0-1.06 0L4.5 7l-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0 0-1.06z" />
                </svg>
              )}
            </div>
          </div>
          <div>
            <span className="block text-nina-blue font-semibold">Private Chef Experience</span>
            <span className="block text-sm text-nina-blue/50 mt-0.5">
              Enhance your event with a dedicated private chef curating a bespoke menu.
            </span>
          </div>
        </label>
      </div>

      {/* Date */}
      <div className="space-y-3">
        <label
          htmlFor="event-date"
          className="block text-sm font-semibold tracking-widest uppercase text-nina-blue/70"
        >
          Preferred Date
        </label>
        <input
          id="event-date"
          type="date"
          min={today}
          value={formData.date}
          onChange={(e) => onChange({ date: e.target.value })}
          className="w-full sm:w-64 px-4 py-3 bg-white border-2 border-nina-blue/15 text-nina-blue focus:outline-none focus:border-nina-sky transition-colors duration-200"
        />
      </div>

      {/* Time Preference */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold tracking-widest uppercase text-nina-blue/70">
          Time Preference
        </label>
        <div className="flex flex-wrap gap-3">
          {TIME_OPTIONS.map(({ value, label }) => (
            <PillOption
              key={value}
              label={label}
              selected={formData.timePreference === value}
              onClick={() => onChange({ timePreference: value })}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Step 3: Special Requests ────────────────────────────────────────────────

function StepSpecialRequests({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-3xl text-nina-blue mb-2">Any special requests?</h2>
        <p className="text-nina-blue/60 text-base">
          Share any details that will help us create the perfect experience.
        </p>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="special-requests"
          className="block text-sm font-semibold tracking-widest uppercase text-nina-blue/70"
        >
          Notes &amp; Requests
        </label>
        <textarea
          id="special-requests"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Tell us about any special requests, dietary requirements, preferred menu items, or specific arrangements you'd like..."
          rows={8}
          className="w-full px-4 py-4 bg-white border-2 border-nina-blue/15 text-nina-blue placeholder:text-nina-blue/30 focus:outline-none focus:border-nina-sky transition-colors duration-200 resize-none leading-relaxed"
          style={{ minHeight: "200px" }}
        />
        <p className="text-xs text-nina-blue/40">{value.length} characters</p>
      </div>
    </div>
  );
}

// ─── Step 4: Contact Info ────────────────────────────────────────────────────

function InputField({
  id,
  label,
  type = "text",
  required = true,
  value,
  onChange,
  placeholder,
  optional,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  optional?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-semibold tracking-widest uppercase text-nina-blue/70">
        {label}
        {optional && <span className="ml-2 text-xs normal-case tracking-normal font-normal text-nina-blue/40">(Optional)</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-white border-2 border-nina-blue/15 text-nina-blue placeholder:text-nina-blue/25 focus:outline-none focus:border-nina-sky transition-colors duration-200"
      />
    </div>
  );
}

function StepContact({
  formData,
  onChange,
}: {
  formData: FormData;
  onChange: (updates: Partial<FormData>) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-3xl text-nina-blue mb-2">Your contact details</h2>
        <p className="text-nina-blue/60 text-base">
          Our events team will reach out to confirm your reservation.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField
          id="first-name"
          label="First Name"
          value={formData.firstName}
          onChange={(v) => onChange({ firstName: v })}
          placeholder="Alexandra"
        />
        <InputField
          id="last-name"
          label="Last Name"
          value={formData.lastName}
          onChange={(v) => onChange({ lastName: v })}
          placeholder="Papadopoulos"
        />
      </div>
      <InputField
        id="email"
        label="Email Address"
        type="email"
        value={formData.email}
        onChange={(v) => onChange({ email: v })}
        placeholder="you@example.com"
      />
      <InputField
        id="phone"
        label="Phone Number"
        type="tel"
        value={formData.phone}
        onChange={(v) => onChange({ phone: v })}
        placeholder="+973 1732 2777"
      />
      <InputField
        id="company"
        label="Company Name"
        required={false}
        optional
        value={formData.company}
        onChange={(v) => onChange({ company: v })}
        placeholder="Acme Corporation"
      />
    </div>
  );
}

// ─── Step 5: Confirmation ────────────────────────────────────────────────────

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between py-3 border-b border-nina-blue/8 last:border-0">
      <span className="text-sm font-semibold tracking-widest uppercase text-nina-blue/50 flex-shrink-0 mr-4">
        {label}
      </span>
      <span className="text-sm text-nina-blue text-right">{value || "—"}</span>
    </div>
  );
}

function formatGuestCount(v: GuestCount): string {
  const map: Record<Exclude<GuestCount, "">, string> = {
    "up-to-20": "Up to 20 guests",
    "20-40": "20-40 guests",
    "45-60": "45-60 guests",
    "full-restaurant": "Full restaurant buyout",
  };
  return v ? map[v] : "—";
}

function formatDuration(v: Duration): string {
  const map: Record<Exclude<Duration, "">, string> = {
    "few-hours": "A few hours",
    "half-day": "Half day",
    "full-day": "Full day",
  };
  return v ? map[v] : "—";
}

function formatEventType(v: EventType): string {
  const map: Record<Exclude<EventType, "">, string> = {
    "private-dining": "Private Dining",
    "corporate-event": "Corporate Event",
    celebration: "Celebration",
  };
  return v ? map[v] : "—";
}

function StepConfirmation({
  formData,
  submitted,
}: {
  formData: FormData;
  submitted: boolean;
}) {
  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center py-8 space-y-6">
        <div className="w-20 h-20 rounded-full bg-nina-sky/15 flex items-center justify-center">
          <CheckCircleIcon className="w-10 h-10 text-nina-sky" />
        </div>
        <div className="space-y-3">
          <h2 className="font-serif text-3xl text-nina-blue">Inquiry Received</h2>
          <p className="text-nina-blue/60 max-w-sm leading-relaxed">
            Your event inquiry has been submitted. Our events team will be in touch within 24 hours.
          </p>
        </div>
        <div className="w-full max-w-xs border-t border-nina-blue/10 pt-6">
          <p className="text-xs text-nina-blue/40 uppercase tracking-widest">
            Confirmation sent to
          </p>
          <p className="text-nina-blue font-semibold mt-1">{formData.email}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-3xl text-nina-blue mb-2">Review your inquiry</h2>
        <p className="text-nina-blue/60 text-base">
          Please confirm your details before submitting.
        </p>
      </div>
      <div className="bg-white border border-nina-blue/10 overflow-hidden shadow-sm">
        {/* Event Details */}
        <div className="px-6 py-4 bg-nina-blue/3 border-b border-nina-blue/8">
          <h3 className="text-xs font-semibold tracking-widest uppercase text-nina-blue/50">
            Event Details
          </h3>
        </div>
        <div className="px-6">
          <SummaryRow label="Event Type" value={formatEventType(formData.eventType)} />
          <SummaryRow label="Guests" value={formatGuestCount(formData.guestCount)} />
          <SummaryRow label="Duration" value={formatDuration(formData.duration)} />
          <SummaryRow
            label="Date"
            value={
              formData.date
                ? new Date(formData.date + "T00:00:00").toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "—"
            }
          />
          <SummaryRow
            label="Time"
            value={
              formData.timePreference === "lunch"
                ? "Lunch service"
                : formData.timePreference === "dinner"
                ? "Dinner service"
                : "—"
            }
          />
          <SummaryRow
            label="Private Chef"
            value={formData.privateChef ? "Yes, requested" : "Not requested"}
          />
          {formData.specialRequests && (
            <SummaryRow label="Special Requests" value={formData.specialRequests} />
          )}
        </div>

        {/* Contact */}
        <div className="px-6 py-4 bg-nina-blue/3 border-t border-b border-nina-blue/8">
          <h3 className="text-xs font-semibold tracking-widest uppercase text-nina-blue/50">
            Contact Information
          </h3>
        </div>
        <div className="px-6">
          <SummaryRow
            label="Name"
            value={[formData.firstName, formData.lastName].filter(Boolean).join(" ")}
          />
          <SummaryRow label="Email" value={formData.email} />
          <SummaryRow label="Phone" value={formData.phone} />
          {formData.company && <SummaryRow label="Company" value={formData.company} />}
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

const INITIAL_FORM_DATA: FormData = {
  eventType: "",
  guestCount: "",
  duration: "",
  privateChef: false,
  date: "",
  timePreference: "",
  specialRequests: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
};

export default function PrivateEventsPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function updateFormData(updates: Partial<FormData>) {
    setFormData((prev) => ({ ...prev, ...updates }));
  }

  function canAdvance(): boolean {
    switch (currentStep) {
      case 1:
        return formData.eventType !== "";
      case 2:
        return (
          formData.guestCount !== "" &&
          formData.duration !== "" &&
          formData.date !== "" &&
          formData.timePreference !== ""
        );
      case 3:
        return true;
      case 4:
        return (
          formData.firstName.trim() !== "" &&
          formData.lastName.trim() !== "" &&
          formData.email.trim() !== "" &&
          formData.phone.trim() !== ""
        );
      case 5:
        return true;
      default:
        return false;
    }
  }

  function handleNext() {
    if (currentStep < 5) {
      setCurrentStep((s) => s + 1);
    }
  }

  function handleBack() {
    if (currentStep > 1) {
      setCurrentStep((s) => s - 1);
    }
  }

  async function handleSubmit() {
    setSubmitting(true);
    const { error } = await supabase.from("event_requests").insert({
      event_type: formData.eventType,
      guest_count: formData.guestCount,
      duration: formData.duration,
      private_chef: formData.privateChef,
      preferred_date: formData.date,
      time_preference: formData.timePreference,
      special_requests: formData.specialRequests,
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
    });

    if (error) {
      alert("There was an error submitting your request. Please try again.");
      setSubmitting(false);
      return;
    }

    setSubmitted(true);
  }

  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-[.4em] uppercase text-nina-sky mb-4">
            Nina The Greek
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl text-nina-blue mb-5 leading-tight">
            Private Events
          </h1>
          <p className="text-nina-blue/55 text-lg max-w-lg mx-auto leading-relaxed">
            Create an unforgettable Mediterranean dining experience tailored exclusively for you and your guests.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white shadow-xl shadow-nina-blue/5 border border-nina-blue/8 overflow-hidden">
          <div className="px-8 pt-10 pb-6 border-b border-nina-blue/6">
            <ProgressIndicator currentStep={currentStep} />
          </div>

          <div className="px-8 py-8">
            {currentStep === 1 && (
              <StepEventType
                value={formData.eventType}
                onChange={(v) => updateFormData({ eventType: v })}
              />
            )}
            {currentStep === 2 && (
              <StepDetails formData={formData} onChange={updateFormData} />
            )}
            {currentStep === 3 && (
              <StepSpecialRequests
                value={formData.specialRequests}
                onChange={(v) => updateFormData({ specialRequests: v })}
              />
            )}
            {currentStep === 4 && (
              <StepContact formData={formData} onChange={updateFormData} />
            )}
            {currentStep === 5 && (
              <StepConfirmation formData={formData} submitted={submitted} />
            )}
          </div>

          {/* Navigation */}
          {!submitted && (
            <div className="px-8 pb-8 flex items-center justify-between gap-4">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="uppercase tracking-[.2em] text-xs font-semibold px-10 py-4 border border-nina-blue/20 text-nina-blue hover:bg-nina-blue/5 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nina-blue active:bg-nina-blue/10"
                >
                  Back
                </button>
              ) : (
                <div />
              )}

              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!canAdvance()}
                  className="uppercase tracking-[.2em] text-xs font-semibold px-10 py-4 bg-nina-blue text-nina-cream hover:bg-nina-navy disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nina-cream active:bg-nina-navy"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!canAdvance() || submitting}
                  className="inline-flex items-center justify-center gap-2 uppercase tracking-[.2em] text-xs font-semibold px-10 py-4 bg-nina-blue text-nina-cream hover:bg-nina-navy disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nina-cream active:bg-nina-navy"
                >
                  {submitting && (
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                      <path className="opacity-90" fill="currentColor" d="M12 2a10 10 0 0 1 10 10h-3a7 7 0 0 0-7-7V2z" />
                    </svg>
                  )}
                  {submitting ? "Submitting…" : "Submit Inquiry"}
                </button>
              )}
            </div>
          )}
        </div>

        {/* Footer Note */}
        {!submitted && (
          <p className="text-center text-xs text-nina-blue/35 mt-8 leading-relaxed">
            By submitting, our events team will contact you within 24 hours to confirm availability and discuss details.
          </p>
        )}
      </div>
    </main>
  );
}
