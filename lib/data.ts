export const personalInfo = {
  name: "Mohd Afzal",
  title: "Software Engineer",
  location: "Bengaluru, India",
  email: "afzalnaved0000@gmail.com",
  bio: [
    "I am a dedicated Software Engineer focused on building scalable, high-performance web applications. I specialize in modern frontend architectures and full-stack development.",
    "My engineering philosophy centers on writing clean, maintainable code and solving complex problems with efficient solutions. I thrive in collaborative environments where innovation and technical excellence are valued.",
  ],
  social: {
    github: {
      url: "https://github.com/mohdafzal11",
      handle: "mohdafzal11",
    },
    linkedin: {
      url: "https://www.linkedin.com/in/mohd-afzal-6baa86205/",
      handle: "mohd-afzal",
    },
    twitter: {
      url: "https://x.com/0x_Afzal",
      handle: "@0x_Afzal",
    },
  },
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Go",
      "Python",
      "Django",
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "GraphQL",
      "Serverless",
    ],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo", "iOS Integration", "Android"],
  },
  {
    category: "DevOps",
    items: ["Git", "Docker", "AWS", "Vercel CI/CD"],
  },
];

export const projects = [
  {
    title: "MOYE - Meme Coin",
    description:
      "Moye is an Indian frog who first gained fame through viral memes. A community-driven crypto project with engaging UI.",
    tags: ["Next.js", "Tailwind CSS", "Web3", "Framer Motion"],
    link: "https://moyerevamped-sooty.vercel.app/",
  },
  {
    title: "Dongo.ai - Web3 Research",
    description:
      "Tailored to deliver in-depth analysis, real-time market forecasts, and seamless data integration, Dongo AI elevates strategic decision-making.",
    tags: ["React", "AI Integration", "Data Analytics", "Charts"],
    link: "https://dongo-ai.vercel.app/",
  },
  {
    title: "Claimfinal - Airdrop Finder",
    description:
      "Bankless finds $802 on average in airdrops & more. Search your wallets and set up alerts for unclaimed tokens.",
    tags: ["Web3", "Blockchain", "React", "Notifications"],
    link: "https://claimfinal.vercel.app/",
  },
  {
    title: "ACE.ai",
    description:
      "Practice job interviews and scholarships with our advanced AI. Interactive interview simulation platform.",
    tags: ["AI", "Next.js", "Speech-to-Text", "OpenAI"],
    link: "https://frontend-ace-ai.vercel.app/",
  },
];

export const experiences = [
  {
    period: "Jun 2024 - Present",
    title: "Software Engineer",
    company: "DroomDroom",
    description:
      "Building a suite of user-friendly crypto analytics and intelligence platforms that make Web3 data accessible and actionable. Shipped real-time token price trackers, predictions engine, fundraising analytics platform, ETF trackers, and multi-chain mining ROI calculators.",
    skills: ["Web3", "React", "Next.js", "Data Analytics", "Crypto"],
  },
  {
    period: "Jul 2024 - Jun 2025",
    title: "Software Engineer",
    company: "TIGEST",
    description:
      "Developed social media management software leveraging AI Agents to boost organic content engagement across LinkedIn, Twitter, Threads, Bluesky, Reddit, and Telegram. Solved employee advocacy challenges using AI for B2B SaaS, B2C brands, and Web3 companies.",
    skills: ["AI Agents", "Social Media", "Next.js", "Enterprise Dashboard"],
  },
  {
    period: "Jan 2024 - Jun 2024",
    title: "Junior Software Engineer",
    company: "RevSpire",
    description:
      "Implemented and optimized REST APIs, improving response times by up to 30%. Developed robust backend components integrated with Salesforce. Integrated AI-driven modules to automate workflows.",
    skills: ["REST APIs", "Salesforce", "Backend", "AI Integration", "Agile"],
  },
];

export const COMMANDS = [
  "help",
  "about",
  "projects",
  "skills",
  "experience",
  "contact",
  "clear",
  "whoami",
  "social",
] as const;

export type Command = (typeof COMMANDS)[number];
