import config from "@config/config.json";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ src }) => {
  const { base_url, logo, logo_width, logo_height, logo_text, title } =
    config.site;

  const imgSrc = src || logo;

  return (
    <Link
      href={base_url}
      className="navbar-brand flex items-center gap-2"
    >
      {imgSrc && (
        <Image
          width={120}
          height={80}
          src={imgSrc}
          alt={title}
          priority
          style={{ width: "44px", height: "auto", display: "block" }}
        />
      )}
      <span
        style={{
          fontSize: "1.6rem",
          fontWeight: 700,
          color: "#0F172A",
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        {logo_text || title}
      </span>
    </Link>
  );
};

export default Logo;
