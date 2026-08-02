export const personalInfo = {
  name: "Mohd Afzal",
  firstName: "Mohd",
  lastName: "Afzal",
  title: "Software Engineer",
  positioning:
    "I build AI agent infrastructure and full-stack Web3 platforms — from Go backends and multi-tenant agent systems to the interfaces on top of them.",
  location: "Bengaluru, India",
  timezone: "Asia/Kolkata",
  email: "afzalnaved0000@gmail.com",
  phone: "+91 95488 73450",
  currentRole: "Software Engineer at Hashed Emergent",
  availability: "Open to new opportunities",
  yearsExperience: "2.5+",
  resumeUrl: "/resume.pdf",
  bio: [
    "I'm a software engineer in Bengaluru working on the infrastructure layer of AI and Web3 products. At Hashed Emergent — the venture arm of Hashed — I build a multi-tenant agent platform that runs fifteen domain agents in production, and the Go backend behind India Blockchain Week.",
    "Most of what I enjoy sits below the interface: model routing that cuts cost without cutting quality, workers that survive a restart mid-send, search that stays fast as the table grows. I care about systems that hold up when nobody is watching them.",
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
    items: ["Go", "TypeScript", "JavaScript", "Python", "SQL", "C/C++"],
  },
  {
    category: "Backend",
    items: [
      "Fiber",
      "Node.js",
      "Express",
      "REST APIs",
      "PostgreSQL",
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
      "Framework7",
      "Redux",
      "TanStack Query",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    category: "AI & Infra",
    items: [
      "Claude API",
      "OpenAI",
      "OpenRouter",
      "Ollama",
      "Model Context Protocol",
      "Agent Orchestration",
      "OpenTelemetry",
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
    title: "AI Agent Platform",
    year: "2026",
    role: "Hashed Emergent",
    summary:
      "A multi-tenant platform running fifteen domain agents as isolated Telegram bots over shared PostgreSQL. A twelve-stage task pipeline, fifty-eight typed capabilities, and sub-agent skills exposed over Model Context Protocol.",
    metrics: [
      { value: "15", label: "agents in production" },
      { value: "30x", label: "cheaper sub-agent tier" },
      { value: "~5 min", label: "config to live agent" },
    ],
    tags: ["TypeScript", "PostgreSQL", "MCP", "Claude API", "Docker", "OpenTelemetry"],
  },
  {
    title: "India Blockchain Week",
    year: "2025—2026",
    role: "Hashed Emergent",
    summary:
      "The platform behind India's flagship Web3 conference: a Go and Fiber backend, a React Telegram Mini App with quests and networking, an operator console, and the public conference site.",
    metrics: [
      { value: "3,500+", label: "attendees served" },
      { value: "218", label: "REST endpoints" },
      { value: "33", label: "Postgres tables" },
    ],
    tags: ["Go", "Fiber", "PostgreSQL", "Redis", "React", "Next.js"],
    link: "https://indiablockchainweek.com",
    linkLabel: "indiablockchainweek.com",
  },
  {
    title: "Orviq",
    year: "2026",
    role: "Independent",
    summary:
      "A creator campaign marketplace settling payouts in USDC on Stellar, plus a job-discovery pipeline that scrapes and enriches startup hiring posts using deterministic matching and SEC EDGAR filings.",
    metrics: [
      { value: "27", label: "Postgres tables" },
      { value: "60", label: "API routes" },
      { value: "6", label: "pipeline phases" },
    ],
    tags: ["Next.js", "Supabase", "Drizzle", "Prisma", "Telegram", "Apify"],
    link: "https://orviq.xyz",
    linkLabel: "orviq.xyz",
  },
];

/** Earlier work — rendered as a compact list. */
export const archiveProjects: Project[] = [
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
  {
    title: "MOYE",
    year: "2024",
    role: "Meme Coin",
    summary: "Community-driven token site for a viral Indian meme, built for launch traffic.",
    metrics: [],
    tags: ["Next.js", "Tailwind", "Web3"],
    link: "https://moyerevamped-sooty.vercel.app/",
    preview: "/moye-meme-sm.jpg",
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
    note: "VC arm of Hashed; organizer of India Blockchain Week",
    location: "Bengaluru, India",
    description:
      "Building a multi-tenant AI agent platform and the Go backend for India Blockchain Week. Cut LLM cost with a purpose-tiered model router using provider fallback and mid-turn escalation, and shipped the Telegram Mini App, conference sites and a crash-safe bulk notification worker.",
    skills: ["Go", "TypeScript", "PostgreSQL", "Redis", "MCP", "Docker", "React"],
  },
  {
    period: "Jun 2025 — May 2026",
    start: "Jun 2025",
    end: "May 2026",
    title: "Software Engineer",
    company: "DroomDroom",
    companyUrl: "https://droomdroom.com/",
    note: "Contract",
    location: "New York, NY · Remote",
    description:
      "Built crypto analytics products — a real-time token price tracker, a forecasting predictions engine, and a token-to-fiat conversion tool — alongside Web3 intelligence platforms covering fundraising analytics, ETF tracking, mining ROI and cross-asset holder dashboards.",
    skills: ["Next.js", "React", "Data Analytics", "Web3"],
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
