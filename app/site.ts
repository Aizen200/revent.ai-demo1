// Imagery comes from the Axonix Framer template (axonix.framer.ai) and is
// loaded from its host — license or replace these before going live.
const img = (id: string) => `https://framerusercontent.com/images/${id}`;

export const BRAND = "Revent.ai";

// Placeholder — replace with the real enquiry address.
export const CONTACT_EMAIL = "hello@revent.ai";

export const images = {
  heroBg: img("CXf1VtliCLhgE72rnxykPb20LI8.png"),
  hands: img("G0SpZp0WpTBVplZfXSIJemcW0o.png"),
  cubes: img("MSeK5W7fBYbdR7MTmXOXfO9sQE8.png"),
  handshake: img("AeD4G2F6xtDTfPZxF3cBhE7iaE.png"),
  footerBg: img("u57K7Fq0qMUmxKlucOIkzn6tRPk.png"),
};

export const navLinks = [
  { href: "#about", label: "About us" },
  { href: "#solutions", label: "Solutions" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#why-us", label: "Why Us" },
  { href: "#process", label: "How We Work" },
  { href: "#contact", label: "Contact" },
];

export const industries = [
  "Textile Trading",
  "Cement Manufacturing",
  "Logistics",
  "Shipping",
  "EXIM Facilitation",
];

export const stats = [
  { value: "3", suffix: "+", label: "Industries served" },
  { value: "3", suffix: "", label: "Countries delivered in" },
  { value: "3", suffix: "", label: "Platforms: desktop, Android, iOS" },
];

export const solutions = [
  {
    icon: img("LzPBtaHdymAROYB08IBc75GUdqY.svg"),
    title: "Business operations",
    description:
      "Track information from an operating lens not an accounting lens, automate repetitive manual processes such as quotations, purchase orders, invoices, delivery documents, receipts generation.",
  },
  {
    icon: img("ZQ9LRkDUzuQmxgdHJQPqanCyMDI.svg"),
    title: "Inventory and workflow management",
    description:
      "Automate product cataloguing, sub inventory management, end-to-end tracking from raw materials to finished goods, avoid duplicate billing, missing inventory etc. Deploy AI to generate more effective product images for sales and marketing.",
  },
  {
    icon: img("iQSfPi1dWWpgZ9D8UHbgEo7DyM.svg"),
    title: "Workforce applications",
    description:
      "Manage business operations efficiently with systems that track ongoing orders, work in progress etc with simple interfaces for employees to use to their aid.",
  },
  {
    icon: img("S7cumS8E2Yglc5jE9tHBvTzuk.svg"),
    title: "Management reporting",
    description:
      "Set up dashboards to track key business metrics, key client updates and anything that makes your business tick.",
  },
];

export const automations = [
  "Quotations",
  "Purchase orders",
  "Invoices",
  "Delivery documents",
  "Receipts",
  "Product cataloguing",
  "Sub inventory management",
  "Order tracking",
  "Dashboards",
];

export const caseStudies = [
  {
    name: "Textile Business",
    location: "Mumbai, India",
    image: img("GyGy9tdLhGReRc1wiQfUj7GHQY.png"),
    description:
      "Built a custom MIS for textile traders based in Mumbai, India to tackle challenges such as raw material accounting, design management, packaging and documentation, order tracking, customer invoicing etc.",
    challenges: [
      "Raw material accounting",
      "Design management",
      "Packaging & documentation",
      "Order tracking",
      "Customer invoicing",
    ],
  },
  {
    name: "Cement Manufacturers",
    location: "Senegal, Africa",
    image: img("nMPpbIPs8beEk0SdtFkFUU24.png"),
    description:
      "Built a custom MIS for a cement manufacturing plant in Senegal, Africa to tackle inventory formulation management, compliance documentation, plant scheduling, capacity planning, customer flow management etc.",
    challenges: [
      "Inventory formulation",
      "Compliance documentation",
      "Plant scheduling",
      "Capacity planning",
      "Customer flow management",
    ],
  },
  {
    name: "EXIM Facilitators",
    location: "Dubai, UAE",
    image: img("l38NofRiCurjAYNe3fKBaKHpM9k.png"),
    description:
      "Built a custom MIS for an EXIM facilitator based in Dubai, UAE to track containers centrally, generate export documentation, track ongoing bookings and fulfillment, order pipeline management etc.",
    challenges: [
      "Central container tracking",
      "Export documentation",
      "Bookings & fulfillment",
      "Order pipeline management",
    ],
  },
];

export const reasons = [
  {
    icon: img("hWQHlGPYF3FrI8QTwSLZvjuMQ.svg"),
    title: "SME-MSME specific challenges",
    description:
      "Owner managed businesses require tools that aid in easily capturing and organising information for decision making. We focus on simplifying that to reduce load and enable quick decision making.",
  },
  {
    icon: img("niTgfBhce8UUqjXS5klg4rOJg.svg"),
    title: "Unique problems",
    description:
      "Each business has unique problems. We shadow the business to understand the problems that require addressing, to set up systems that actually solve problems and not add to the workload.",
  },
  {
    icon: img("XzS2vY4d5PCcZuXHrpjUaLD0.svg"),
    title: "Employee first UI",
    description:
      "We design interfaces that can easily be operated by blue collar workers as well as white collar workers, to ensure the business does not require a separate data entry clerk to manage systems. This is done by supporting multiple languages, near zero data entry requirement and image based reconfirmation layers.",
  },
];

export const steps = [
  {
    title: "Understand",
    description:
      "We shadow your team to understand existing workflows, identify challenges, and uncover opportunities for improvement.",
  },
  {
    title: "Design",
    description:
      "We design a tailored solution while minimising disruption to your day-to-day operations.",
  },
  {
    title: "Test",
    description:
      "We test the system against real-world scenarios to ensure it's ready for everyday use.",
  },
  {
    title: "Implement",
    description:
      "We work alongside your team during rollout, providing hands-on training to ensure a smooth transition.",
  },
  {
    title: "Refine",
    description:
      "We continuously evolve the software to accommodate changing workflows, new requirements, and business growth.",
  },
];
