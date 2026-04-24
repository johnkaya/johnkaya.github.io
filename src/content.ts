// ─────────────────────────────────────────────────────────────────────────────
// src/content.ts — edit this file to update all site content.
// No need to touch any component code.
// ─────────────────────────────────────────────────────────────────────────────

export interface Link {
  label: string;
  url: string;
}

export interface ExperienceItem {
  company: string;
  url: string;
  role: string;
  dates: string;
  /** One sentence on what the team owned — omit if not useful */
  context?: string;
  /** Follow the framing in the spec: Verb → technical thing → scope/stakes → outcome */
  bullets: string[];
  links?: Link[];
  tech?: string[];
}

export interface Project {
  name: string;
  /** One-line description shown below the project name */
  description: string;
  /** 2–4 sentences: what it does, why you built it, what you learned */
  details: string;
  tech: string[];
  links: Link[];
}

export interface ContactInfo {
  email: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  bluesky?: string;
  scholar?: string;
}

const siteContent = {
  // ── Identity ────────────────────────────────────────────────────────────────
  name: "John Kaya",

  tagline: "Software Engineer | Backend & ML Systems",

  // ── Intro (2–3 sentences, 40–60 words) ──────────────────────────────────────
  intro:
    "I'm a software engineer with a background in data science and econometrics. " +
    "I care about the seam between ML and production, building data and ML systems that actually ship and hold up under real traffic. " +
    "Looking for backend, data, or ML engineering roles alongside people who care about getting things right.",

  // ── About (~100–150 words) ───────────────────────────────────────────────────
  about:
    "I'm a software engineer with five years of experience across software engineering and data science. " +
    "My background in econometrics shapes how I approach problems, rigorously, with a bias toward understanding the data before the model. \n\n " +
    "I started at PCCI as a data and applied scientist, working on model evaluation, feature engineering, data visualization, and end-to-end ML pipelines. " +
    "That work taught me how models get built, but it left me curious about how they actually run in production. " +
    "I moved into software engineering, where I now work on ETL pipelines, APIs, CI/CD workflows, and distributed systems with event-driven architectures. " +
    "I'm strongest when a problem needs both sides. \n\n" +
    "Before PCCI, I worked on an academic research project predicting wage premiums for AI-complementary skills in the US labor market. " +
    "I've also taken on freelance work ranging from debugging AI-generated code to building reporting pipelines.",

  // ── Experience ───────────────────────────────────────────────────────────────
  experience: [
    {
      company: "PCCI",
      url: "https://pccinnovation.org/",
      role: "Software Engineer",
      dates: "Mar. 2023 – Present",
      context: "Healthcare AI organization building predictive models and data platforms to improve care for underserved populations.",
      bullets: [
        "Build microservices and ETL pipelines that move data between internal systems and downstream ML consumers, and maintain the ML pipelines that run on top. Own the CI/CD and release process. Most recent build is a notification service that centralizes status reporting across pipelines, replacing per-pipeline logic with a single service that fans out to Teams and email. Stack is Python on Azure.",
      ],
      tech: ["Python", "Pydantic", "FastAPI", "Docker", "Redis", "CI/CD", "Azure"],
    },
    {
      company: "PCCI",
      url: "https://pccinnovation.org/",
      role: "Data and Applied Scientist",
      dates: "Nov. 2021 – Feb. 2023",
      bullets: [
        "Worked on clinical prediction models alongside the data science team, covering model evaluation, feature engineering, and stakeholder-facing visualizations. Built the end-to-end pipeline that moved a model to production, handling ingestion, preprocessing, inference, and output. One feature engineering effort fed a model that shipped years later, with roughly 40% of its features coming from that work. Stack was Python and pandas."
      ],
      links: [],
      tech: ["Python", "pandas", "matplotlib", "scikit-learn", "EHR", "EPIC", "SAP HANA"]
    },
    {
      company: "Self-Employed",
      url: "",
      role: "Software Engineer",
      dates: "Feb. 2021 – Nov. 2021",
      bullets: [
        "Took on contract work through Upwork across a mix of projects, earning Top Rated status. Work ranged from refactoring a reporting pipeline for a client and communicating the changes directly to executives, to debugging AI-generated algorithm and data structure code. One project involved translating natural language sentences into nested functional Python expressions for an AI research dataset, using a provided DSL. The variety was the point, and the freelance work was where I had the most fun.",
      ],
      links: [],
      tech: ["Python"]
    },
  ] as ExperienceItem[],

  // ── Projects ─────────────────────────────────────────────────────────────────
  projects: [
    {
      name: "Usability Drivers of VA PTSD Mobile Applications",
      description: "NLP + SEM study identifying what drives adoption of VA mental-health apps. Manuscript in preparation.",
      details:
        "Applied zero-shot classification to extract user-experience factors from app reviews, then modeled " +
        "relationships between those factors and app usability scores using Structural Equation Modeling (SEM). " +
        "The goal was to surface evidence-backed adoption drivers for VA mental-health apps, where low engagement " +
        "has real clinical stakes.",
      tech: ["Python", "Zero-shot Classification", "SEM", "statsmodels", "NLP", "Hugging Face"],
      links: [
        // { label: "GitHub", url: "https://github.com/johnkaya/TODO" },
        // { label: "Manuscript", url: "https://..." },
      ],
    },
    {
      name: "Human vs. AI: Returns to Human Skills",
      description: "Econometric study quantifying AI-complementary skill wage premiums using ACS, BLS, and O*NET data.",
      details:
        "Built OLS regression models with state fixed effects to estimate the wage premium associated with " +
        "AI-complementary skills, such as analytical reasoning, STEM knowledge, and similar human capabilities. " +
        "Surfaced a 42.6% wage premium for analytical roles and a 37.4% " +
        "premium for STEM skills relative to AI-substitutable occupations.",
      tech: ["Python", "pandas", "statsmodels", "OLS regression", "ACS / BLS / O*NET"],
      links: [
        // { label: "GitHub", url: "https://github.com/johnkaya/TODO" },
      ],
    },
  ] as Project[],

  // ── Contact ───────────────────────────────────────────────────────────────────
  contact: {
    email: "johnkayatx@gmail.com",
    linkedin: "https://linkedin.com/in/alirkaya",
    github: "https://github.com/alirkaya",
    twitter: "",   // leave empty to hide
    bluesky: "",   // leave empty to hide
    scholar: "",   // leave empty to hide
  } as ContactInfo,

  // ── Resume ────────────────────────────────────────────────────────────────────
  /** Place your PDF at public/resume.pdf — it will be served at /resume.pdf */
  resumeUrl: "/resume.pdf",

  // ── Site meta ─────────────────────────────────────────────────────────────────
  siteUrl: "https://johnkaya.github.io",
  metaDescription:
    "John Kaya — software engineer specializing in backend systems and ML pipelines, based in Dallas, TX.",
};

export default siteContent;
