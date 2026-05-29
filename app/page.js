import config from "@config/config.json";
import SeoMeta from "@layouts/SeoMeta";
import Link from "next/link";

import HomeBanner from "@layouts/partials/HomeBanner";
import Workflow from "@layouts/partials/Workflow";
import HomeFeatureCards from "@layouts/components/HomeFeatureCards";
import { getListPage } from "../lib/contentParser";

const Home = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  const { banner, workflow } = frontmatter;
  const { title } = config.site;

  return (
    <>
      <SeoMeta title={title} />

      {/* Banner */}
      <HomeBanner banner={banner} />

      {/* workflow */}
      <Workflow workflow={workflow} />

      {/* Feature explorer + feedback prompt */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-bold mb-4">Your experience builds a better Jeevora Care — for everyone.</h2>
            <p className="mx-auto max-w-2xl text-lg">
              You know what it feels like to sit in a 10-minute appointment and forget half of what you meant to say.
              Before you join the waitlist, explore what Jeevora Care does — and tell us what your health journey actually needs.
            </p>
          </div>

          <HomeFeatureCards />

          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
            <p style={{ fontSize: "15px", lineHeight: "1.7", marginBottom: "8px" }}>
              Explore each feature, see if it solves what you face, and let us know what matters most.
              We need patients like you to get this right — your feedback shapes an app that truly puts patients first.
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                marginTop: "20px",
                background: "#2563EB",
                color: "#fff",
                fontWeight: "700",
                fontSize: "15px",
                borderRadius: "8px",
                padding: "12px 28px",
                textDecoration: "none",
              }}
            >
              Join Waitlist
            </Link>
            <p style={{ marginTop: "10px", fontSize: "13px", opacity: 0.5 }}>
              No spam. No sharing. Just early access.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
