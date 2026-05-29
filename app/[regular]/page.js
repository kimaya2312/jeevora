import NotFound from "@layouts/404";
import About from "@layouts/About";
import Contact from "@layouts/Contact";
import Product from "@layouts/Product";
import Default from "@layouts/Default";
import Faq from "@layouts/Faq";
import GpReport from "@layouts/GpReport";
import LifestyleTracking from "@layouts/LifestyleTracking";
import Pricing from "@layouts/Pricing";
import PrivacyFirst from "@layouts/PrivacyFirst";
import SymptomTracking from "@layouts/SymptomTracking";
import SeoMeta from "@layouts/SeoMeta";
import { getRegularPage, getSinglePage } from "@lib/contentParser";

// for all regular pages
const RegularPages = async ({ params }) => {
  const { regular } = params;
  const regularPageData = await getRegularPage(regular);
  const { title, meta_title, description, image, noindex, canonical, layout } =
    regularPageData.frontmatter;
  const { content } = regularPageData;

  return (
    <>
      <SeoMeta
        title={title}
        description={description ? description : content.slice(0, 120)}
        meta_title={meta_title}
        image={image}
        noindex={noindex}
        canonical={canonical}
      />
      {layout === "404" ? (
        <NotFound data={regularPageData} />
      ) : layout === "about" ? (
        <About data={regularPageData} />
      ) : layout === "product" ? (
        <Product data={regularPageData} />
      ) : layout === "contact" ? (
        <Contact data={regularPageData} />
      ) : layout === "pricing" ? (
        <Pricing data={regularPageData} />
      ) : layout === "faq" ? (
        <Faq data={regularPageData} />
      ) : layout === "gp-report" ? (
        <GpReport data={regularPageData} />
      ) : layout === "symptom-tracking" ? (
        <SymptomTracking data={regularPageData} />
      ) : layout === "lifestyle-tracking" ? (
        <LifestyleTracking data={regularPageData} />
      ) : layout === "privacy-first" ? (
        <PrivacyFirst data={regularPageData} />
      ) : (
        <Default data={regularPageData} />
      )}
    </>
  );
};
export default RegularPages;

// for regular page routes
export const generateStaticParams = async () => {
  const allslugs = await getSinglePage("content");
  const slugs = allslugs.map((item) => item.slug);
  const paths = slugs.map((slug) => ({
    regular: slug,
  }));

  return paths;
};
