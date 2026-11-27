export type ProjectTheme = "chatbot" | "crm" | "family" | "training" | "secure-chat" | "stocks" | "portfolio";
export type Project = {
  slug: string;
  name: string;
  subtitle: string;
  category: string;
  theme: ProjectTheme;
  role: string;
  year?: string;
  summary: string;
  description: string;
  highlights: string[];
  technologies: string[];
  filters: string[];
};

// Project claims are supplied by the portfolio owner. Visuals are original illustrations.
export const projects: Project[] = [
  {
    slug: "ai-chatbot-saas", name: "AI Chatbot SaaS Platform", category: "AI & knowledge platforms", theme: "chatbot", role: "Full-Stack Developer",
    subtitle: "Your knowledge. A conversation away.",
    summary: "From websites and documents to AI assistants that answer with context and cite their sources.",
    description: "Built a multi-tenant platform that lets teams create AI chatbots from their websites, PDFs, and text documents, then publish them through a shareable chat page or an embeddable website widget.",
    highlights: ["Implemented a retrieval-augmented generation (RAG) pipeline combining semantic and keyword search to find relevant passages, stream answers, and cite original sources.", "Developed a Next.js chatbot studio for managing knowledge sources, configuring models and bot behavior, testing responses in a playground, and customizing the widget before publishing.", "Built NestJS APIs for workspace management, role-based access control, conversation history, and AI usage tracking.", "Supported publishing through a shareable chat page and an embeddable website widget."],
    technologies: ["Next.js", "React", "TypeScript", "NestJS", "PostgreSQL", "TypeORM", "OpenAI API"], filters: ["AI & SaaS", "Full stack", "Next.js"],
  },
  {
    slug: "stayshare-crm", name: "StayShare Intellishare", category: "CRM & sales reporting", theme: "crm", role: "Full-Stack Developer",
    subtitle: "Hospitality operations, connected.",
    summary: "A connected workspace for customer relationships, reservations, sales workflows, and reporting.",
    description: "Developed a full-stack CRM platform for vacation ownership and hospitality operations, centralizing customer contacts, sales records, reservations, appointments, and gift certificates.",
    highlights: ["Implemented reporting dashboards, PDF exports, and role-based permissions.", "Built recurring payment tracking alongside reservation, appointment, and sales management.", "Integrated GoHighLevel and Acuity Scheduling to synchronize customer information, appointments, and sales workflows.", "Connected external services through APIs, webhooks, and scheduled jobs."],
    technologies: ["React", "Redux Toolkit", "Node.js", "Express.js", "MySQL", "Sequelize", "Knex.js", "Material UI", "Tailwind CSS", "Highcharts"], filters: ["Full stack"],
  },
  {
    slug: "community-family-tree", name: "Community Tree", category: "Family & community management", theme: "family", role: "Full-Stack Developer",
    subtitle: "Every connection has a story.",
    summary: "Community records and multigenerational family relationships, made visual and easy to explore.",
    description: "Developed a web application for organizing communities, managing family records, and exploring family information through visual charts.",
    highlights: ["Implemented member profile management and parent-child and spouse relationships.", "Built REST APIs backed by a relational database for community and family records.", "Developed ancestor and descendant retrieval using a closure-table structure.", "Used visual family charts to explore multigenerational family data."],
    technologies: ["React", "Node.js", "Express.js", "MySQL", "Sequelize", "Knex.js", "Tailwind CSS", "Family Chart"], filters: ["Full stack"],
  },
  {
    slug: "intellishare", name: "Intellishare AI", category: "Corporate website & lead generation", theme: "training", role: "Frontend Developer",
    subtitle: "A clearer introduction. A better connection.",
    summary: "A responsive web presence bringing solutions, resources, enquiries, and demo booking together.",
    description: "Developed a responsive corporate website showcasing Intellishare AI’s solutions for the vacation ownership industry.",
    highlights: ["Built solution pages, dynamic blog and case study pages, and training resources.", "Implemented validated enquiry forms and embedded demo booking.", "Optimized images and responsive video delivery with lazy loading.", "Added social-sharing metadata to support content presentation across devices."],
    technologies: ["Next.js", "React", "Tailwind CSS", "React Hook Form", "Axios"], filters: ["Websites", "Next.js"],
  },
  {
    slug: "secure-chat-platform", name: "Chat Platform", category: "Secure user & profile management", theme: "secure-chat", role: "Full-Stack Developer",
    subtitle: "Built around identity. Designed for control.",
    summary: "Account and profile management with secure sessions, user discovery, and blocking controls.",
    description: "Developed a full-stack application featuring account registration, secure login, editable profiles, user discovery, and blocking controls.",
    highlights: ["Implemented JWT authentication and Argon2id password hashing.", "Built rotating refresh tokens, session revocation, and CSRF protection.", "Added Redis-backed authentication rate limiting.", "Developed a modular NestJS backend with protected REST APIs and cursor-based pagination for user search."],
    technologies: ["Next.js", "React", "TypeScript", "NestJS", "PostgreSQL", "Prisma", "Redis", "JWT", "Argon2id"], filters: ["Full stack", "Next.js"],
  },
  {
    slug: "nse-stock-analysis", name: "NSE Trade Value", category: "Market analysis & live data", theme: "stocks", role: "Full-Stack Developer",
    subtitle: "Market complexity. A clearer view.",
    summary: "NSE market activity and NIFTY options data, connected through scheduled collection and live updates.",
    description: "Developed a stock market analytics dashboard for monitoring NSE market activity and NIFTY options data.",
    highlights: ["Implemented option-chain tables, call and put open-interest summaries, and trading volume views.", "Built advance-decline indicators, institutional trading activity, and market turnover views.", "Integrated scheduled market-data collection, historical storage, and expiry-date synchronization.", "Delivered live option-chain updates through Socket.IO."],
    technologies: ["React", "Node.js", "Express.js", "MySQL", "Sequelize", "Knex.js", "Redis", "Socket.IO", "JWT", "Node Cron"], filters: ["Full stack", "Real time"],
  },
  {
    slug: "personal-portfolio", name: "Personal Portfolio", category: "Personal website", theme: "portfolio", role: "Frontend Developer", year: "2023",
    subtitle: "A personal corner of the web.", summary: "A responsive React portfolio with a straightforward, content-driven approach.",
    description: "Built a responsive React portfolio with content managed through JSON, allowing content updates without changes to interface code.",
    highlights: ["Built a responsive interface for mobile and desktop visitors.", "Managed portfolio content through JSON.", "Optimized loading performance.", "Deployed on Vercel with continuous integration."],
    technologies: ["React", "Tailwind CSS", "Vercel"], filters: ["Websites"],
  },
];
