import Cta from "@layouts/components/Cta";
import FeaturePanel, { MockupGpReport } from "@layouts/components/FeaturePanel";

const GP_INTRO = "Every log you make feeds into a clear, structured summary your doctor can read in under two minutes — compiled automatically, before you even think to ask.";

const GP_ITEMS = [
  { title: "Auto-generated GP summary", preview: "Structured, non-diagnostic — formatted for your doctor to read in two minutes", body: "Jeevora Care automatically turns your logs into a clear, structured, non-diagnostic summary — symptoms, medications, lifestyle patterns, missed doses — formatted so your GP can take in the full picture in under two minutes. No jargon. No diagnosis. Just context." },
  { title: "Symptom timeline & pattern table", preview: "Frequency, duration, and severity across all tracked days — at a glance", body: "A structured table inside your report shows each symptom's frequency, duration, and severity — e.g. pelvic discomfort on 17 of 48 days, severity 3–6/10. Your GP sees not just that you had a symptom, but how often, for how long, and how bad it got. Symptom timelines and better/worse factors are included too." },
  { title: "Pattern recognition over time", preview: "Trends in severity and frequency a single appointment could never reveal", body: "Jeevora Care connects your data over time, identifying trends in severity, frequency, and duration that a single 10-minute appointment could never surface. Patterns like 3 nights under 6h sleep or bloating increasing in the past 3 weeks are flagged automatically." },
  { title: "Appointment prep", preview: "Your questions and key concerns, surfaced before you walk in", body: "Note your questions and key concerns before you walk in. Jeevora Care surfaces the most important things to raise — so nothing gets lost in a 10-minute appointment. You know what it feels like to sit down with a doctor and forget half of what you meant to say. This fixes that." },
  { title: "Linked records & PDF export", preview: "Attach receipts, blood tests, and prior records — download as a shareable PDF", body: "Attach pharmacy receipts, blood test results, and prior symptom summaries directly to your report. Download the full GP report as a PDF, ready to share with your doctor or upload to a patient portal. Everything your GP needs is in one place — not scattered across your phone." },
  { title: "Missed dose & red flag alerts", preview: "Forgotten doses auto-noted in report — flagged patterns surface automatically", body: "Missed medications are automatically noted in your next GP report — your doctor can see the full picture, including gaps. Patterns like several nights of disrupted sleep or reduced activity on heavier symptom days are flagged in the report without requiring any manual review from you." },
];

const reportSections = [
  {
    icon: "🩺",
    title: "Symptom Timeline",
    description:
      "A chronological record of every symptom you logged — with severity scores, frequency, and how each one changed over time.",
    accent: "#2563EB",
    bg: "#EFF6FF",
  },
  {
    icon: "💊",
    title: "Medication Notes",
    description:
      "Every medication entry, dosage change, missed dose, or side effect — presented clearly so your GP has the full picture at a glance.",
    accent: "#1D9E75",
    bg: "#ECFDF5",
  },
  {
    icon: "🛏️",
    title: "Lifestyle Summary",
    description:
      "Sleep patterns, mood trends, exercise logs, and dietary notes — so your GP can see how your daily habits connect to your symptoms.",
    accent: "#7C3AED",
    bg: "#F5F3FF",
  },
  {
    icon: "❓",
    title: "Your Questions",
    description:
      "The concerns and questions you flagged ahead of the appointment — so nothing gets forgotten in the moment.",
    accent: "#DC2626",
    bg: "#FFF5F5",
  },
  {
    icon: "📈",
    title: "Trend Analysis",
    description:
      "Pattern highlights showing which symptoms worsened, improved, or correlate with each other — in plain language.",
    accent: "#D97706",
    bg: "#FFFBEB",
  },
  {
    icon: "📅",
    title: "Appointment History",
    description:
      "A summary of past GP visits, what was discussed, and any follow-up actions — giving continuity across multiple appointments.",
    accent: "#0891B2",
    bg: "#F0FDFF",
  },
];

const benefits = [
  {
    side: "For You",
    icon: "🙋",
    accent: "#2563EB",
    points: [
      "Stop forgetting half of what you meant to say",
      "Walk in with confidence — your health story is ready",
      "Spend your 10 minutes being heard, not remembering",
      "Get more out of every appointment",
    ],
  },
  {
    side: "For Your GP",
    icon: "👩‍⚕️",
    accent: "#1D9E75",
    points: [
      "Structured information instead of verbal summaries",
      "Symptom patterns that a single visit never reveals",
      "A timeline that connects dots across weeks or months",
      "More time for clinical decisions, less for note-taking",
    ],
  },
];

const steps = [
  {
    number: "01",
    icon: "📋",
    title: "Log as you go",
    desc: "Record symptoms, medications, and lifestyle notes in seconds — whenever something happens, not just before your appointment.",
  },
  {
    number: "02",
    icon: "🔗",
    title: "Patterns emerge",
    desc: "Jeevora Care connects your data over time, surfacing trends in severity, frequency, and duration automatically.",
  },
  {
    number: "03",
    icon: "📄",
    title: "Report is ready",
    desc: "A clear, structured GP-ready report generates automatically before your appointment — no extra effort needed.",
  },
];

const GpReport = ({ data }) => {
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
                Feature
              </span>
              <h1 className="font-primary font-bold mb-4">
                Your GP-Ready Report, Generated Automatically
              </h1>
              <p className="mt-4 text-lg mx-auto max-w-2xl">
                Walk into every appointment prepared. Jeevora Care turns your
                daily logs into a structured, clear report your GP can actually
                use — so your 10 minutes count.
              </p>
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
            intro={GP_INTRO}
            items={GP_ITEMS}
            accent="#185FA5"
            bg="#E6F1FB"
            MockupComponent={MockupGpReport}
          />
        </div>
      </section>


      {/* ── Benefits ── */}
      <section className="section">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="font-bold mb-4">Better for You. Better for Your GP.</h2>
            <p className="mx-auto max-w-xl">
              The report doesn't just help you remember — it changes the quality
              of the conversation you can have.
            </p>
          </div>
          <div className="row gy-6">
            {benefits.map((b, i) => (
              <div key={i} className="md:col-6">
                <div
                  className="rounded-xl p-8 h-full"
                  style={{
                    border: `2px solid ${b.accent}`,
                    background: "#fff",
                  }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span style={{ fontSize: "28px" }}>{b.icon}</span>
                    <h3
                      className="h5 m-0"
                      style={{ color: b.accent, fontWeight: "700" }}
                    >
                      {b.side}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {b.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span
                          style={{
                            marginTop: "2px",
                            color: b.accent,
                            fontWeight: "700",
                          }}
                        >
                          ✓
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="section" style={{ background: "#F8FAFC" }}>
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="font-bold mb-4">How Your Report is Built</h2>
            <p className="mx-auto max-w-xl">
              No extra steps. Log your health naturally and Jeevora Care does
              the rest.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            {steps.map((step, i) => (
              <div
                key={i}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "16px",
                  padding: "32px 28px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "24px",
                    fontSize: "11px",
                    fontWeight: "700",
                    color: "#1D9E75",
                    background: "#ecfdf5",
                    borderRadius: "20px",
                    padding: "2px 10px",
                    letterSpacing: "0.05em",
                  }}
                >
                  {step.number}
                </div>
                <div style={{ fontSize: "32px", marginBottom: "16px" }}>{step.icon}</div>
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#0f172a", marginBottom: "10px" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Privacy note ── */}
      <section className="section pb-0">
        <div className="container">
          <div
            className="rounded-xl px-8 py-10 text-center"
            style={{ background: "#EFF6FF", border: "1px solid #DBEAFE" }}
          >
            <span style={{ fontSize: "32px" }}>🔒</span>
            <h3 className="h5 mt-4 mb-3 font-bold" style={{ color: "#0F172A" }}>
              Your report. Your control.
            </h3>
            <p className="mx-auto max-w-lg">
              Your GP-ready report is yours alone. You choose when to share it,
              how to share it, and with whom. Jeevora Care never shares your
              data without your explicit permission.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <Cta activeFeature="GP ready report" />
    </>
  );
};

export default GpReport;
