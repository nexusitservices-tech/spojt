export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Nexus migrated our entire infrastructure to the cloud in six weeks with zero downtime. Their team was professional, responsive, and genuinely invested in our success.",
    author: "Sarah Mitchell",
    role: "CTO",
    company: "FinTech Solutions Inc.",
  },
  {
    quote:
      "After a ransomware attack, Nexus had us back online within hours. Their cybersecurity team is unmatched — they now manage all our security operations.",
    author: "David Chen",
    role: "VP of Operations",
    company: "Pacific Manufacturing",
  },
  {
    quote:
      "The managed IT service transformed our helpdesk from a bottleneck into a competitive advantage. Response times dropped from hours to minutes.",
    author: "Emily Rodriguez",
    role: "Director of IT",
    company: "Meridian Healthcare",
  },
];
