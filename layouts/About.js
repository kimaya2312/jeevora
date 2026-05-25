import { markdownify } from "@lib/utils/textConverter";
import Cta from "@layouts/components/Cta";

const About = ({ data }) => {
  const { frontmatter } = data;
  const { company, founder } = frontmatter;

  return (
    <>
      {/* ── Company Section ── */}
      <section id="about-jeevora" className="section">
        <div className="container">
          {/* Header */}
          <div className="mb-12 text-center">
            {markdownify(company.title, "h1", "h2 mb-4")}
            {markdownify(
              company.subtitle,
              "p",
              "text-lg font-semibold text-primary"
            )}
          </div>

          {/* Intro */}
          {markdownify(company.content, "p", "mb-10 text-center max-w-3xl mx-auto text-lg leading-relaxed")}

          {/* Does / Does Not grid */}
          <div id="what-it-does" className="row gy-4 mb-10">
            {/* What it does */}
            <div className="md:col-6">
              <div className="rounded-xl border border-border bg-theme-light p-6 md:p-8 h-full">
                <h3 className="h4 mb-6 text-primary text-center md:text-left">{company.what_it_does.heading}</h3>
                <ul className="space-y-3">
                  {company.what_it_does.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 text-primary font-bold">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* What it does not */}
            <div className="md:col-6">
              <div className="rounded-xl border border-border bg-white p-6 md:p-8 h-full">
                <h3 className="h4 mb-6 text-center md:text-left" style={{ color: "#0F172A" }}>{company.what_it_does_not.heading}</h3>
                <ul className="space-y-3">
                  {company.what_it_does_not.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 font-bold" style={{ color: "#94A3B8" }}>✕</span>
                      <span className="text-dark">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Closing statement */}
          <div className="rounded-xl bg-primary px-5 py-6 md:px-8 text-center text-white">
            {markdownify(company.closing, "p", "text-lg leading-relaxed")}
          </div>
        </div>
      </section>

      {/* ── Founder Section ── */}
      <section id="founder" className="section bg-white border-t border-border">
        <div className="container">
          {/* Header */}
          <div className="mb-10 text-center">
            {markdownify(founder.title, "h2", "h2 mb-4")}
            {markdownify(
              founder.content,
              "p",
              "max-w-3xl mx-auto text-lg leading-relaxed text-center md:text-left"
            )}
          </div>

          {/* Pillars */}
          <div className="row gy-4 justify-center">
            {founder.pillars.map((pillar, i) => (
              <div key={i} className="md:col-4">
                <div className="rounded-xl border border-border bg-white p-8 text-center h-full">
                  <div className="mb-4 text-4xl">{pillar.icon}</div>
                  <h3 className="h5 mb-3 text-primary">{pillar.heading}</h3>
                  <p className="leading-relaxed">{pillar.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Standard CTA ── */}
      <Cta />
    </>
  );
};

export default About;
