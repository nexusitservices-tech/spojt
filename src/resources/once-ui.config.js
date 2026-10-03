import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import { Questrial } from "next/font/google";

const heading = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Geist({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const questrial = Questrial({
  variable: "--font-questrial",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const fonts = {
  heading: heading,
  body: body,
  label: label,
  code: code,
  questrial: questrial,
};

const style = {
  theme: "dark",
  neutral: "slate",
  brand: "blue",
  accent: "cyan",
  solid: "color",
  solidStyle: "flat",
  border: "rounded",
  surface: "filled",
  transition: "all",
  scaling: "100",
};

const dataStyle = {
  variant: "gradient",
  mode: "categorical",
  height: 24,
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false,
  },
};

export { fonts, style, dataStyle };
