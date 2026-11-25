export const personalInfo = {
  name: "Mohd Afzal",
  firstName: "Mohd",
  lastName: "Afzal",
  title: "Software Engineer",
  positioning:
    "I build backend and full-stack products end to end: Go and PostgreSQL services, the React and Next.js apps on top of them, and the AI agents that work from their data.",
  location: "Bengaluru, India",
  timezone: "Asia/Kolkata",
  email: "afzalnaved0000@gmail.com",
  phone: "+91 95488 73450",
  currentRole: "Software Engineer at Hashed Emergent",
  availability: "Open to new opportunities",
  yearsExperience: "2.5+",
  resumeUrl: "/resume.pdf",
  bio: [
    "I'm a software engineer in Bengaluru. At Hashed Emergent, the venture arm of Hashed, I'm the primary engineer on the platform behind India Blockchain Week: one Go backend serving the conference website, a networking app, a Telegram Mini App, an admin console and a volunteer dashboard.",
    "I like owning a product from the spec to event day. I wrote the spec for IBW Connect, designed it and built it in twelve weeks, then ran it through the conference. I also built our internal AI agent platform, where the lesson was simple: narrow agents on one data source worked, broad ones did not.",
  ],
  social: {
    github: { url: "https://github.com/mohdafzal11", handle: "mohdafzal11", label: "GitHub" },
    linkedin: {
      url: "https://www.linkedin.com/in/mohd-afzal-6baa86205/",
      handle: "mohd-afzal",
      label: "LinkedIn",
    },
    twitter: { url: "https://x.com/0x_Afzal", handle: "0x_Afzal", label: "Twitter" },
  },
};

export const skills = [
  {
    category: "Languages",
    items: ["Go", "TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Backend",
    items: [
      "Fiber",
      "Node.js",
      "Express",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Prisma",
      "Drizzle",
      "Docker",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Capacitor",
      "Framework7",
      "Redux",
      "TanStack Query",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    category: "AI & Tools",
    items: [
      "Claude API",
      "OpenAI",
      "Model Context Protocol",
      "AI Agents",
      "Telegram Bot API",
      "PostHog",
      "CI/CD",
    ],
  },
];

export type Project = {
  title: string;
  year: string;
  role: string;
  summary: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  link?: string;
  linkLabel?: string;
  /** Optional image that springs in on Archive row hover. Data-driven so
   *  Archive never special-cases a project by title. */
  preview?: string;
};

/** Flagship systems — rendered as large cards in Selected Work. */
export const featuredProjects: Project[] = [
  {
    title: "India Blockchain Week",
    year: "2025—2026",
    role: "Hashed Emergent",
    summary:
      "The platform behind India's flagship Web3 conference. One Go and Fiber backend on PostgreSQL and Redis serves the public site, a networking app, a Telegram Mini App, an admin console and a volunteer dashboard, with ticket data arriving in real time through a vendor webhook.",
    metrics: [
      { value: "5", label: "products on one backend" },
      { value: "7", label: "events hosted in 2026" },
      { value: "15", label: "event-week releases, no downtime" },
    ],
    tags: ["Go", "Fiber", "PostgreSQL", "Redis", "React", "Next.js"],
    link: "https://indiablockchainweek.com",
    linkLabel: "indiablockchainweek.com",
  },
  {
    title: "IBW Connect",
    year: "2026",
    role: "Hashed Emergent · Product, design and build",
    summary:
      "The conference networking app, which I specified, designed and built. Attendees log in with their ticket, browse a directory, get suggested matches, chat, book meetings at venue tables and show a digital pass at the door. Web first, with native builds from the same code through Capacitor.",
    metrics: [
      { value: "12", label: "weeks from spec to launch" },
      { value: "31", label: "screens" },
    ],
    tags: ["React", "TypeScript", "TanStack Query", "Capacitor", "Go"],
  },
  {
    title: "AI Agent Platform",
    year: "2026",
    role: "Hashed Emergent",
    summary:
      "A multi-tenant platform running fifteen domain agents as isolated Telegram bots on shared PostgreSQL, with a twelve-stage task pipeline and fifty-nine skills exposed over Model Context Protocol. A dashboard configures, deploys and monitors agents without a code change.",
    metrics: [
      { value: "15", label: "domain agents" },
      { value: "59", label: "skills over MCP" },
      { value: "12", label: "stage task pipeline" },
    ],
    tags: ["TypeScript", "PostgreSQL", "MCP", "Claude API", "Next.js", "Docker"],
  },
];

/** Earlier work — rendered as a compact list. */
export const archiveProjects: Project[] = [
  {
    title: "Orviq",
    year: "2026",
    role: "Independent",
    summary:
      "Creator campaign marketplace settling payouts in USDC on Stellar, plus a job-discovery pipeline for startup hiring posts.",
    metrics: [],
    tags: ["Next.js", "Supabase", "Drizzle"],
    link: "https://orviq.xyz",
  },
  {
    title: "Dongo.ai",
    year: "2025",
    role: "Web3 Research",
    summary: "In-depth market analysis, real-time forecasts and data integration for onchain research.",
    metrics: [],
    tags: ["React", "AI", "Charts"],
    link: "https://dongo-ai.vercel.app/",
    preview: "/dongo-ai-sm.jpg",
  },
  {
    title: "Claimfinal",
    year: "2024",
    role: "Airdrop Finder",
    summary: "Wallet search and alerting for unclaimed token airdrops across chains.",
    metrics: [],
    tags: ["Web3", "React", "Notifications"],
    link: "https://claimfinal.vercel.app/",
    preview: "/claim-final-sm.jpg",
  },
];

export type Experience = {
  period: string;
  start: string;
  end: string;
  title: string;
  company: string;
  companyUrl?: string;
  note?: string;
  location: string;
  description: string;
  skills: string[];
};

export const experiences: Experience[] = [
  {
    period: "Dec 2025 — Present",
    start: "Dec 2025",
    end: "Present",
    title: "Software Engineer",
    company: "Hashed Emergent",
    companyUrl: "https://hashedem.com/",
    location: "Bengaluru, India",
    description:
      "Primary engineer on the Go and PostgreSQL backend behind five India Blockchain Week products. Specified, designed and built the IBW Connect networking app in twelve weeks, and built a multi-tenant AI agent platform running fifteen domain agents with fifty-nine skills over Model Context Protocol.",
    skills: ["Go", "PostgreSQL", "Redis", "React", "Next.js", "TypeScript", "MCP"],
  },
  {
    period: "Jun 2025 — May 2026",
    start: "Jun 2025",
    end: "May 2026",
    title: "Software Engineer",
    company: "DroomDroom",
    companyUrl: "https://droomdroom.com/",
    location: "New York, NY · Remote",
    description:
      "Primary engineer on the data tools of droomdroom.com, a crypto education site with 300,000+ monthly readers. Built and shipped 13 public tools, including a price and market-cap tracker, a token-to-fiat converter, corporate treasury trackers, an ETF tracker, fundraising and token-sales analytics, a mining calculator and price predictions.",
    skills: ["Next.js", "TypeScript", "Prisma", "MongoDB", "Redis", "Docker"],
  },
  {
    period: "Jul 2024 — Jun 2025",
    start: "Jul 2024",
    end: "Jun 2025",
    title: "Software Engineer",
    company: "Tigest",
    companyUrl: "https://tigest.club/",
    location: "Bengaluru, India · Remote",
    description:
      "Built AI-powered social engagement agents with configurable behaviors and a unified scheduler integrating LinkedIn, Twitter, Bluesky and Reddit with automated publishing and enterprise RBAC. Architected community and research intelligence platforms.",
    skills: ["AI Agents", "Next.js", "RBAC", "Social APIs"],
  },
  {
    period: "Jan 2024 — Jun 2024",
    start: "Jan 2024",
    end: "Jun 2024",
    title: "Junior Software Engineer",
    company: "RevSpire",
    companyUrl: "https://revspire.io/",
    note: "Internship",
    location: "Bengaluru, India · Remote",
    description:
      "Implemented and optimized REST APIs, cutting response times up to 30% through query optimization and caching, and integrated Salesforce alongside AI-driven modules for automation and personalization.",
    skills: ["REST APIs", "Salesforce", "Backend", "Agile"],
  },
];

export const education = [
  {
    school: "Graphic Era University",
    degree: "Master of Computer Applications (MCA)",
    grade: "8.20 / 10.0",
    period: "2022 — 2024",
  },
  {
    school: "Dehradun Institute of Technology",
    degree: "Bachelor of Computer Applications (BCA)",
    grade: "8.16 / 10.0",
    period: "2019 — 2022",
  },
];

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
];
