"use client";

import Link from "next/link";

const FEATURE_CARDS = [
  {
    label: "Symptom tracking",
    desc: "Log symptoms with timeline, severity, and frequency — so nothing slips through the cracks before your appointment.",
    href: "/symptom-tracking",
    accent: "#3B6D11",
    bg: "#EAF3DE",
  },
  {
    label: "GP ready report",
    desc: "Every log you make compiles automatically into a clear, structured summary your doctor can read in under two minutes.",
    href: "/gp-report",
    accent: "#185FA5",
    bg: "#E6F1FB",
  },
  {
    label: "Lifestyle tracking",
    desc: "Sleep, mood, nutrition, and exercise — tracked alongside your symptoms so the full picture is always clear.",
    href: "/lifestyle-tracking",
    accent: "#854F0B",
    bg: "#FAEEDA",
  },
  {
    label: "Privacy first",
    desc: "Your data is yours. Every consent decision is recorded immutably — so your privacy isn't just a promise, it's verifiable.",
    href: "/privacy-first",
    accent: "#534AB7",
    bg: "#EEEDFE",
  },
];

export default function HomeFeatureCards() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginBottom: "48px" }}>
      {FEATURE_CARDS.map((card) => (
        <Link
          key={card.href}
          href={card.href}
          style={{
            display: "block",
            borderRadius: "12px",
            border: `1.5px solid ${card.accent}22`,
            padding: "28px 24px",
            textDecoration: "none",
            transition: "border-color 150ms",
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = card.accent}
          onMouseLeave={e => e.currentTarget.style.borderColor = `${card.accent}22`}
        >
          <div style={{
            display: "inline-block",
            background: card.bg,
            color: card.accent,
            fontSize: "11px",
            fontWeight: "700",
            borderRadius: "20px",
            padding: "3px 12px",
            marginBottom: "14px",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}>
            {card.label}
          </div>
          <p style={{ fontSize: "14px", lineHeight: "1.65", margin: "0 0 16px" }}>
            {card.desc}
          </p>
          <span style={{ fontSize: "13px", fontWeight: "600", color: card.accent }}>
            Explore feature →
          </span>
        </Link>
      ))}
    </div>
  );
}
