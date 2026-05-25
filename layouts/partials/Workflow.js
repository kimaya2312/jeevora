import { markdownify } from "@lib/utils/textConverter";

const steps = [
  {
    number: "01",
    icon: "📋",
    title: "Log daily",
    desc: "Record symptoms, medications, mood, sleep, and lifestyle in seconds — whenever something happens, not just before your appointment.",
  },
  {
    number: "02",
    icon: "📊",
    title: "Track patterns",
    desc: "Jeevora Care connects your data over time, identifying trends in severity, frequency, and duration that a single appointment never could.",
  },
  {
    number: "03",
    icon: "📄",
    title: "Walk in prepared",
    desc: "A clear, structured GP-ready report is generated automatically — so you spend your 10 minutes being heard, not trying to remember.",
  },
];

const Workflow = ({ workflow }) => {
  return (
    <section id="how-it-works" className="section pb-0" style={{ background: "#f8fafc" }}>
      <div className="container">
        <div className="mb-12 text-center">
          {markdownify(
            workflow.title,
            "h2",
            "mx-auto max-w-[500px] font-bold leading-[44px]"
          )}
          {markdownify(workflow.description, "p", "mt-3 max-w-2xl mx-auto")}
        </div>

        {/* Step cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
            paddingBottom: "60px",
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
              {/* Step number badge */}
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
              {/* Icon */}
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>
                {step.icon}
              </div>
              {/* Title */}
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#0f172a",
                  marginBottom: "10px",
                }}
              >
                {step.title}
              </h3>
              {/* Description */}
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6" }}>
                {step.desc}
              </p>
              {/* Connector line (not on last card) */}
              {i < steps.length - 1 && (
                <div
                  style={{
                    display: "none", // shown only on large screens via CSS is complex; keep it simple
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
