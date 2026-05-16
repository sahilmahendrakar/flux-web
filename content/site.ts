/**
 * Shared site content and environment-driven URLs for the Flux marketing page.
 */

/** Fallback DMG (Flux 0.1.1 arm64). Override with NEXT_PUBLIC_FLUX_DOWNLOAD_URL. */
export const DEFAULT_DOWNLOAD_URL =
  "https://github.com/sahilmahendrakar/flux-web/releases/download/v0.1.1/Flux-0.1.1-arm64.dmg";

export const DEFAULT_GITHUB_URL = "https://github.com/sahilmahendrakar/flux-web";

export const DEFAULT_DEMO_VIDEO_ID = "uh_haSxyhyw";

export const siteMetadata = {
  title: "Flux — AI-native project management for software development",
  description:
    "Flux is AI-native project management for software development, bringing planning docs, kanban, coding agents, git worktrees, team sync, and automation into one workspace.",
} as const;

/** Required homepage copy — use verbatim across the site. */
export const requiredCopy = {
  category: "AI-native project management for software development.",
  heroBody:
    "Flux brings planning docs, kanban, coding agents, git worktrees, team sync, and automation into one project management workspace, so a single engineer can plan work, delegate to agents, review progress, and ship with confidence.",
  promiseLine:
    "Turn product intent into planned, delegated, tracked, reviewed engineering work.",
} as const;

export type SiteUrls = {
  downloadUrl: string;
  githubUrl: string;
  demoVideoId: string;
  demoEmbedSrc: string;
};

export function getSiteUrls(): SiteUrls {
  const downloadUrl =
    process.env.NEXT_PUBLIC_FLUX_DOWNLOAD_URL ?? DEFAULT_DOWNLOAD_URL;
  const githubUrl =
    process.env.NEXT_PUBLIC_FLUX_GITHUB_URL ?? DEFAULT_GITHUB_URL;
  const demoVideoId =
    process.env.NEXT_PUBLIC_FLUX_DEMO_VIDEO_ID ?? DEFAULT_DEMO_VIDEO_ID;
  const demoEmbedSrc = `https://www.youtube-nocookie.com/embed/${demoVideoId}?modestbranding=1&rel=0`;

  return { downloadUrl, githubUrl, demoVideoId, demoEmbedSrc };
}

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Demo", href: "#demo" },
  { label: "GitHub", href: "#github" },
  { label: "FAQ", href: "#faq" },
];

export const heroContent = {
  eyebrow: "AI-native project management",
  headline: requiredCopy.category,
  body: requiredCopy.heroBody,
  promiseLine: requiredCopy.promiseLine,
  trustRow: [
    "Planning docs + kanban",
    "Coding agents + isolated worktrees",
    "Team sync + automations",
  ],
} as const;

export const ctaLabels = {
  downloadMac: "Download for macOS",
  watchDemo: "Watch demo",
  viewGithub: "View on GitHub",
} as const;

export const demoSection = {
  headline: "See Flux in motion.",
  steps: [
    "Plan from docs and project context.",
    "Delegate scoped tasks to agents.",
    "Track, review, and ship from one place.",
  ],
} as const;

export type WorkflowStep = {
  id: string;
  title: string;
  description: string;
};

export const howItWorksSteps: WorkflowStep[] = [
  {
    id: "plan",
    title: "Plan",
    description:
      "Capture product intent in synced docs, then use the planning assistant to turn it into scoped engineering tasks.",
  },
  {
    id: "delegate",
    title: "Delegate",
    description:
      "Assign tasks to coding agents with the right project context, terminal, and isolated git worktree.",
  },
  {
    id: "track",
    title: "Track",
    description:
      "Use the board to see what is running, blocked, waiting for input, ready for review, or done.",
  },
  {
    id: "review",
    title: "Review",
    description:
      "Inspect outputs, diffs, PRs, handoffs, and team updates before shipping.",
  },
];

export type WorkflowPillar = {
  id: string;
  label: string;
  tagline: string;
};

export const workflowPillars: WorkflowPillar[] = [
  {
    id: "plan",
    label: "Plan the work",
    tagline: "Synced docs, planning assistant, and scoped task breakdowns.",
  },
  {
    id: "delegate",
    label: "Delegate the work",
    tagline: "Assign tasks to coding agents with isolated worktrees.",
  },
  {
    id: "manage",
    label: "Manage the work",
    tagline: "Kanban state, needs-input signals, labels, and team sync.",
  },
  {
    id: "ship",
    label: "Ship with confidence",
    tagline: "Keep intent, execution, progress, and review in one workspace.",
  },
];

export type FeatureBlock = {
  id: string;
  title: string;
  message: string;
  proofPoints: string[];
};

export const featureBlocks: FeatureBlock[] = [
  {
    id: "planning",
    title: "Planning workspace",
    message: "Turn rough product ideas into executable engineering plans.",
    proofPoints: [
      "Synced planning docs live beside the project.",
      "Planning assistant can inspect context and help split work.",
      "Decisions and task breakdowns stay attached to execution.",
    ],
  },
  {
    id: "kanban",
    title: "Kanban command center",
    message: "Manage AI-assisted work like a real engineering project.",
    proofPoints: [
      "Backlog, in-progress, needs-input, review, and done flows.",
      "Labels, blockers, assignees, filters, and task details.",
      "Board state reflects what needs attention.",
    ],
  },
  {
    id: "agents",
    title: "Delegated agent work",
    message: "Give each task to an agent without losing control.",
    proofPoints: [
      "Task-specific agent sessions.",
      "Supports multiple agent CLIs.",
      "Each session keeps context tied to the task.",
    ],
  },
  {
    id: "worktrees",
    title: "Isolated worktrees",
    message: "Every task gets a clean workspace.",
    proofPoints: [
      "Git worktrees per task.",
      "Agents do not stomp the main checkout.",
      "Branch and PR flows map back to each task.",
    ],
  },
  {
    id: "team",
    title: "Team sync and automations",
    message: "Keep humans, agents, and project state aligned.",
    proofPoints: [
      "Cloud/team boards for shared visibility.",
      "Automation for status transitions and unblocked work.",
      "Room for PR, handoff, and review workflows.",
    ],
  },
];

export const supportedIntegrations = [
  "Claude Code",
  "Codex",
  "Cursor Agent",
  "GitHub",
  "Git worktrees",
  "Planning docs",
  "Team sync",
] as const;

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "What is Flux?",
    answer:
      "Flux is AI-native project management for software development — a workspace where you plan work, delegate to coding agents, track progress on a kanban board, and review outcomes before shipping.",
  },
  {
    question: "Is Flux a project management tool or an agent runner?",
    answer:
      "Both, integrated. Flux is built around the full loop: plan from docs, delegate scoped tasks to agents with isolated worktrees, track state on a board, and review diffs and PRs — not just parallel terminal sessions.",
  },
  {
    question: "Which agents does Flux support?",
    answer:
      "Flux is designed for CLI-based coding agents you already use, including Claude Code, Codex, and Cursor-style agents. Support varies by integration maturity.",
  },
  {
    question: "Does Flux use git worktrees?",
    answer:
      "Yes. Each delegated task can run in its own git worktree so agents do not collide on your main checkout.",
  },
  {
    question: "Is my code sent to Flux?",
    answer:
      "Flux runs against your local repositories. Your code stays on your machine unless you explicitly use cloud/team features that sync project state.",
  },
  {
    question: "Is Flux local-first?",
    answer:
      "Yes. The core workflow runs on your machine with real repos. Cloud and team sync are optional where collaboration helps.",
  },
  {
    question: "Does it work with existing repos?",
    answer:
      "Yes. Point Flux at repositories you already have on disk.",
  },
  {
    question: "Is there a cloud/team mode?",
    answer:
      "Team sync and shared boards are part of the broader vision. Check current release notes for what is available in your build.",
  },
  {
    question: "Which platforms are supported?",
    answer:
      "macOS is the primary download today. Other platforms may follow — see the download page and GitHub for the latest.",
  },
  {
    question: "Is Flux open source?",
    answer:
      "View the repository on GitHub for license and contribution details.",
  },
];

export const finalCta = {
  headline: "Turn intent into shipped software.",
} as const;

export const footerContent = {
  tagline: "AI-native project management for software development.",
  copyright: `© ${new Date().getFullYear()} Flux`,
} as const;
