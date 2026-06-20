"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  age: string;
  gender: string;
  inBahrain: string;
  expectedSalary: string;
  aboutYourself: string;
  coverLetter: string;
  cv: File | null;
}

const inputClass =
  "w-full px-4 py-3 border border-nina-blue/20 bg-white text-nina-blue focus:outline-none focus:border-nina-sky transition-colors";

const labelClass = "block text-sm font-medium text-nina-blue mb-2";

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [cvFileName, setCvFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    age: "",
    gender: "",
    inBahrain: "",
    expectedSalary: "",
    aboutYourself: "",
    coverLetter: "",
    cv: null,
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    setFormData((prev) => ({ ...prev, cv: file }));
    setCvFileName(file ? file.name : null);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const { error } = await supabase.from("job_applications").insert({
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      position: formData.position,
      age: formData.age !== "" ? parseInt(formData.age, 10) : null,
      gender: formData.gender !== "" ? formData.gender : null,
      in_bahrain:
        formData.inBahrain === "Yes"
          ? true
          : formData.inBahrain === "No"
          ? false
          : null,
      expected_salary:
        formData.expectedSalary !== ""
          ? parseFloat(formData.expectedSalary)
          : null,
      about: formData.aboutYourself !== "" ? formData.aboutYourself : null,
      cover_letter: formData.coverLetter !== "" ? formData.coverLetter : null,
      cv_filename: formData.cv ? formData.cv.name : null,
    });

    if (error) {
      alert("There was an error submitting your application. Please try again.");
      setSubmitting(false);
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main>
        <section className="bg-nina-cream py-24 md:py-28 lg:py-32">
          <div className="max-w-[1140px] mx-auto px-6 text-center">
            <p className="font-sans text-xs tracking-[.4em] uppercase text-nina-sky mb-4">
              Careers
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-nina-blue">
              Work With Us
            </h1>
          </div>
        </section>

        <section className="bg-white py-24 md:py-28 lg:py-32">
          <div className="max-w-[1140px] mx-auto px-6 flex justify-center">
            <div className="bg-nina-cream p-8 max-w-lg w-full text-center">
              <div className="flex justify-center mb-6">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nina-sky/15">
                  <svg
                    className="w-8 h-8 text-nina-sky"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
              </div>
              <h2 className="font-serif text-2xl text-nina-blue mb-4">
                Application Received!
              </h2>
              <p className="text-nina-body leading-relaxed mb-8">
                Thank you for your application! We&apos;ve received your
                information and will review it shortly. If your profile matches
                our current openings, we&apos;ll be in touch.
              </p>
              <Link
                href="/"
                className="inline-block bg-nina-blue text-nina-cream hover:bg-nina-navy uppercase tracking-[.2em] text-xs font-semibold px-10 py-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nina-blue active:bg-nina-navy"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      {/* Hero Header */}
      <section className="bg-nina-cream py-24 md:py-28 lg:py-32 olive-tr olive-v2">
        <div className="max-w-[1140px] mx-auto px-6 relative">
          <p className="font-sans text-xs tracking-[.4em] uppercase text-nina-sky mb-4">
            Careers
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-nina-blue mb-6">
            Work With Us
          </h1>
          <p className="text-nina-body text-lg max-w-2xl leading-relaxed">
            Join the Nina The Greek family. We&apos;re always looking for
            passionate individuals who share our love for Greek cuisine and
            Mediterranean hospitality.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 md:py-28 lg:py-32 olive-tl olive-v3">
        <div className="max-w-[1140px] mx-auto px-6 relative">
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto"
            noValidate
          >
            {/* First Name + Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className={labelClass}>
                  First Name{" "}
                  <span className="text-nina-sky" aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className={inputClass}
                  autoComplete="given-name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className={labelClass}>
                  Last Name{" "}
                  <span className="text-nina-sky" aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className={inputClass}
                  autoComplete="family-name"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className={labelClass}>
                Email Address{" "}
                <span className="text-nina-sky" aria-hidden="true">
                  *
                </span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
                autoComplete="email"
              />
            </div>

            {/* Phone */}
            <div className="mb-6">
              <label htmlFor="phone" className={labelClass}>
                Phone Number{" "}
                <span className="text-nina-sky" aria-hidden="true">
                  *
                </span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className={inputClass}
                autoComplete="tel"
              />
            </div>

            {/* Position */}
            <div className="mb-6">
              <label htmlFor="position" className={labelClass}>
                Position Applying For{" "}
                <span className="text-nina-sky" aria-hidden="true">
                  *
                </span>
              </label>
              <select
                id="position"
                name="position"
                required
                value={formData.position}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="" disabled>
                  Select a position
                </option>
                <option value="Chef">Chef</option>
                <option value="Sous Chef">Sous Chef</option>
                <option value="Line Cook">Line Cook</option>
                <option value="Server">Server</option>
                <option value="Host/Hostess">Host/Hostess</option>
                <option value="Bartender">Bartender</option>
                <option value="Kitchen Porter">Kitchen Porter</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Age + Gender */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="age" className={labelClass}>
                  Age
                </label>
                <input
                  id="age"
                  name="age"
                  type="number"
                  min={16}
                  max={99}
                  value={formData.age}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="gender" className={labelClass}>
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="" disabled hidden>
                    Select
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>

            {/* Currently in Bahrain */}
            <div className="mb-6">
              <p className={labelClass}>Currently in Bahrain?</p>
              <div className="flex items-center gap-8">
                <label className="flex items-center gap-2 cursor-pointer text-nina-blue">
                  <input
                    type="radio"
                    name="inBahrain"
                    value="Yes"
                    checked={formData.inBahrain === "Yes"}
                    onChange={handleChange}
                    className="w-4 h-4 accent-nina-sky"
                  />
                  <span className="text-sm font-medium">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-nina-blue">
                  <input
                    type="radio"
                    name="inBahrain"
                    value="No"
                    checked={formData.inBahrain === "No"}
                    onChange={handleChange}
                    className="w-4 h-4 accent-nina-sky"
                  />
                  <span className="text-sm font-medium">No</span>
                </label>
              </div>
            </div>

            {/* Expected Salary */}
            <div className="mb-6">
              <label htmlFor="expectedSalary" className={labelClass}>
                Expected Salary
              </label>
              <div className="flex items-center gap-3">
                <input
                  id="expectedSalary"
                  name="expectedSalary"
                  type="number"
                  min={0}
                  value={formData.expectedSalary}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="e.g. 400"
                />
                <span className="shrink-0 text-sm text-nina-body font-medium whitespace-nowrap">
                  BHD / month
                </span>
              </div>
            </div>

            {/* About Yourself */}
            <div className="mb-6">
              <label htmlFor="aboutYourself" className={labelClass}>
                About Yourself
              </label>
              <textarea
                id="aboutYourself"
                name="aboutYourself"
                rows={4}
                value={formData.aboutYourself}
                onChange={handleChange}
                className={inputClass}
                placeholder="Tell us a little about yourself, your background, and your passion for hospitality..."
              />
            </div>

            {/* Cover Letter */}
            <div className="mb-6">
              <label htmlFor="coverLetter" className={labelClass}>
                Cover Letter
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                rows={6}
                value={formData.coverLetter}
                onChange={handleChange}
                className={inputClass}
                placeholder="Why do you want to join the Nina The Greek team? What makes you a great fit?"
              />
            </div>

            {/* CV Upload */}
            <div className="mb-8">
              <p className={labelClass}>Upload Your CV</p>
              <div
                role="button"
                tabIndex={0}
                onClick={() => fileInputRef.current?.click()}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    fileInputRef.current?.click();
                  }
                }}
                className="w-full border-2 border-dashed border-nina-blue/16 px-6 py-8 text-center cursor-pointer hover:border-nina-sky hover:bg-white/50 transition-colors"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  name="cv"
                  id="cv"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="sr-only"
                />
                {cvFileName ? (
                  <div className="flex items-center justify-center gap-2 text-nina-blue">
                    <svg
                      className="w-5 h-5 text-nina-sky shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm font-medium break-all">
                      {cvFileName}
                    </span>
                    <span className="text-xs text-nina-blue/50 shrink-0">
                      (click to change)
                    </span>
                  </div>
                ) : (
                  <>
                    <svg
                      className="w-8 h-8 text-nina-blue/30 mx-auto mb-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16v-8m0 0l-3 3m3-3l3 3M20 16.5A3.5 3.5 0 0016.5 13H15a5 5 0 10-9.9 1A4 4 0 006 22h10.5a3.5 3.5 0 003.5-3.5z"
                      />
                    </svg>
                    <p className="text-sm text-nina-blue/60">
                      <span className="font-medium text-nina-blue">
                        Click to upload
                      </span>{" "}
                      your CV
                    </p>
                    <p className="text-xs text-nina-blue/40 mt-1">
                      PDF, DOC, or DOCX
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Submit */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 bg-nina-blue text-nina-cream hover:bg-nina-navy disabled:opacity-40 disabled:cursor-not-allowed uppercase tracking-[.2em] text-xs font-semibold px-10 py-4 w-full md:w-auto transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nina-blue active:bg-nina-navy"
              >
                {submitting && (
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                    <path className="opacity-90" fill="currentColor" d="M12 2a10 10 0 0 1 10 10h-3a7 7 0 0 0-7-7V2z" />
                  </svg>
                )}
                {submitting ? "Submitting…" : "Submit Application"}
              </button>
              <p className="text-xs text-nina-blue/50">
                <span className="text-nina-sky">*</span> Required fields
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
