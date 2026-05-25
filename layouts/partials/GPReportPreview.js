const G  = "#1D9E75";
const G2 = "#065f46";

const SYMPTOMS = [
  { name: "Pelvic discomfort", freq: "17/48 days", dur: "1–5 hrs",    sev: "3–6/10",  bar: 6,  col: "#ef4444" },
  { name: "Heavier bleeding",  freq: "2 cycles",   dur: "3–4 days",   sev: "Moderate", bar: 5,  col: "#f59e0b" },
  { name: "Bloating",          freq: "19 days",    dur: "½–full day",  sev: "2–5/10",  bar: 4,  col: "#f59e0b" },
  { name: "Fatigue",           freq: "22 days",    dur: "Most of day", sev: "3–6/10",  bar: 5,  col: "#f59e0b" },
  { name: "Lower back pain",   freq: "11 days",    dur: "2–6 hrs",    sev: "3–5/10",  bar: 4,  col: "#94a3b8" },
];

const MEDS = ["Paracetamol (occasional)", "Iron supplement — started 02 May 2026"];
const QS   = [
  "Could these symptoms need blood tests, examination, or further review?",
  "Should pelvic discomfort and bleeding be discussed with a gynaecology specialist?",
  "What should I track before a follow-up appointment?",
];

function Divider() {
  return <div style={{ height: 1, background: "#e5e7eb", margin: "10px 0" }} />;
}

function SectionLabel({ children }) {
  return (
    <div style={{
      fontSize: 8,
      fontWeight: 800,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "#6b7280",
      marginBottom: 6,
    }}>
      {children}
    </div>
  );
}

export default function GPReportPreview() {
  return (
    <div style={{
      maxWidth: 440,
      margin: "0 auto",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      /* slight tilt for sticker feel */
      transform: "rotate(-0.8deg)",
      filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.18))",
    }}>

      {/* ── Paper card ── */}
      <div style={{
        background: "#fffef9",
        borderRadius: 4,
        overflow: "hidden",
        border: "1px solid #d4c9a8",
        position: "relative",
      }}>

        {/* Folded corner */}
        <div style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "0 28px 28px 0",
          borderColor: `transparent #c8b97a transparent transparent`,
          zIndex: 2,
        }} />
        <div style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 28,
          height: 28,
          background: "#f0e6c8",
          clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
          zIndex: 1,
        }} />

        {/* ── Green header ── */}
        <div style={{
          background: `linear-gradient(135deg, ${G} 0%, ${G2} 100%)`,
          padding: "14px 18px 12px",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, fontFamily: "sans-serif", letterSpacing: 0.2 }}>
                Jeevora Care
              </div>
              <div style={{ color: "#a7f3d0", fontSize: 9.5, fontFamily: "sans-serif", marginTop: 1 }}>
                GP-Ready Patient Report
              </div>
            </div>
            <div style={{
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: 3,
              padding: "3px 8px",
              textAlign: "center",
            }}>
              <div style={{ color: "#fff", fontSize: 8, fontFamily: "sans-serif", fontWeight: 700 }}>NON-DIAGNOSTIC</div>
              <div style={{ color: "#a7f3d0", fontSize: 7, fontFamily: "sans-serif" }}>For GP context only</div>
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div style={{ padding: "12px 18px 14px" }}>

          {/* Patient meta */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 6,
            marginBottom: 10,
          }}>
            {[
              ["Patient",  "JV-UK-GYN-001"],
              ["Date",     "19 May 2026"],
              ["Tracked",  "48 days"],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontSize: 7.5, color: "#9ca3af", fontFamily: "sans-serif" }}>{k}</div>
                <div style={{ fontSize: 9.5, fontWeight: 700, color: "#1e293b", fontFamily: "sans-serif" }}>{v}</div>
              </div>
            ))}
          </div>

          {/* No urgent banner */}
          <div style={{
            background: "#f0fdf4",
            border: "1px solid #86efac",
            borderRadius: 3,
            padding: "6px 10px",
            display: "flex",
            alignItems: "center",
            gap: 7,
            marginBottom: 10,
          }}>
            <span style={{ fontSize: 12, color: G, flexShrink: 0 }}>✓</span>
            <div style={{ fontFamily: "sans-serif" }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: G2 }}>No urgent symptoms reported</div>
              <div style={{ fontSize: 7.5, color: "#16a34a", marginTop: 1 }}>
                No fainting · no sudden severe pain · no chest pain · no fever
              </div>
            </div>
          </div>

          <Divider />

          {/* Main concern */}
          <SectionLabel>Main concern</SectionLabel>
          <p style={{
            fontSize: 9,
            color: "#374151",
            lineHeight: 1.6,
            fontStyle: "italic",
            margin: "0 0 10px",
            fontFamily: "Georgia, serif",
          }}>
            Recurring pelvic discomfort, heavier and irregular bleeding, bloating, and fatigue tracked over 6–7 weeks. Patient attending for GP review and discussion of next steps.
          </p>

          <Divider />

          {/* Symptom table */}
          <SectionLabel>Key symptom pattern</SectionLabel>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 8.5, fontFamily: "sans-serif" }}>
            <thead>
              <tr style={{ borderBottom: "1.5px solid #e5e7eb" }}>
                {["Symptom", "Freq.", "Duration", "Severity"].map(h => (
                  <th key={h} style={{
                    textAlign: "left",
                    padding: "3px 4px",
                    fontSize: 7.5,
                    fontWeight: 700,
                    color: "#9ca3af",
                    letterSpacing: "0.05em",
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SYMPTOMS.map((s, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #f3f4f6" }}>
                  <td style={{ padding: "4px 4px", color: "#111827", fontWeight: 600 }}>
                    <span style={{
                      display: "inline-block",
                      width: 6,
                      height: 6,
                      borderRadius: 3,
                      background: s.col,
                      marginRight: 5,
                      verticalAlign: "middle",
                    }} />
                    {s.name}
                  </td>
                  <td style={{ padding: "4px 4px", color: "#374151" }}>{s.freq}</td>
                  <td style={{ padding: "4px 4px", color: "#374151" }}>{s.dur}</td>
                  <td style={{ padding: "4px 4px", color: s.bar >= 6 ? "#ef4444" : "#f59e0b", fontWeight: 700 }}>{s.sev}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <Divider />

          {/* Medication */}
          <SectionLabel>Current medications</SectionLabel>
          <div style={{ marginBottom: 10, fontFamily: "sans-serif" }}>
            {MEDS.map((m, i) => (
              <div key={i} style={{ fontSize: 8.5, color: "#374151", padding: "2px 0", display: "flex", gap: 6 }}>
                <span style={{ color: "#6b7280" }}>—</span>
                <span>{m}</span>
              </div>
            ))}
          </div>

          <Divider />

          {/* Impact */}
          <SectionLabel>Impact on daily life</SectionLabel>
          <div style={{ display: "flex", gap: 6, marginBottom: 10, fontFamily: "sans-serif" }}>
            {[
              { v: "9 nights", l: "Sleep affected" },
              { v: "6 days",   l: "Work affected" },
              { v: "3",        l: "Uploaded records" },
            ].map(({ v, l }) => (
              <div key={l} style={{
                flex: 1,
                border: "1px solid #e5e7eb",
                borderRadius: 3,
                padding: "5px 6px",
                textAlign: "center",
                background: "#f8fafc",
              }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#0f172a" }}>{v}</div>
                <div style={{ fontSize: 7, color: "#9ca3af", marginTop: 1 }}>{l}</div>
              </div>
            ))}
          </div>

          <Divider />

          {/* Patient questions */}
          <SectionLabel>Patient questions for GP</SectionLabel>
          <ol style={{ margin: "0 0 12px", paddingLeft: 14, fontFamily: "sans-serif" }}>
            {QS.map((q, i) => (
              <li key={i} style={{ fontSize: 8.5, color: "#374151", lineHeight: 1.5, marginBottom: 3 }}>{q}</li>
            ))}
          </ol>

          {/* Footer */}
          <div style={{
            borderTop: "1px dashed #d1d5db",
            paddingTop: 8,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <div style={{ fontSize: 7, color: "#9ca3af", fontFamily: "sans-serif", lineHeight: 1.5, maxWidth: 260 }}>
              Jeevora Care does not diagnose or recommend treatment. This report is a patient context tool only and does not replace medical advice.
            </div>
            <div style={{
              background: G,
              color: "#fff",
              borderRadius: 3,
              padding: "5px 10px",
              fontSize: 8,
              fontWeight: 700,
              fontFamily: "sans-serif",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}>
              PDF for GP
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
