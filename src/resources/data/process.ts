export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Assessment",
    description:
      "We analyze your current infrastructure, identify pain points, and define clear objectives aligned with your business goals.",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description:
      "Our architects design a tailored technology roadmap with milestones, timelines, and resource allocation.",
  },
  {
    number: "03",
    title: "Implementation & Deployment",
    description:
      "We execute the plan with minimal disruption, deploying solutions using industry best practices and automation.",
  },
  {
    number: "04",
    title: "Monitoring & Optimization",
    description:
      "Continuous monitoring, proactive maintenance, and ongoing optimization ensure peak performance and reliability.",
  },
];
