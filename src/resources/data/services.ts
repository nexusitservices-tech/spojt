export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    icon: "Cloud",
    title: "Cloud Infrastructure",
    description:
      "Architect, deploy, and manage scalable cloud environments on AWS, Azure, and Google Cloud with 99.99% uptime SLAs.",
    features: ["Multi-cloud strategy", "Auto-scaling & load balancing", "DevOps automation", "Cost optimization"],
  },
  {
    icon: "Shield",
    title: "Cybersecurity",
    description:
      "End-to-end security solutions protecting your data, applications, and networks against evolving cyber threats.",
    features: ["24/7 SOC monitoring", "Penetration testing", "Compliance & audit", "Zero-trust architecture"],
  },
  {
    icon: "Wrench",
    title: "Managed IT Services",
    description:
      "Proactive IT management and support that keeps your infrastructure running smoothly while reducing operational costs.",
    features: ["Helpdesk support", "Infrastructure monitoring", "Patch management", "Vendor management"],
  },
  {
    icon: "ChartBar",
    title: "Data & Analytics",
    description:
      "Transform raw data into actionable insights with modern data pipelines, dashboards, and business intelligence tools.",
    features: ["Data warehousing", "Real-time dashboards", "Predictive analytics", "ETL/ELT pipelines"],
  },
  {
    icon: "Code",
    title: "Custom Software",
    description:
      "Tailored web, mobile, and enterprise applications built with modern frameworks and a focus on scalability.",
    features: ["Web & mobile apps", "API development", "Legacy modernization", "QA & testing"],
  },
  {
    icon: "Headset",
    title: "IT Consulting",
    description:
      "Strategic technology guidance to help you make informed decisions about digital transformation and IT investments.",
    features: ["Digital transformation", "Technology roadmaps", "IT strategy", "Vendor evaluation"],
  },
];
