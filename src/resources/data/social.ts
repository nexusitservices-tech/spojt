export interface SocialLink {
  platform: string;
  href: string;
  icon: "github" | "linkedin" | "twitter";
}

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    href: "#",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    href: "#",
    icon: "linkedin",
  },
  {
    platform: "Twitter",
    href: "#",
    icon: "twitter",
  },
];
