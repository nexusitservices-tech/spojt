const baseURL = "https://nexus-it-services.vercel.app";

const meta = {
  home: {
    path: "/",
    title: "Nexus IT Services — Empowering Business Through Technology",
    description:
      "Nexus IT Services delivers enterprise-grade cloud infrastructure, cybersecurity, managed IT, and data analytics solutions. Trusted by 500+ organizations worldwide.",
    image: "/images/og/og.png",
    canonical: "https://nexus-it-services.vercel.app",
    robots: "index,follow",
    alternates: [{ href: "https://nexus-it-services.vercel.app", hrefLang: "en" }],
  },
};

const schema = {
  logo: "",
  type: "Business",
  name: "Nexus IT Services",
  description: meta.home.description,
};

export { meta, schema, baseURL };
