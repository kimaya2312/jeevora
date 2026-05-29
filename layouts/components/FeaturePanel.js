"use client";

import { useState } from "react";

// ─── CSS (scoped via class) ────────────────────────────────────────────────

const PANEL_CSS = `
.fp-wrap {
  --accordion-border: #E2E8F0;
  --accordion-bg: #FFFFFF;
  --accordion-title: #0F172A;
  --accordion-preview: #64748B;
  --accordion-body: #475569;
  --accordion-chevron: #94A3B8;
  --phone-border: #CBD5E1;
  --phone-bg: #FFFFFF;
  --phone-statusbar: #F8FAFC;
  --mockup-text: #0F172A;
  --mockup-muted: #64748B;
  --mockup-border: #E2E8F0;
  --mockup-chip-bg: #F1F5F9;
  --mockup-chip-text: #475569;
  --mockup-track: #E2E8F0;
}
@media (prefers-color-scheme: dark) {
  .fp-wrap {
    --accordion-border: #334155;
    --accordion-bg: #1E293B;
    --accordion-title: #F1F5F9;
    --accordion-preview: #94A3B8;
    --accordion-body: #CBD5E1;
    --accordion-chevron: #64748B;
    --phone-border: #475569;
    --phone-bg: #1E293B;
    --phone-statusbar: #0F172A;
    --mockup-text: #F1F5F9;
    --mockup-muted: #94A3B8;
    --mockup-border: #334155;
    --mockup-chip-bg: #0F172A;
    --mockup-chip-text: #CBD5E1;
    --mockup-track: #334155;
  }
}
.fp-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;
}
@media (min-width: 900px) {
  .fp-grid {
    grid-template-columns: 55fr 45fr;
  }
}
.fp-mockup-col {
  display: flex;
  justify-content: center;
}
@media (max-width: 899px) {
  .fp-mockup-col { order: -1; }
}
`;

// ─── Accordion item ────────────────────────────────────────────────────────

function AccordionItem({ item, isOpen, onClick, accent, bg }) {
  return (
    <div style={{
      border: "1px solid var(--accordion-border, #E2E8F0)",
      borderRadius: "10px",
      overflow: "hidden",
      background: "var(--accordion-bg, #FFFFFF)",
    }}>
      <button
        aria-expanded={isOpen}
        onClick={onClick}
        style={{
          width: "100%",
          padding: "14px 16px",
          display: "flex",
          alignItems: "flex-start",
          gap: "12px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <div style={{
          flexShrink: 0,
          width: "36px",
          height: "36px",
          borderRadius: "8px",
          background: bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: accent, opacity: 0.7 }} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: "600", fontSize: "14px", color: "var(--accordion-title, #0F172A)", marginBottom: "2px" }}>
            {item.title}
          </div>
          {!isOpen && (
            <div style={{
              fontSize: "12px",
              color: "var(--accordion-preview, #64748B)",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}>
              {item.preview}
            </div>
          )}
        </div>
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="var(--accordion-chevron,#94A3B8)" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          style={{
            flexShrink: 0, marginTop: "2px",
            transition: "transform 200ms",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div style={{ maxHeight: isOpen ? "220px" : "0", overflow: "hidden", transition: "max-height 200ms ease" }}>
        <div style={{ padding: "0 16px 16px 64px", fontSize: "13px", color: "var(--accordion-body, #475569)", lineHeight: "1.65" }}>
          {item.body}
        </div>
      </div>
    </div>
  );
}

// ─── Phone frame ───────────────────────────────────────────────────────────

function PhoneFrame({ accent, children }) {
  return (
    <div
      aria-hidden="true"
      style={{
        width: "280px",
        margin: "0 auto",
        borderRadius: "32px",
        border: "2px solid var(--phone-border, #CBD5E1)",
        background: "var(--phone-bg, #FFFFFF)",
        overflow: "hidden",
        boxShadow: "0 1px 4px 0 rgba(0,0,0,0.06)",
      }}
    >
      <div style={{
        background: "var(--phone-statusbar, #F8FAFC)",
        padding: "8px 16px 6px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid var(--mockup-border, #E2E8F0)",
        position: "relative",
      }}>
        <span style={{ fontSize: "11px", fontWeight: "700", color: "var(--mockup-text, #0F172A)" }}>9:41</span>
        <div style={{
          position: "absolute", left: "50%", transform: "translateX(-50%)",
          top: "8px", width: "48px", height: "12px",
          background: "var(--phone-border, #CBD5E1)", borderRadius: "6px",
        }} />
        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
            <rect x="0" y="4" width="2" height="6" rx="1" fill="var(--mockup-muted,#64748B)"/>
            <rect x="3" y="2" width="2" height="8" rx="1" fill="var(--mockup-muted,#64748B)"/>
            <rect x="6" y="0" width="2" height="10" rx="1" fill="var(--mockup-muted,#64748B)"/>
          </svg>
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
            <rect x="0" y="1" width="12" height="6" rx="1.5" stroke="var(--mockup-muted,#64748B)" strokeWidth="1"/>
            <rect x="1" y="2" width="7" height="4" rx="0.75" fill={accent}/>
            <rect x="12.5" y="2.5" width="1" height="3" rx="0.5" fill="var(--mockup-muted,#64748B)"/>
          </svg>
        </div>
      </div>
      <div style={{ minHeight: "460px", maxHeight: "460px", overflowY: "auto", background: "var(--phone-bg, #FFFFFF)" }}>
        {children}
      </div>
    </div>
  );
}

// ─── Mockup: Symptom tracking ──────────────────────────────────────────────

export function MockupSymptom({ accent, bg }) {
  const chip = (active) => ({
    display: "inline-block",
    padding: "5px 11px",
    borderRadius: "20px",
    fontSize: "11px",
    fontWeight: active ? "700" : "500",
    background: active ? accent : "var(--mockup-chip-bg, #F1F5F9)",
    color: active ? "#fff" : "var(--mockup-chip-text, #475569)",
    border: active ? "none" : "1px solid var(--mockup-border, #E2E8F0)",
    cursor: "default",
  });
  return (
    <div style={{ padding: "16px", fontSize: "12px", color: "var(--mockup-text, #0F172A)", lineHeight: 1.5 }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
        <span style={{ fontSize: "13px", color: "var(--mockup-muted, #64748B)" }}>←</span>
        <span style={{ fontSize: "13px", fontWeight: "600" }}>Log symptom</span>
        <span style={{ marginLeft: "auto", fontSize: "11px", color: "var(--mockup-muted, #64748B)" }}>Step 2 of 6</span>
      </div>
      <div style={{ marginBottom: "14px" }}>
        <div style={{ fontWeight: "600", marginBottom: "6px" }}>Onset — when did it start?</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
          {["Just now", "Today", "Yesterday", "This week", "Gradual"].map(c => (
            <span key={c} style={chip(c === "Today")}>{c}</span>
          ))}
        </div>
      </div>
      <div style={{ marginBottom: "14px" }}>
        <div style={{ fontWeight: "600", marginBottom: "6px" }}>Character — what does it feel like?</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
          {["Throbbing ✓", "Sharp", "Dull", "Burning", "Pressure"].map(c => (
            <span key={c} style={chip(c === "Throbbing ✓")}>{c}</span>
          ))}
        </div>
      </div>
      <div style={{ marginBottom: "14px" }}>
        <div style={{ fontWeight: "600", marginBottom: "8px" }}>Severity</div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ fontSize: "10px", color: "var(--mockup-muted, #64748B)" }}>1 mild</span>
          <div style={{ flex: 1, height: "4px", background: "var(--mockup-track, #E2E8F0)", borderRadius: "2px", position: "relative" }}>
            <div style={{ width: "55%", height: "100%", background: accent, borderRadius: "2px" }} />
            <div style={{ position: "absolute", top: "50%", left: "55%", transform: "translate(-50%,-50%)", width: "10px", height: "10px", borderRadius: "50%", background: accent, border: "2px solid #fff" }} />
          </div>
          <span style={{ fontSize: "11px", fontWeight: "700", color: accent }}>6/10</span>
          <span style={{ fontSize: "10px", color: "var(--mockup-muted, #64748B)" }}>10 severe</span>
        </div>
      </div>
      <div style={{ borderTop: "1px solid var(--mockup-border, #E2E8F0)", paddingTop: "12px", textAlign: "center", color: "var(--mockup-muted, #64748B)", fontSize: "11px", marginBottom: "12px" }}>
        — Or speak your symptom —<br />
        <span style={{ fontSize: "18px" }}>🎤</span>
        <span style={{ display: "block", fontWeight: "600", fontSize: "11px", color: accent }}>Record</span>
      </div>
      <div style={{ background: accent, color: "#fff", borderRadius: "8px", padding: "9px", textAlign: "center", fontWeight: "600", fontSize: "12px" }}>
        Continue →
      </div>
    </div>
  );
}

// ─── Mockup: GP ready report ───────────────────────────────────────────────

export function MockupGpReport({ accent, bg }) {
  const secH = { background: accent, color: "#fff", fontWeight: "700", fontSize: "10px", padding: "4px 8px", marginTop: "8px" };
  const secB = { border: "1px solid var(--mockup-border, #E2E8F0)", borderTop: "none", padding: "6px 8px", fontSize: "10px", color: "var(--mockup-text, #0F172A)", lineHeight: "1.5", marginBottom: "2px" };
  const symptomRows = [
    ["Pelvic discomfort", "17 of 48 days", "1–5 hrs", "3–6/10"],
    ["Heavier bleeding", "2 cycles", "3–4 days/cycle", "Moderate"],
    ["Bloating", "19 days", "Half–full day", "2–5/10"],
    ["Fatigue", "22 days", "Most of day", "3–6/10"],
    ["Lower back pain", "11 days", "2–6 hrs", "3–5/10"],
  ];
  return (
    <div style={{ padding: "10px", fontSize: "10px", color: "var(--mockup-text, #0F172A)", lineHeight: 1.5 }}>
      <div style={{ marginBottom: "6px" }}>
        <div style={{ fontSize: "13px", fontWeight: "800", color: "var(--mockup-text, #0F172A)", lineHeight: 1.2 }}>Jeevora GP-Ready Summary</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2px" }}>
          <span style={{ fontSize: "9px", color: "var(--mockup-muted, #64748B)" }}>Jeevora | Privacy-first symptom tracking</span>
          <span style={{ fontSize: "8px", fontWeight: "700", color: accent, border: `1px solid ${accent}`, borderRadius: "3px", padding: "1px 5px" }}>NON-DIAGNOSTIC DEMO</span>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "4px", borderTop: "1px solid var(--mockup-border, #E2E8F0)", borderBottom: "1px solid var(--mockup-border, #E2E8F0)", padding: "5px 0", marginBottom: "6px" }}>
        {[["Patient ID","JV-UK-GYN-DEMO-001"],["Age","43"],["Report Date","19 May 2026"],["Tracking Period","01 Apr – 18 May 2026"]].map(([l,v]) => (
          <div key={l}><div style={{ fontSize: "8px", fontWeight: "700", color: "var(--mockup-muted, #64748B)", textTransform: "uppercase" }}>{l}</div><div style={{ fontSize: "9px", fontWeight: "600" }}>{v}</div></div>
        ))}
      </div>
      <div style={secH}>Main Concern</div>
      <div style={secB}>Recurring pelvic discomfort, heavier and irregular bleeding, bloating, and fatigue tracked over the past 6–7 weeks. Symptoms are being presented for GP review and discussion of next steps.</div>
      <div style={secH}>Urgent Symptoms Reported</div>
      <div style={secB}>No urgent symptoms reported in the app. No fainting, sudden severe pelvic pain, heavy bleeding requiring urgent care, chest pain, or fever recorded during this tracking period.</div>
      <div style={secH}>Symptom Timeline</div>
      <div style={secB}>
        {["Symptoms started gradually in early April 2026; bleeding pattern changed across the most recent cycles.","Pelvic discomfort became more frequent from late April; bloating and fatigue were logged more often in the past 3 weeks.","Lower back pain was mainly logged on heavier bleeding days and the day after."].map((line,i) => (
          <div key={i} style={{ display: "flex", gap: "4px", marginBottom: "2px" }}><span style={{ flexShrink: 0 }}>–</span><span>{line}</span></div>
        ))}
      </div>
      <div style={secH}>Key Symptom Pattern</div>
      <div style={{ ...secB, padding: 0 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "9px" }}>
          <thead><tr style={{ background: "var(--mockup-chip-bg, #F1F5F9)" }}>{["Symptom","Frequency","Duration","Severity"].map(h => <th key={h} style={{ padding: "4px 5px", textAlign: "left", fontWeight: "700", borderBottom: "1px solid var(--mockup-border, #E2E8F0)" }}>{h}</th>)}</tr></thead>
          <tbody>{symptomRows.map(([s,f,d,sv],i) => (<tr key={i} style={{ borderBottom: "1px solid var(--mockup-border, #E2E8F0)" }}><td style={{ padding: "3px 5px" }}>{s}</td><td style={{ padding: "3px 5px" }}>{f}</td><td style={{ padding: "3px 5px" }}>{d}</td><td style={{ padding: "3px 5px", fontWeight: "600", color: accent }}>{sv}</td></tr>))}</tbody>
        </table>
      </div>
      <div style={secH}>Better / Worse Factors</div>
      <div style={{ ...secB, padding: 0 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "9px" }}>
          <thead><tr style={{ background: "var(--mockup-chip-bg, #F1F5F9)" }}><th style={{ padding: "4px 5px", textAlign: "left", fontWeight: "700", borderBottom: "1px solid var(--mockup-border, #E2E8F0)", width: "50%" }}>Worse With</th><th style={{ padding: "4px 5px", textAlign: "left", fontWeight: "700", borderBottom: "1px solid var(--mockup-border, #E2E8F0)", width: "50%" }}>Better With</th></tr></thead>
          <tbody>{[["Prolonged standing","Rest breaks"],["Poor sleep / high-stress days","Heat pack"],["Heavier bleeding days","Hydration and lighter activity"]].map(([w,b],i) => (<tr key={i} style={{ borderBottom: "1px solid var(--mockup-border, #E2E8F0)" }}><td style={{ padding: "3px 5px" }}>{w}</td><td style={{ padding: "3px 5px" }}>{b}</td></tr>))}</tbody>
        </table>
      </div>
      <div style={secH}>Medication and Relevant History</div>
      <div style={secB}>Occasional paracetamol for discomfort; iron supplement started 02 May 2026. No known medication allergies. Previous irregular cycle noted in 2024. No surgery recorded in the app.</div>
      <div style={secH}>Impact on Daily Life</div>
      <div style={secB}>Sleep affected on 9 nights. Work concentration reduced on 6 days. Exercise reduced during heavier symptom days.</div>
      <div style={secH}>Patient Questions</div>
      <div style={secB}>
        {["Could these symptoms need blood tests, examination, or further review?","Should the bleeding and pelvic discomfort be discussed with a gynaecology specialist?","What should be tracked before a follow-up appointment?"].map((q,i) => (
          <div key={i} style={{ display: "flex", gap: "4px", marginBottom: "2px" }}><span style={{ flexShrink: 0 }}>–</span><span>{q}</span></div>
        ))}
      </div>
      <div style={secH}>Relevant Uploaded Records</div>
      <div style={secB}>Period and symptom tracking summary, 01 Apr – 18 May 2026; pharmacy receipt dated 29 Apr 2026; previous blood test report dated 15 Jan 2026.</div>
      <div style={{ background: accent, color: "#fff", borderRadius: "6px", padding: "8px", textAlign: "center", fontWeight: "600", fontSize: "11px", marginTop: "10px" }}>Download PDF for GP</div>
      <div style={{ marginTop: "8px", fontSize: "8px", color: "var(--mockup-muted, #64748B)", textAlign: "center", borderTop: "1px solid var(--mockup-border, #E2E8F0)", paddingTop: "6px" }}>
        Dummy report for demonstration purposes only. Fictional patient data. Jeevora does not diagnose, recommend treatment, or replace medical advice.
      </div>
    </div>
  );
}

// ─── Mockup: Lifestyle tracking ────────────────────────────────────────────

export function MockupLifestyle({ accent, bg }) {
  return (
    <div style={{ padding: "14px", fontSize: "12px", color: "var(--mockup-text, #0F172A)", lineHeight: 1.5 }}>
      <div style={{ fontWeight: "700", fontSize: "13px", marginBottom: "2px" }}>Good morning, Nadia 🔔</div>
      <div style={{ color: "var(--mockup-muted, #64748B)", fontSize: "11px", marginBottom: "12px" }}>Friday, 22 May</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "14px" }}>
        {[["Sleep","7h 12m"],["Heart rate","68 bpm"]].map(([label,value]) => (
          <div key={label} style={{ background: bg, borderRadius: "10px", padding: "10px", border: `1px solid ${accent}22` }}>
            <div style={{ fontSize: "10px", color: accent, fontWeight: "700", marginBottom: "2px", textTransform: "uppercase", letterSpacing: "0.04em" }}>{label}</div>
            <div style={{ fontSize: "15px", fontWeight: "700", color: "var(--mockup-text, #0F172A)" }}>{value}</div>
            <div style={{ fontSize: "9px", color: "var(--mockup-muted, #64748B)", marginTop: "2px" }}>⌚ Auto</div>
          </div>
        ))}
      </div>
      <div style={{ fontWeight: "700", fontSize: "11px", marginBottom: "8px" }}>Today's log · <span style={{ color: accent }}>3 entries</span></div>
      {[["⚡","Headache — severity 6/10","Logged 8:30 am · voice"],["💊","Sumatriptan 50mg — taken","Logged 8:45 am"],["🥗","Breakfast — oats, banana","Logged 9:10 am"]].map(([icon,title,sub]) => (
        <div key={title} style={{ display: "flex", gap: "8px", alignItems: "flex-start", padding: "8px 0", borderBottom: "1px solid var(--mockup-border, #E2E8F0)" }}>
          <span style={{ fontSize: "14px", marginTop: "1px" }}>{icon}</span>
          <div><div style={{ fontWeight: "600", fontSize: "11px" }}>{title}</div><div style={{ fontSize: "10px", color: "var(--mockup-muted, #64748B)" }}>{sub}</div></div>
        </div>
      ))}
      <div style={{ background: accent, color: "#fff", borderRadius: "8px", padding: "8px", textAlign: "center", fontWeight: "600", fontSize: "11px", margin: "10px 0" }}>+ Log something</div>
      <div style={{ borderTop: "1px solid var(--mockup-border, #E2E8F0)", paddingTop: "8px", display: "flex", justifyContent: "space-around", fontSize: "9px", color: "var(--mockup-muted, #64748B)" }}>
        {["🏠 Home","📊 Track","💡 Insights","📄 Report","👤 Profile"].map(item => <span key={item}>{item}</span>)}
      </div>
    </div>
  );
}

// ─── Mockup: Lifestyle – Sleep & Mood ─────────────────────────────────────

export function MockupLifestyleSleep({ accent, bg }) {
  return (
    <div style={{ padding: "14px", fontSize: "12px", color: "var(--mockup-text, #0F172A)", lineHeight: 1.5 }}>
      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
        <span style={{ color: "var(--mockup-muted, #64748B)", fontSize: "13px" }}>←</span>
        <span style={{ fontWeight: "700", fontSize: "13px" }}>Sleep & Mood</span>
        <span style={{ marginLeft: "auto", fontSize: "10px", color: accent }}>⌚ Auto-synced</span>
      </div>
      <div style={{ background: bg, borderRadius: "12px", padding: "12px", marginBottom: "12px", border: `1px solid ${accent}22` }}>
        <div style={{ fontSize: "10px", fontWeight: "700", color: accent, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "8px" }}>Last night's sleep</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "6px" }}>
          <span style={{ fontSize: "22px", fontWeight: "700", color: "var(--mockup-text, #0F172A)" }}>7h 12m</span>
          <span style={{ fontSize: "10px", color: "var(--mockup-muted, #64748B)" }}>of 8h target</span>
        </div>
        <div style={{ height: "6px", background: "var(--mockup-track, #E2E8F0)", borderRadius: "3px", marginBottom: "8px" }}>
          <div style={{ width: "75%", height: "100%", background: accent, borderRadius: "3px" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: "9px", color: "var(--mockup-muted, #64748B)" }}>Fell asleep 23:12</span>
          <span style={{ fontSize: "9px", color: "var(--mockup-muted, #64748B)" }}>Woke 6:24</span>
        </div>
      </div>
      <div style={{ marginBottom: "12px" }}>
        <div style={{ fontWeight: "600", fontSize: "11px", marginBottom: "6px" }}>Sleep quality</div>
        <div style={{ display: "flex", gap: "6px" }}>
          {["😞","😐","🙂","😊","😄"].map((emoji, i) => (
            <div key={i} style={{
              flex: 1, textAlign: "center", padding: "5px", borderRadius: "8px",
              background: i === 3 ? accent : "var(--mockup-chip-bg, #F1F5F9)",
              border: `1px solid ${i === 3 ? accent : "var(--mockup-border, #E2E8F0)"}`,
              fontSize: "14px",
            }}>
              {emoji}
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginBottom: "12px" }}>
        <div style={{ fontWeight: "600", fontSize: "11px", marginBottom: "6px" }}>Today's mood</div>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {["Good","Tired","Anxious","Calm","Low energy"].map((m, i) => (
            <span key={m} style={{
              padding: "4px 10px", borderRadius: "20px", fontSize: "10px", fontWeight: "600",
              background: i === 0 ? accent : "var(--mockup-chip-bg, #F1F5F9)",
              color: i === 0 ? "#fff" : "var(--mockup-chip-text, #475569)",
              border: `1px solid ${i === 0 ? accent : "var(--mockup-border, #E2E8F0)"}`,
            }}>
              {m}
            </span>
          ))}
        </div>
      </div>
      <div style={{ background: "var(--mockup-chip-bg, #F1F5F9)", borderRadius: "8px", padding: "8px 10px", fontSize: "10px", color: "var(--mockup-muted, #64748B)", border: "1px solid var(--mockup-border, #E2E8F0)" }}>
        💡 Poor sleep Tue–Wed preceded Thursday fatigue — flagged in your GP report
      </div>
    </div>
  );
}

// ─── Mockup: Lifestyle – Nutrition ─────────────────────────────────────────

export function MockupLifestyleNutrition({ accent, bg }) {
  const meals = [
    { time: "08:30", label: "Breakfast", items: "Oats, banana, almond milk", icon: "🥣", kcal: "380 kcal", method: "photo" },
    { time: "13:10", label: "Lunch",     items: "Grilled chicken, salad",    icon: "🥗", kcal: "520 kcal", method: null },
    { time: "18:45", label: "Dinner",    items: "Salmon, rice, broccoli",    icon: "🍽️", kcal: "610 kcal", method: "barcode" },
    { time: "21:00", label: "Snack",     items: "Greek yoghurt, honey",      icon: "🫙", kcal: "120 kcal", method: null },
  ];
  const methodBadge = (method) => {
    if (!method) return null;
    const isPhoto = method === "photo";
    return (
      <span style={{
        fontSize: "8px", fontWeight: "700",
        color: isPhoto ? "#2563EB" : "#7C3AED",
        background: isPhoto ? "#EFF6FF" : "#F5F3FF",
        border: `1px solid ${isPhoto ? "#BFDBFE" : "#DDD6FE"}`,
        borderRadius: "6px", padding: "1px 5px",
        marginLeft: "4px", verticalAlign: "middle",
      }}>
        {isPhoto ? "📷 photo" : "⊟ scan"}
      </span>
    );
  };
  return (
    <div style={{ padding: "14px", fontSize: "12px", color: "var(--mockup-text, #0F172A)", lineHeight: 1.5 }}>
      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
        <span style={{ color: "var(--mockup-muted, #64748B)", fontSize: "13px" }}>←</span>
        <span style={{ fontWeight: "700", fontSize: "13px" }}>Nutrition log</span>
        <span style={{ marginLeft: "auto", fontSize: "10px", color: "var(--mockup-muted, #64748B)" }}>Fri 22 May</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "6px", marginBottom: "12px" }}>
        {[["Kcal","1,630",accent],["Carbs","196g","#7C3AED"],["Protein","89g","#1D9E75"],["Fat","52g","#D97706"]].map(([label, val, color]) => (
          <div key={label} style={{ background: "var(--mockup-chip-bg, #F1F5F9)", borderRadius: "8px", padding: "7px 6px", textAlign: "center", border: "1px solid var(--mockup-border, #E2E8F0)" }}>
            <div style={{ fontSize: "11px", fontWeight: "700", color }}>{val}</div>
            <div style={{ fontSize: "9px", color: "var(--mockup-muted, #64748B)" }}>{label}</div>
          </div>
        ))}
      </div>
      {meals.map(m => (
        <div key={m.label} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 0", borderBottom: "1px solid var(--mockup-border, #E2E8F0)" }}>
          <span style={{ fontSize: "15px" }}>{m.icon}</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: "600", fontSize: "11px" }}>
              {m.label}{methodBadge(m.method)}
              <span style={{ color: "var(--mockup-muted, #64748B)", fontWeight: "400" }}> · {m.time}</span>
            </div>
            <div style={{ fontSize: "10px", color: "var(--mockup-muted, #64748B)" }}>{m.items}</div>
          </div>
          <span style={{ fontSize: "10px", fontWeight: "600", color: accent }}>{m.kcal}</span>
        </div>
      ))}
      {/* Log options row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px", margin: "10px 0 6px" }}>
        <button style={{
          background: "#EFF6FF", border: "1.5px solid #BFDBFE", borderRadius: "8px",
          padding: "8px 4px", textAlign: "center", cursor: "pointer",
        }}>
          <div style={{ fontSize: "16px", lineHeight: 1 }}>📷</div>
          <div style={{ fontSize: "9px", fontWeight: "700", color: "#2563EB", marginTop: "3px" }}>Snap photo</div>
        </button>
        <button style={{
          background: "#F5F3FF", border: "1.5px solid #DDD6FE", borderRadius: "8px",
          padding: "8px 4px", textAlign: "center", cursor: "pointer",
        }}>
          {/* Barcode SVG icon */}
          <svg width="18" height="16" viewBox="0 0 18 16" fill="none" style={{ display: "block", margin: "0 auto" }}>
            <rect x="0"  y="0" width="2"  height="16" fill="#7C3AED"/>
            <rect x="3"  y="0" width="1"  height="16" fill="#7C3AED"/>
            <rect x="5"  y="0" width="2"  height="16" fill="#7C3AED"/>
            <rect x="8"  y="0" width="1"  height="16" fill="#7C3AED"/>
            <rect x="10" y="0" width="2"  height="16" fill="#7C3AED"/>
            <rect x="13" y="0" width="1"  height="16" fill="#7C3AED"/>
            <rect x="15" y="0" width="2"  height="16" fill="#7C3AED"/>
          </svg>
          <div style={{ fontSize: "9px", fontWeight: "700", color: "#7C3AED", marginTop: "3px" }}>Scan barcode</div>
        </button>
        <button style={{
          background: "var(--mockup-chip-bg, #F1F5F9)", border: "1.5px solid var(--mockup-border, #E2E8F0)", borderRadius: "8px",
          padding: "8px 4px", textAlign: "center", cursor: "pointer",
        }}>
          <div style={{ fontSize: "16px", lineHeight: 1 }}>✏️</div>
          <div style={{ fontSize: "9px", fontWeight: "700", color: "var(--mockup-muted, #64748B)", marginTop: "3px" }}>Manual</div>
        </button>
      </div>
      <div style={{ background: bg, borderRadius: "8px", padding: "7px 10px", fontSize: "10px", color: "var(--mockup-muted, #64748B)", border: `1px solid ${accent}22` }}>
        🩺 Dietary patterns this week added to your GP report
      </div>
    </div>
  );
}

// ─── Mockup: Lifestyle – Exercise & Wearable ───────────────────────────────

export function MockupLifestyleExercise({ accent, bg }) {
  return (
    <div style={{ padding: "14px", fontSize: "12px", color: "var(--mockup-text, #0F172A)", lineHeight: 1.5 }}>
      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
        <span style={{ color: "var(--mockup-muted, #64748B)", fontSize: "13px" }}>←</span>
        <span style={{ fontWeight: "700", fontSize: "13px" }}>Activity & Wearable</span>
        <span style={{ marginLeft: "auto", fontSize: "10px", color: accent }}>⌚ Apple Watch</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px", marginBottom: "14px" }}>
        {[["🚶","8,402","Steps"],["❤️","68 bpm","HR avg"],["🔥","342 kcal","Burned"]].map(([icon,val,label]) => (
          <div key={label} style={{ background: bg, borderRadius: "10px", padding: "8px", textAlign: "center", border: `1px solid ${accent}22` }}>
            <div style={{ fontSize: "14px" }}>{icon}</div>
            <div style={{ fontSize: "12px", fontWeight: "700", color: "var(--mockup-text, #0F172A)" }}>{val}</div>
            <div style={{ fontSize: "9px", color: "var(--mockup-muted, #64748B)" }}>{label}</div>
          </div>
        ))}
      </div>
      <div style={{ fontWeight: "600", fontSize: "11px", marginBottom: "8px" }}>Today's activity</div>
      {[
        { icon: "🚶", title: "Morning walk",  sub: "30 min · moderate · 8:15 am",  badge: "Auto",   color: accent },
        { icon: "🧘", title: "Yoga session",  sub: "20 min · light · 11:30 am",    badge: "Manual", color: "#7C3AED" },
      ].map(a => (
        <div key={a.title} style={{ display: "flex", gap: "8px", alignItems: "flex-start", padding: "8px", background: "var(--mockup-chip-bg, #F1F5F9)", borderRadius: "8px", marginBottom: "6px", border: "1px solid var(--mockup-border, #E2E8F0)" }}>
          <span style={{ fontSize: "16px" }}>{a.icon}</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: "600", fontSize: "11px" }}>{a.title}</div>
            <div style={{ fontSize: "10px", color: "var(--mockup-muted, #64748B)" }}>{a.sub}</div>
          </div>
          <span style={{ fontSize: "9px", fontWeight: "700", color: a.color, background: `${a.color}18`, padding: "2px 6px", borderRadius: "10px" }}>{a.badge}</span>
        </div>
      ))}
      <div style={{ background: bg, borderRadius: "8px", padding: "8px 10px", fontSize: "10px", border: `1px solid ${accent}33`, marginTop: "6px" }}>
        <div style={{ fontWeight: "700", color: accent, marginBottom: "2px" }}>⚡ Correlation spotted</div>
        <span style={{ color: "var(--mockup-muted, #64748B)" }}>Reduced activity on Tue preceded Wed fatigue — flagged in GP report</span>
      </div>
    </div>
  );
}

// ─── Mockup: Privacy first ─────────────────────────────────────────────────

export function MockupPrivacy({ accent, bg }) {
  const rows = [["18 May 26","Granted view","Dr. S. Chen"],["02 May 26","Revoked share","Research Co."],["14 Apr 26","Granted export","Personal copy"],["01 Apr 26","Account setup","Jeevora Care"]];
  return (
    <div style={{ padding: "14px", fontSize: "12px", color: "var(--mockup-text, #0F172A)", lineHeight: 1.5 }}>
      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "14px" }}>
        <span style={{ color: "var(--mockup-muted, #64748B)", fontSize: "13px" }}>←</span>
        <span style={{ fontWeight: "700", fontSize: "13px" }}>Data & permissions</span>
      </div>
      <div style={{ fontWeight: "700", fontSize: "11px", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--mockup-muted, #64748B)" }}>Your data</div>
      {["Export all data →","Delete account →"].map(label => (
        <div key={label} style={{ padding: "8px 10px", borderRadius: "7px", marginBottom: "5px", fontSize: "11px", background: "var(--mockup-chip-bg, #F8FAFC)", border: "1px solid var(--mockup-border, #E2E8F0)", fontWeight: "500" }}>{label}</div>
      ))}
      <div style={{ fontWeight: "700", fontSize: "11px", margin: "12px 0 4px", textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--mockup-muted, #64748B)" }}>Permission log</div>
      <div style={{ fontSize: "10px", color: "var(--mockup-muted, #64748B)", marginBottom: "8px" }}>Every consent decision is recorded immutably and auditable by you.</div>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "10px" }}>
        <thead><tr style={{ borderBottom: "1px solid var(--mockup-border, #E2E8F0)" }}>{["Date","Action","With whom"].map(h => <th key={h} style={{ textAlign: "left", padding: "3px 0", fontWeight: "600", color: "var(--mockup-muted, #64748B)" }}>{h}</th>)}</tr></thead>
        <tbody>{rows.map(([date,action,whom],i) => (<tr key={i} style={{ borderBottom: "1px solid var(--mockup-border, #E2E8F0)" }}><td style={{ padding: "4px 0", whiteSpace: "nowrap" }}>{date}</td><td style={{ padding: "4px 0", color: action.startsWith("Granted") ? "#065F46" : "#991B1B", fontWeight: "600" }}>{action}</td><td style={{ padding: "4px 0", color: "var(--mockup-muted, #64748B)" }}>{whom}</td></tr>))}</tbody>
      </table>
      <div style={{ marginTop: "12px", fontSize: "10px" }}>
        <div style={{ display: "flex", gap: "6px", marginBottom: "6px" }}><span>🔒</span><div><div style={{ fontWeight: "700" }}>Encrypted cloud storage</div><div style={{ color: "var(--mockup-muted, #64748B)" }}>Your health data is never on a blockchain and never sold.</div></div></div>
        <div style={{ display: "flex", gap: "6px" }}><span>🛡</span><div><div style={{ fontWeight: "700" }}>No NHS interference</div><div style={{ color: "var(--mockup-muted, #64748B)" }}>Jeevora Care operates independently of all NHS systems.</div></div></div>
      </div>
    </div>
  );
}

// ─── Main FeaturePanel component ───────────────────────────────────────────

export default function FeaturePanel({ intro, items, accent, bg, MockupComponent, MockupComponents }) {
  const [openItem, setOpenItem] = useState(0);
  const [mockupIdx, setMockupIdx] = useState(0);

  const mockups = MockupComponents || (MockupComponent ? [MockupComponent] : []);
  const isCarousel = mockups.length > 1;
  const CurrentMockup = mockups[mockupIdx] || null;

  const prev = () => setMockupIdx((i) => (i - 1 + mockups.length) % mockups.length);
  const next = () => setMockupIdx((i) => (i + 1) % mockups.length);

  return (
    <div className="fp-wrap">
      <style>{PANEL_CSS}</style>
      <div className="fp-grid">
        {/* Left: intro + accordion */}
        <div>
          <p style={{ fontSize: "15px", color: "var(--accordion-preview, #64748B)", lineHeight: "1.7", marginBottom: "24px" }}>
            {intro}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {items.map((item, i) => (
              <AccordionItem
                key={i}
                item={item}
                isOpen={openItem === i}
                onClick={() => setOpenItem(openItem === i ? -1 : i)}
                accent={accent}
                bg={bg}
              />
            ))}
          </div>
        </div>

        {/* Right: phone mockup + carousel controls */}
        <div className="fp-mockup-col">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
            {/* Arrows + phone */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              {isCarousel && (
                <button onClick={prev} aria-label="Previous mockup" style={{
                  background: "none", border: `1.5px solid ${accent}44`, borderRadius: "50%",
                  width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", color: accent, flexShrink: 0, transition: "border-color 150ms",
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
              )}
              <PhoneFrame accent={accent}>
                {CurrentMockup && <CurrentMockup accent={accent} bg={bg} />}
              </PhoneFrame>
              {isCarousel && (
                <button onClick={next} aria-label="Next mockup" style={{
                  background: "none", border: `1.5px solid ${accent}44`, borderRadius: "50%",
                  width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", color: accent, flexShrink: 0, transition: "border-color 150ms",
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              )}
            </div>

            {/* Dot indicators */}
            {isCarousel && (
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {mockups.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setMockupIdx(i)}
                    aria-label={`Mockup ${i + 1}`}
                    style={{
                      width: i === mockupIdx ? "22px" : "8px",
                      height: "8px",
                      borderRadius: "4px",
                      background: i === mockupIdx ? accent : "var(--accordion-chevron, #94A3B8)",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "all 200ms ease",
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
