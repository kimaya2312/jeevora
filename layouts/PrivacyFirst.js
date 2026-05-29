import Cta from "@layouts/components/Cta";
import Link from "next/link";
import FeaturePanel, { MockupPrivacy } from "@layouts/components/FeaturePanel";

const PRIVACY_INTRO = "Privacy isn't a company promise here — it's a verifiable, auditable record. Built by a founder with a background in IT, cybersecurity, and NHS volunteering.";

const PRIVACY_ITEMS = [
  { title: "Privacy-first architecture", preview: "Security principles applied at every layer — not bolted on afterwards", body: "Security is not an afterthought. The platform is built with cybersecurity and privacy principles at every layer from the ground up — designed by a founder with a background in IT, cybersecurity, privacy-first design, and NHS volunteering." },
  { title: "Encrypted cloud storage", preview: "Health data encrypted in the cloud — not on a blockchain, not sold, not shared", body: "Your health data is stored encrypted in the cloud — not on a blockchain. It is never sold, never shared without your explicit consent, and never interferes with NHS systems. Accessible across devices while keeping your information protected at all times." },
  { title: "Immutable permission ledger", preview: "Every consent decision recorded — what was authorised, when, and by whom", body: "A separate immutable permission ledger records every consent decision — what was authorised, when, and by whom. The ledger tracks consent and permissions only, never your medical records. You get verifiable proof of exactly what you authorised. No trust required — just proof." },
  { title: "Data you control", preview: "Export, delete, or adjust consent permissions at any time — verifiably", body: "Export your data, delete your account, or adjust your consent permissions at any time. Every permission you grant or revoke is logged immutably — so control isn't just a setting, it's a verifiable record. You stay in control, always." },
  { title: "No NHS interference, no data selling", preview: "Works independently of NHS — your data is never sold or shared without consent", body: "Jeevora Care helps patients track symptoms and prepare for GP appointments — without interfering with NHS systems. Your health data is never sold. Every action taken with your data happens only with your explicit consent, and is recorded in the immutable ledger." },
  { title: "Verify it yourself", preview: "See exactly what you authorised, with whom, and when — always auditable", body: "You can see exactly what you authorised, with whom, and when — and verify it yourself. Privacy isn't a setting here; it's a verifiable, auditable record you own. Designed for people who want proof, not promises." },
];

const commitments = [
  {
    icon: "🔐",
    title: "Encrypted at rest",
    description:
      "All your health data is encrypted in the cloud using industry-standard AES-256 encryption. No one can read your data — not even us.",
    accent: "#2563EB",
    bg: "#EFF6FF",
  },
  {
    icon: "🚫",
    title: "Never sold, never shared",
    description:
      "Your data is never sold to advertisers, insurers, or third parties. Jeevora Care makes no money from your health information — only from your subscription.",
    accent: "#DC2626",
    bg: "#FFF5F5",
  },
  {
    icon: "✋",
    title: "Explicit consent only",
    description:
      "Every data-sharing action requires your explicit permission. Jeevora Care never shares anything — even with your GP — without you actively choosing to.",
    accent: "#1D9E75",
    bg: "#ECFDF5",
  },
  {
    icon: "🗂️",
    title: "You own your data",
    description:
      "Export, delete, or revoke access to your data at any time. Your health story belongs to you — and leaves with you if you ever choose to go.",
    accent: "#7C3AED",
    bg: "#F5F3FF",
  },
  {
    icon: "🇬🇧",
    title: "UK-based storage",
    description:
      "Your data is stored within the UK, subject to UK data protection law. We comply fully with UK GDPR and the Data Protection Act 2018.",
    accent: "#D97706",
    bg: "#FFFBEB",
  },
  {
    icon: "🔍",
    title: "No diagnostic use",
    description:
      "Jeevora Care never uses your data to make or suggest diagnoses, either to you or to third parties. Your data is for you — not for algorithms to act on.",
    accent: "#0891B2",
    bg: "#F0FDFF",
  },
];

const blockchainPoints = [
  "Every permission you grant is cryptographically signed and timestamped",
  "Revocations are equally recorded — there is no way to hide a change of consent",
  "You can view a complete, unalterable audit trail of every authorisation at any time",
  "The blockchain records consent decisions only — your health data stays in encrypted cloud storage",
];

const rights = [
  { icon: "👁️", label: "Right to access", desc: "See all data Jeevora Care holds about you, at any time." },
  { icon: "✏️", label: "Right to correct", desc: "Correct any inaccurate health log or personal information." },
  { icon: "🗑️", label: "Right to delete", desc: "Request permanent deletion of your account and all associated data." },
  { icon: "📦", label: "Right to portability", desc: "Export your full health history in a standard format to use elsewhere." },
  { icon: "⛔", label: "Right to restrict", desc: "Limit how your data is processed without deleting it entirely." },
  { icon: "📢", label: "Right to object", desc: "Object to any specific processing you haven't explicitly authorised." },
];

const PrivacyFirst = ({ data }) => {
  return (
    <>
      {/* ── Hero ── */}
      <section className="section pb-[50px]">
        <div className="container">
          <div className="row text-center">
            <div className="mx-auto lg:col-9">
              <span
                style={{
                  display: "inline-block",
                  background: "#EFF6FF",
                  color: "#2563EB",
                  fontSize: "13px",
                  fontWeight: "700",
                  borderRadius: "20px",
                  padding: "4px 16px",
                  marginBottom: "20px",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Privacy
              </span>
              <h1 className="font-primary font-bold mb-4">
                Privacy First — Not as a Feature, as a Foundation
              </h1>
              <p className="mt-4 text-lg mx-auto max-w-2xl">
                Your health data is the most personal information you have.
                Jeevora Care was designed from day one with one non-negotiable
                principle: your data belongs to you, and only to you.
              </p>
            </div>
          </div>

          {/* Highlight banner */}
          <div
            className="mt-12 mx-auto max-w-2xl rounded-xl px-8 py-8 text-center"
            style={{ background: "#0F172A", color: "#fff" }}
          >
            <p style={{ fontSize: "20px", fontWeight: "700", lineHeight: "1.5" }}>
              "Most health apps collect your data. Jeevora Care is built so
              that your data works for{" "}
              <span style={{ color: "#60A5FA" }}>you</span> — and no one else."
            </p>
          </div>
        </div>
      </section>

      {/* ── Blockchain consent ── */}
      <section className="section">
        <div className="container">
          <div className="row items-center gy-8">
            <div className="md:col-6">
              <span
                style={{
                  display: "inline-block",
                  background: "#ECFDF5",
                  color: "#1D9E75",
                  fontSize: "12px",
                  fontWeight: "700",
                  borderRadius: "20px",
                  padding: "4px 14px",
                  marginBottom: "16px",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Unique to Jeevora Care
              </span>
              <h2 className="font-bold mb-4">
                Blockchain-Backed Consent — Immutable by Design
              </h2>
              <p className="mb-6">
                Most apps store consent in a database that can be silently
                edited. Jeevora Care records every consent decision on an
                immutable blockchain — creating a cryptographic proof that
                cannot be altered, hidden, or deleted.
              </p>
              <ul className="space-y-4">
                {blockchainPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      style={{
                        color: "#1D9E75",
                        fontWeight: "700",
                        marginTop: "2px",
                      }}
                    >
                      ✓
                    </span>
                    <span className="text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-6">
              {/* Consent log mockup */}
              <div
                className="rounded-xl overflow-hidden shadow-lg"
                style={{ border: "1px solid #DBEAFE" }}
              >
                <div
                  style={{
                    background: "#0F172A",
                    padding: "14px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span style={{ color: "#1D9E75", fontSize: "16px" }}>⛓️</span>
                  <span style={{ color: "#fff", fontWeight: "700", fontSize: "14px" }}>
                    Consent Audit Log
                  </span>
                  <span style={{ color: "#64748B", fontSize: "12px", marginLeft: "auto" }}>
                    Immutable record
                  </span>
                </div>
                <div style={{ padding: "16px", background: "#fff", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    {
                      action: "GP Report Shared",
                      detail: "Shared with Dr. Smith — 1 use, expires 24h",
                      time: "25 May 2026, 09:14",
                      color: "#1D9E75",
                    },
                    {
                      action: "Permission Revoked",
                      detail: "Removed access for Dr. Smith",
                      time: "26 May 2026, 16:30",
                      color: "#DC2626",
                    },
                    {
                      action: "Export Downloaded",
                      detail: "Full health data — by you",
                      time: "27 May 2026, 11:02",
                      color: "#2563EB",
                    },
                  ].map((entry, i) => (
                    <div
                      key={i}
                      style={{
                        borderLeft: `3px solid ${entry.color}`,
                        paddingLeft: "14px",
                        paddingTop: "6px",
                        paddingBottom: "6px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: "700",
                          color: "#0F172A",
                        }}
                      >
                        {entry.action}
                      </div>
                      <div style={{ fontSize: "12px", color: "#64748B", margin: "2px 0" }}>
                        {entry.detail}
                      </div>
                      <div style={{ fontSize: "11px", color: "#94A3B8" }}>
                        {entry.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our commitments ── */}
      <section className="section bg-theme-light">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="font-bold mb-4">Our Six Privacy Commitments</h2>
            <p className="mx-auto max-w-xl">
              These aren't aspirations — they are hard boundaries built into
              how Jeevora Care works at every level.
            </p>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {commitments.map((item, i) => (
              <div
                key={i}
                className="rounded-xl bg-white p-6 pb-8"
                style={{ border: "1px solid #DBEAFE" }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "14px",
                    background: item.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    marginBottom: "16px",
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  className="h6 mb-3"
                  style={{ color: "#0F172A", fontWeight: "700" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Your rights ── */}
      <section className="section" style={{ background: "#F8FAFC" }}>
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="font-bold mb-4">Your Data Rights</h2>
            <p className="mx-auto max-w-xl">
              Under UK GDPR, you have six fundamental rights over your personal
              data. Jeevora Care makes all of them easy to exercise — directly
              from within the app.
            </p>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {rights.map((right, i) => (
              <div
                key={i}
                className="rounded-xl bg-white p-6 flex gap-4 items-start"
                style={{ border: "1px solid #DBEAFE" }}
              >
                <span style={{ fontSize: "24px", marginTop: "2px" }}>{right.icon}</span>
                <div>
                  <h3
                    className="h6 mb-1"
                    style={{ color: "#0F172A", fontWeight: "700" }}
                  >
                    {right.label}
                  </h3>
                  <p className="text-sm leading-relaxed">{right.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── No NHS interference ── */}
      <section className="section pb-0">
        <div className="container">
          <div className="row gy-6">
            <div className="md:col-6">
              <div
                className="rounded-xl p-8 h-full"
                style={{ background: "#EFF6FF", border: "1px solid #DBEAFE" }}
              >
                <h3 className="h5 font-bold mb-4" style={{ color: "#0F172A" }}>
                  🏥 No interference with NHS systems
                </h3>
                <p>
                  Jeevora Care does not connect to, modify, or interact with
                  any NHS records or systems. It is a personal health logging
                  tool — entirely separate from your NHS patient record. Your
                  GP's system and Jeevora Care never speak to each other.
                </p>
              </div>
            </div>
            <div className="md:col-6">
              <div
                className="rounded-xl p-8 h-full"
                style={{ background: "#ECFDF5", border: "1px solid #A7F3D0" }}
              >
                <h3 className="h5 font-bold mb-4" style={{ color: "#0F172A" }}>
                  🔒 Data stays encrypted — even from us
                </h3>
                <p>
                  Your health data is encrypted with keys that only you control.
                  Jeevora Care cannot read the content of your health logs —
                  only you can decrypt and access them. This isn't a policy.
                  It's an architectural guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature details ── */}
      <section className="section">
        <div className="container">
          <div className="mb-10 text-center">
            <h2 className="font-bold mb-3">Features in Detail</h2>
            <p className="mx-auto max-w-xl">
              Explore every capability — tap any feature to see the full description.
            </p>
          </div>
          <FeaturePanel
            intro={PRIVACY_INTRO}
            items={PRIVACY_ITEMS}
            accent="#534AB7"
            bg="#EEEDFE"
            MockupComponent={MockupPrivacy}
          />
        </div>
      </section>

      {/* ── CTA ── */}
      <Cta activeFeature="Privacy first" />
    </>
  );
};

export default PrivacyFirst;
