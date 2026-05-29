"use client";

import { useState, useEffect } from "react";

const FEATURE_OPTIONS = [
  "Symptom tracking",
  "GP ready report",
  "Lifestyle tracking",
  "Privacy first",
];

export default function WaitlistForm({ feature }) {
  const showFeatureFields = feature !== undefined;

  const [form, setForm] = useState({
    name: "",
    email: "",
    feature: feature || "",
    message: "",
  });
  const [errors, setErrors]   = useState({});
  const [status, setStatus]   = useState(null); // null | "loading" | "success" | "error"
  const [message, setMessage] = useState("");

  // Sync feature dropdown when the active tab changes
  useEffect(() => {
    if (showFeatureFields) {
      setForm((prev) => ({ ...prev, feature: feature || "" }));
    }
  }, [feature, showFeatureFields]);

  const validate = () => {
    const errs = {};
    if (!form.name.trim())  errs.name  = "Name is required.";
    if (!form.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus("loading");
    setMessage("");

    try {
      const body = {
        name: form.name.trim(),
        email: form.email.trim(),
        source: typeof window !== "undefined" ? window.location.pathname : null,
        ...(showFeatureFields && form.feature && { feature: form.feature }),
        ...(showFeatureFields && form.message.trim() && { message: form.message.trim() }),
      };

      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "You're on the waitlist!");
        setForm({ name: "", email: "", feature: feature || "", message: "" });
        setErrors({});
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Could not connect. Please check your connection and try again.");
    }
  };

  const disabled = status === "loading" || status === "success";

  const labelStyle = {
    display: "block",
    fontSize: 13,
    fontWeight: 600,
    color: "#374151",
    marginBottom: 5,
  };

  const inputBase =
    "w-full rounded-lg border px-4 py-3 text-dark outline-none focus:ring-2 focus:ring-primary/20 transition disabled:opacity-60";

  return (
    <form onSubmit={handleSubmit} className="mt-6 w-full" noValidate>
      <div className="flex flex-col gap-4">

        {/* Name */}
        <div>
          <label htmlFor="wf-name" style={labelStyle}>
            Full name <span style={{ color: "#dc2626" }}>*</span>
          </label>
          <input
            id="wf-name"
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            disabled={disabled}
            aria-required="true"
            aria-invalid={!!errors.name}
            className={`${inputBase} ${errors.name ? "border-red-400 focus:border-red-400" : "border-border focus:border-primary"}`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="wf-email" style={labelStyle}>
            Email address <span style={{ color: "#dc2626" }}>*</span>
          </label>
          <input
            id="wf-email"
            type="email"
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            disabled={disabled}
            aria-required="true"
            aria-invalid={!!errors.email}
            className={`${inputBase} ${errors.email ? "border-red-400 focus:border-red-400" : "border-border focus:border-primary"}`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Feature dropdown + feedback — only when a feature context is provided */}
        {showFeatureFields && (
          <>
            {/* Feature of interest */}
            <div>
              <label htmlFor="wf-feature" style={labelStyle}>
                Feature of interest
              </label>
              <select
                id="wf-feature"
                name="feature"
                value={form.feature}
                onChange={handleChange}
                disabled={disabled}
                className={`${inputBase} border-border focus:border-primary bg-transparent cursor-pointer`}
              >
                {FEATURE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            {/* Optional feedback */}
            <div>
              <label htmlFor="wf-message" style={labelStyle}>
                What would make this feature most useful for you?{" "}
                <span style={{ fontWeight: 400, opacity: 0.6 }}>(optional)</span>
              </label>
              <textarea
                id="wf-message"
                name="message"
                placeholder="Share any thoughts, use cases, or things you'd love to see…"
                value={form.message}
                onChange={handleChange}
                disabled={disabled}
                rows={3}
                className={`${inputBase} border-border focus:border-primary resize-none`}
              />
            </div>
          </>
        )}

        {/* API-level error */}
        {status === "error" && message && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {message}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={disabled}
          className="btn btn-primary w-full py-3 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "loading"
            ? "Joining…"
            : status === "success"
            ? "✓ Thank you for joining us!"
            : "Join Waitlist"}
        </button>
      </div>

      {/* Success message */}
      {status === "success" && message && (
        <p className="mt-3 text-sm text-center font-medium text-green-600">{message}</p>
      )}

      <p className="mt-3 text-xs text-center opacity-60">
        No spam. No sharing. Just early access.
      </p>
    </form>
  );
}
