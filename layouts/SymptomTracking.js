"use client";
import Cta from "@layouts/components/Cta";
import FeaturePanel, { MockupSymptom } from "@layouts/components/FeaturePanel";

// ─── Extra mockup screens ──────────────────────────────────────────────────

function MockupTimeline({ accent }) {
  const entries = [
    { tag: "🤕", symptom: "Headache", when: "Today · 9:30am", severity: 6 },
    { tag: "😴", symptom: "Fatigue", when: "Yesterday · 3pm", severity: 7 },
    { tag: "😟", symptom: "Nausea", when: "20 May · 11am", severity: 4 },
    { tag: "⚡", symptom: "Pelvic pain", when: "19 May · 8pm", severity: 5 },
    { tag: "🫁", symptom: "Bloating", when: "18 May · 2pm", severity: 3 },
  ];
  const sevColor = (s) => s >= 7 ? "#DC2626" : s >= 5 ? "#D97706" : "#1D9E75";
  return (
    <div style={{ padding: "14px", fontSize: "12px", color: "var(--mockup-text, #0F172A)", lineHeight: 1.5 }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "14px" }}>
        <span style={{ fontWeight: "700", fontSize: "13px" }}>Symptom history</span>
        <span style={{ marginLeft: "auto", fontSize: "11px", color: accent, fontWeight: "600" }}>Last 7 days</span>
      </div>
      {entries.map((e, i) => (
        <div key={i} style={{
          display: "flex", alignItems: "center", gap: "10px",
          padding: "9px 0", borderBottom: i < entries.length - 1 ? "1px solid var(--mockup-border, #E2E8F0)" : "none",
        }}>
          <span style={{ fontSize: "16px" }}>{e.tag}</span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: "600", fontSize: "12px" }}>{e.symptom}</div>
            <div style={{ fontSize: "10px", color: "var(--mockup-muted, #64748B)" }}>{e.when}</div>
          </div>
          <span style={{
            fontSize: "11px", fontWeight: "700", color: sevColor(e.severity),
            background: `${sevColor(e.severity)}18`, borderRadius: "6px", padding: "2px 8px",
          }}>{e.severity}/10</span>
        </div>
      ))}
      <div style={{
        marginTop: "12px", background: accent, color: "#fff",
        borderRadius: "8px", padding: "9px", textAlign: "center", fontWeight: "600", fontSize: "11px",
      }}>+ Log a symptom</div>
    </div>
  );
}

function MockupCycle({ accent, bg }) {
  const days = [15,16,17,18,19,20,21];
  const today = 19;
  const symptoms = ["Cramping", "Bloating", "Fatigue", "Nausea"];
  const selected = ["Cramping", "Bloating"];
  const chipStyle = (active) => ({
    display: "inline-block", padding: "5px 11px", borderRadius: "20px",
    fontSize: "11px", fontWeight: active ? "700" : "500",
    background: active ? accent : "var(--mockup-chip-bg, #F1F5F9)",
    color: active ? "#fff" : "var(--mockup-chip-text, #475569)",
    border: active ? "none" : "1px solid var(--mockup-border, #E2E8F0)", cursor: "default",
  });
  return (
    <div style={{ padding: "14px", fontSize: "12px", color: "var(--mockup-text, #0F172A)", lineHeight: 1.5 }}>
      <div style={{ fontWeight: "700", fontSize: "13px", marginBottom: "12px" }}>Cycle tracking</div>
      {/* Week strip */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px" }}>
        {days.map((d) => (
          <div key={d} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "9px", color: "var(--mockup-muted, #64748B)", marginBottom: "4px" }}>
              {["M","T","W","T","F","S","S"][days.indexOf(d)]}
            </div>
            <div style={{
              width: "26px", height: "26px", borderRadius: "50%", display: "flex",
              alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600",
              background: d === today ? accent : "transparent",
              color: d === today ? "#fff" : "var(--mockup-text, #0F172A)",
              border: d === today ? "none" : "1px solid var(--mockup-border, #E2E8F0)",
            }}>{d}</div>
          </div>
        ))}
      </div>
      {/* Flow */}
      <div style={{ marginBottom: "12px" }}>
        <div style={{ fontWeight: "600", marginBottom: "6px" }}>Flow today</div>
        <div style={{ display: "flex", gap: "6px" }}>
          {["Light","Medium","Heavy"].map((f) => (
            <span key={f} style={chipStyle(f === "Medium")}>{f}</span>
          ))}
        </div>
      </div>
      {/* Symptoms */}
      <div style={{ marginBottom: "14px" }}>
        <div style={{ fontWeight: "600", marginBottom: "6px" }}>Symptoms</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
          {symptoms.map((s) => <span key={s} style={chipStyle(selected.includes(s))}>{s}</span>)}
        </div>
      </div>
      <div style={{ fontWeight: "600", marginBottom: "6px" }}>Mood</div>
      <div style={{ display: "flex", gap: "8px" }}>
        {["😊","😐","😔","😤"].map((m, i) => (
          <span key={i} style={{
            fontSize: "18px", padding: "4px", borderRadius: "8px",
            background: i === 1 ? bg : "transparent",
            border: i === 1 ? `1.5px solid ${accent}` : "1.5px solid transparent",
            cursor: "default",
          }}>{m}</span>
        ))}
      </div>
    </div>
  );
}

function MockupMedication({ accent, bg }) {
  const meds = [
    { name: "Sumatriptan 50mg", time: "8:45am", taken: true },
    { name: "Iron supplement", time: "9:00am", taken: true },
    { name: "Ibuprofen 400mg", time: "1:00pm", taken: false, missed: true },
    { name: "Magnesium 400mg", time: "9:00pm", taken: false },
  ];
  return (
    <div style={{ padding: "14px", fontSize: "12px", color: "var(--mockup-text, #0F172A)", lineHeight: 1.5 }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "14px" }}>
        <span style={{ fontWeight: "700", fontSize: "13px" }}>Medications today</span>
        <span style={{ marginLeft: "auto", fontSize: "10px", color: "var(--mockup-muted, #64748B)" }}>Thu, 22 May</span>
      </div>
      {meds.map((m, i) => (
        <div key={i} style={{
          display: "flex", alignItems: "center", gap: "10px",
          padding: "9px 10px", borderRadius: "8px", marginBottom: "6px",
          background: m.missed ? "#FFF1F1" : "var(--mockup-chip-bg, #F8FAFC)",
          border: `1px solid ${m.missed ? "#FECACA" : "var(--mockup-border, #E2E8F0)"}`,
        }}>
          <span style={{ fontSize: "16px" }}>{m.taken ? "✅" : m.missed ? "⚠️" : "⏳"}</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: "600", fontSize: "11px" }}>{m.name}</div>
            <div style={{ fontSize: "10px", color: "var(--mockup-muted, #64748B)" }}>{m.time}</div>
          </div>
          <span style={{
            fontSize: "10px", fontWeight: "700", padding: "2px 7px", borderRadius: "5px",
            background: m.taken ? "#D1FAE5" : m.missed ? "#FEE2E2" : "var(--mockup-chip-bg, #F1F5F9)",
            color: m.taken ? "#065F46" : m.missed ? "#B91C1C" : "var(--mockup-muted, #64748B)",
          }}>{m.taken ? "Taken" : m.missed ? "Missed" : "Due"}</span>
        </div>
      ))}
      <div style={{
        marginTop: "8px", padding: "8px 10px", borderRadius: "8px",
        background: "#FEF9C3", border: "1px solid #FDE68A", fontSize: "10px", color: "#92400E",
      }}>
        ⚠️ Missed dose noted — will appear in your next GP report
      </div>
    </div>
  );
}

const SYMPTOM_INTRO = "Log what's happening day by day — with the detail your GP actually needs. From quick voice notes to structured clinical logging, nothing slips through.";

const SYMPTOM_ITEMS = [
  {
    title: "Quick, friction-free logging",
    preview: "Log from the home screen in under 10 seconds — no lengthy forms, no friction",
    body: "Jeevora Care is built for real life. Tap to log a symptom the moment it happens — no lengthy forms, no friction. Quick-tap selectors cover common symptoms; an adjustable severity slider (1–10) and optional free-text notes capture the detail. Timeline, frequency, and duration build up automatically over time, so every log adds to a picture your GP can actually use.",
  },
  {
    title: "SOCRATES-guided & voice logging",
    preview: "Clinical framework with chip selectors — or just speak and watch fields auto-fill",
    body: "Jeevora Care guides you through the clinical SOCRATES framework — onset, character, severity, radiation, timing, and more — using chip selectors that make it fast. Prefer to speak? Tap record, describe your symptom naturally, and watch the fields populate in real time. Whether you type, tap, or talk, nothing gets lost on the way to your GP report.",
  },
  {
    title: "Severity, frequency & duration",
    preview: "Rate 1–10 every time you log — patterns that feel random reveal a clear rhythm",
    body: "Rate each symptom on a 1–10 scale and record how often it occurs and how long it lasts. Patterns that feel random often reveal a clear rhythm over time — a headache every Tuesday, bloating that lasts half a day, fatigue that builds across a week. Severity trends emerge over days and weeks, giving your GP a picture that no single appointment could ever capture.",
  },
  {
    title: "Interconnected & overlapping symptoms",
    preview: "Each symptom logged independently — correlations flagged across categories",
    body: "Jeevora Care logs each symptom independently and flags patterns across categories — fatigue that tracks with poor sleep, headaches that follow certain meals, mood shifts that correlate with medication changes. The connections that feel invisible in a 10-minute appointment become clear when symptoms are tracked together over time. You arrive with a separated, structured picture — not a vague sense something is wrong.",
  },
  {
    title: "Medication tracking & connections",
    preview: "Dosages, side effects, missed doses — plus symptoms linked to every change",
    body: "Track medications, dosages, side effects, and changes over time. Green ticks confirm what's taken; amber alerts flag anything missed. Note symptoms alongside medication changes to identify side effects or improvements — then share that full timeline with your GP. Whether you started a new prescription or adjusted a dose, the symptom record around it gives your doctor the context to act. Missed doses are automatically noted in your next GP report.",
  },
  {
    title: "Menstrual & cycle tracking",
    preview: "Period days, flow, physical symptoms and mood — all captured, ready for your appointment",
    body: "Log period days, flow, and physical symptoms — cramping, bloating, headaches, back pain, fatigue, nausea, breast tenderness — and mood with a single tap. Everything from cycle day one to associated symptoms is captured and ready for your appointment. No more trying to recall dates or patterns in the room; your cycle history is already there.",
  },
  {
    title: "Custom tags, context & notes",
    preview: "Your own symptom categories, plus free-text notes on any entry",
    body: "Create your own symptom categories — brain fog, joint stiffness, nausea after meals — and log it exactly as you experience it. Nothing gets forced into the wrong box. Add free-text context notes to any entry: what triggered it, where you were, what made it better or worse. Custom tags and context notes are included in your GP report, so nothing important is lost between your phone and the appointment room.",
  },
];

const trackingFeatures = [
  {
    icon: "📊",
    title: "Severity Scoring",
    description:
      "Rate each symptom on a 1–10 scale every time you log it. Watch severity trends emerge over days and weeks — not just in one moment.",
    accent: "#2563EB",
    bg: "#EFF6FF",
  },
  {
    icon: "📅",
    title: "Frequency & Duration",
    description:
      "Record how often symptoms occur and how long they last. Patterns that feel random often reveal a clear rhythm over time.",
    accent: "#1D9E75",
    bg: "#ECFDF5",
  },
  {
    icon: "🔗",
    title: "Interconnected Symptoms",
    description:
      "Log multiple overlapping symptoms and let Jeevora Care surface correlations — fatigue that tracks with sleep, headaches that follow certain meals.",
    accent: "#7C3AED",
    bg: "#F5F3FF",
  },
  {
    icon: "💊",
    title: "Medication Connections",
    description:
      "Note symptoms alongside medication changes to identify side effects or improvements — then share that timeline with your GP.",
    accent: "#DC2626",
    bg: "#FFF5F5",
  },
  {
    icon: "🏷️",
    title: "Custom Symptom Tags",
    description:
      "Create your own symptom categories. Whether it's brain fog, joint stiffness, or nausea after meals — log it exactly as you experience it.",
    accent: "#D97706",
    bg: "#FFFBEB",
  },
  {
    icon: "📝",
    title: "Context Notes",
    description:
      "Add free-text notes to any log entry. Capture the nuance a number can't — what triggered it, where you were, what made it better.",
    accent: "#0891B2",
    bg: "#F0FDFF",
  },
];

const problemStats = [
  { value: "7.1M", label: "People on the NHS England waiting list" },
  { value: "10 min", label: "Average GP appointment length" },
  { value: "60%", label: "Patients forget key symptoms during appointments" },
];

const whyItMatters = [
  {
    icon: "🧩",
    heading: "Symptoms don't exist in isolation",
    text: "Fatigue, mood changes, pain, and sleep disruption are often connected. Tracking them together reveals a picture no single symptom can show.",
  },
  {
    icon: "⏱️",
    heading: "Memory fails under pressure",
    text: "In a 10-minute appointment you're expected to recall weeks of symptoms accurately. Jeevora Care removes that burden entirely.",
  },
  {
    icon: "📉",
    heading: "Trends matter more than moments",
    text: "A headache once is noise. A headache every Tuesday after lunch is a signal. Tracking over time is what turns data into insight.",
  },
];

const SymptomTracking = ({ data }) => {
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
                Symptom Tracking That Tells the Whole Story
              </h1>
              <p className="mt-4 text-lg mx-auto max-w-2xl">
                Log your symptoms in seconds — and let Jeevora Care connect the
                dots. Track severity, frequency, patterns, and how your symptoms
                relate to each other over time.
              </p>
            </div>
          </div>

          <div className="mt-14">
            <FeaturePanel
              intro={SYMPTOM_INTRO}
              items={SYMPTOM_ITEMS}
              accent="#3B6D11"
              bg="#EAF3DE"
              MockupComponents={[MockupSymptom, MockupTimeline, MockupCycle, MockupMedication]}
            />
          </div>
        </div>
      </section>

      {/* ── Why it matters ── */}
      <section className="section bg-theme-light">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="font-bold mb-4">Why Symptom Tracking Changes Everything</h2>
            <p className="mx-auto max-w-xl">
              The problem isn't that your GP doesn't care — it's that they don't
              have the data. Jeevora Care fixes that.
            </p>
          </div>
          <div className="row gy-6 justify-center">
            {whyItMatters.map((item, i) => (
              <div key={i} className="lg:col-4 md:col-6">
                <div
                  className="rounded-xl bg-white p-8 text-center h-full"
                  style={{ border: "1px solid #DBEAFE" }}
                >
                  <div style={{ fontSize: "40px", marginBottom: "16px" }}>
                    {item.icon}
                  </div>
                  <h3
                    className="h6 mb-3"
                    style={{ color: "#0F172A", fontWeight: "700" }}
                  >
                    {item.heading}
                  </h3>
                  <p className="text-sm leading-relaxed">{item.text}</p>
                </div>
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
              Your symptom data is yours — always.
            </h3>
            <p className="mx-auto max-w-lg">
              Every log entry is stored encrypted. You control who sees your
              data and when. Jeevora Care never shares it without your explicit
              consent.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <Cta activeFeature="Symptom tracking" />
    </>
  );
};

export default SymptomTracking;
