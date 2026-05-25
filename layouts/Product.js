import Cta from "@layouts/components/Cta";
import FreeDemoSection from "./partials/FreeDemoSection";

/* ── Reusable two-column card ── */
const ProductColumn = ({ title, items, accent, id }) => (
  <div id={id} className="md:col-6">
    <h2
      className="h3 mb-8 border-b-2 pb-4"
      style={{ borderColor: accent || "#2563EB", color: "#0F172A" }}
    >
      {title}
    </h2>
    <ul className="space-y-6">
      {items.map((item, i) => (
        <li key={i} className="flex gap-4">
          <span className="mt-0.5 text-2xl leading-none">{item.icon}</span>
          <div>
            <h3 className="h6 mb-1" style={{ color: "#0F172A" }}>
              {item.name}
            </h3>
            <p className="text-sm leading-relaxed">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

/* ── Page layout ── */
const Product = ({ data }) => {
  const { frontmatter } = data;
  const { features, platform } = frontmatter;

  return (
    <>
      {/* ── Section 1: Page heading + Features / Platform columns ── */}
      <section id="features" className="section">
        <div className="container">
          <div className="mb-14 text-center">
            <h1 className="h2 mb-3">Jeevora Care Product</h1>
            <p className="mx-auto max-w-xl text-lg">
              Everything Jeevora Care offers — from daily tracking features to the
              privacy-first platform it runs on.
            </p>
          </div>

          <div className="row gy-12">
            <ProductColumn title={features.title} items={features.items} accent="#2563EB" />
            <ProductColumn id="platform" title={platform.title} items={platform.items} accent="#22C55E" />
          </div>
        </div>
      </section>

      {/* ── Section 2: Free Demo — scrolling sticky-phone demo ── */}
      <div id="demo"><FreeDemoSection /></div>

      {/* ── Section 3: Standard CTA ── */}
      <Cta />
    </>
  );
};

export default Product;
