"use client";

import { useState } from "react";

const G = "#1D9E75";

const Contact = () => {
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [note, setNote]       = useState("");
  const [errors, setErrors]   = useState({});
  const [status, setStatus]   = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  const validate = () => {
    const errs = {};
    if (!name.trim())  errs.name  = "Name is required.";
    if (!email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus("loading");
    setMessage("");
    setErrors({});

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: note.trim() }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "You're on the waitlist!");
        setName("");
        setEmail("");
        setNote("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  };

  const inputStyle = (hasError) => ({
    width: "100%",
    padding: "12px 14px",
    border: `1.5px solid ${hasError ? "#f87171" : "#d1d5db"}`,
    borderRadius: 8,
    fontSize: 15,
    color: "#111827",
    background: status === "loading" ? "#f9fafb" : "#fff",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.15s",
  });

  return (
    <section style={{ padding: "80px 0 100px", background: "#f8fafc", minHeight: "70vh" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 1.5rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h1 style={{
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 700,
            color: "#0F172A",
            margin: "0 0 16px",
            lineHeight: 1.2,
          }}>
            Your experience builds a better Jeevora — for everyone.
          </h1>
          <p style={{
            fontSize: 17,
            color: "#64748b",
            lineHeight: 1.7,
            maxWidth: 480,
            margin: "0 auto 16px",
          }}>
            You know what it feels like to sit in a 10-minute appointment and forget half of what you meant to say. We're building Jeevora so that never happens again — and we need patients like you to get it right.
          </p>
          <p style={{
            fontSize: 17,
            color: "#64748b",
            lineHeight: 1.7,
            maxWidth: 480,
            margin: "0 auto",
            fontStyle: "italic",
          }}>
            Join the waitlist. Get early access. Tell us what your health journey actually needs — and help shape an app that truly puts patients first.
          </p>
        </div>

        {/* Card */}
        <div style={{
          background: "#ffffff",
          borderRadius: 16,
          padding: "40px 40px 36px",
          boxShadow: "0 2px 24px rgba(0,0,0,0.07)",
          border: "1px solid #e2e8f0",
        }}>

          {status === "success" ? (
            /* ── Success state ── */
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div style={{
                width: 64,
                height: 64,
                borderRadius: 32,
                background: "#ecfdf5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                fontSize: 28,
              }}>
                ✓
              </div>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0F172A", marginBottom: 10 }}>
                You're on the list!
              </h2>
              <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.65, marginBottom: 28 }}>
                {message}
              </p>
              <button
                onClick={() => { setStatus("idle"); setErrors({}); }}
                style={{
                  background: "transparent",
                  border: `1.5px solid ${G}`,
                  color: G,
                  borderRadius: 8,
                  padding: "10px 24px",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Add another email
              </button>
            </div>
          ) : (
            /* ── Form ── */
            <form onSubmit={handleSubmit} noValidate>

              {/* Required fields note */}
              <p style={{ fontSize: 12, color: "#9ca3af", marginBottom: 20, textAlign: "right" }}>
                Fields marked <span style={{ color: "#dc2626" }}>*</span> are required
              </p>

              {/* Name */}
              <div style={{ marginBottom: 20 }}>
                <label style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#374151",
                  marginBottom: 6,
                }}>
                  Full name <span style={{ color: "#dc2626" }}>*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                  placeholder="Your name"
                  disabled={status === "loading"}
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  style={inputStyle(!!errors.name)}
                  onFocus={(e) => (e.target.style.borderColor = errors.name ? "#f87171" : G)}
                  onBlur={(e) => (e.target.style.borderColor = errors.name ? "#f87171" : "#d1d5db")}
                />
                {errors.name && (
                  <p style={{ fontSize: 12, color: "#dc2626", marginTop: 5 }}>{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div style={{ marginBottom: errors.email ? 8 : 28 }}>
                <label style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#374151",
                  marginBottom: 6,
                }}>
                  Email address <span style={{ color: "#dc2626" }}>*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                  }}
                  placeholder="you@example.com"
                  disabled={status === "loading"}
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  style={inputStyle(!!errors.email)}
                  onFocus={(e) => (e.target.style.borderColor = errors.email ? "#f87171" : G)}
                  onBlur={(e) => (e.target.style.borderColor = errors.email ? "#f87171" : "#d1d5db")}
                />
                {errors.email && (
                  <p style={{ fontSize: 12, color: "#dc2626", marginTop: 5, marginBottom: 20 }}>{errors.email}</p>
                )}
              </div>

              {/* Note (optional) */}
              <div style={{ marginBottom: 28 }}>
                <label style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#374151",
                  marginBottom: 6,
                }}>
                  Anything you'd like to share?{" "}
                  <span style={{ color: "#9ca3af", fontWeight: 400 }}>(optional)</span>
                </label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="A question, a health concern, or just a hello…"
                  rows={3}
                  disabled={status === "loading"}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    border: "1.5px solid #d1d5db",
                    borderRadius: 8,
                    fontSize: 15,
                    color: "#111827",
                    background: status === "loading" ? "#f9fafb" : "#fff",
                    outline: "none",
                    boxSizing: "border-box",
                    resize: "vertical",
                    fontFamily: "inherit",
                    lineHeight: 1.5,
                    transition: "border-color 0.15s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = G)}
                  onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                />
              </div>

              {/* API-level error */}
              {status === "error" && (
                <div style={{
                  background: "#fef2f2",
                  border: "1px solid #fecaca",
                  borderRadius: 8,
                  padding: "10px 14px",
                  marginBottom: 20,
                  fontSize: 13,
                  color: "#dc2626",
                }}>
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  width: "100%",
                  padding: "13px 0",
                  background: status === "loading" ? "#6ee7b7" : G,
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  fontSize: 16,
                  fontWeight: 700,
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  transition: "background 0.15s",
                  letterSpacing: "0.01em",
                }}
              >
                {status === "loading" ? "Joining…" : "Join the Waitlist"}
              </button>

              <p style={{
                textAlign: "center",
                fontSize: 12,
                color: "#9ca3af",
                marginTop: 14,
                lineHeight: 1.5,
              }}>
                No spam. We'll only reach out when Jeevora is ready for you.
              </p>
            </form>
          )}
        </div>

        {/* Trust badges */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 32,
          marginTop: 36,
          flexWrap: "wrap",
        }}>
          {[
            { icon: "🔒", text: "Data never sold" },
            { icon: "✓",  text: "Privacy-first" },
            { icon: "📋", text: "Immutable consent log" },
          ].map(({ icon, text }) => (
            <div key={text} style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              fontSize: 13,
              color: "#64748b",
            }}>
              <span style={{ fontSize: 16 }}>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Contact;
