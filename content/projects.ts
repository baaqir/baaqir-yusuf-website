export type Project = {
  name: string;
  year: string;
  blurb: string;
  stack: string[];
  href?: string;
  status?: "Live" | "Archived" | "WIP" | "Coming soon";
};

export const projects: Project[] = [
  {
    name: "Scout",
    year: "2026",
    blurb:
      "A CLI that scans GitHub, package registries, job boards, and other intent signals to surface companies that could use better API tooling. From there it researches each prospect, scores them, finds the right contacts to reach out to, and drafts personalized outreach. I built it for my role at Stainless, where it's been a core driver of the results I've put up.",
    stack: ["Python", "Claude Code"],
    status: "Live",
    href: "https://company-finder-psi.vercel.app/settings",
  },
  {
    name: "Yield",
    year: "2026",
    blurb:
      "A personal financial planning calculator that models every dial that affects your net worth, including accounts, real estate, startup equity, debts, and taxes. It shows how each decision shifts your trajectory from today through retirement. Runs Monte Carlo simulations against a full US tax engine, with named profiles for modeling life paths side by side.",
    stack: ["Python", "Next.js"],
    status: "WIP",
  },
  {
    name: "Lotus",
    year: "2026",
    blurb:
      "A web app that turns any property address into a complete investment underwrite in under a minute, with STR and LTR projections, cash flow, IRR, and rent comps.",
    stack: ["Python", "Next.js"],
    status: "Live",
    href: "https://rentalcalc-web.vercel.app/",
  },
  {
    name: "Roam",
    year: "2026",
    blurb:
      "An AI travel planner that builds detailed day-by-day itineraries with transparent cost breakdowns. Pick a city, travel style, and group size, and you'll get a fully editable trip plan in seconds, covering flights, lodging, meals, and activities.",
    stack: ["Next.js", "Claude API", "Supabase"],
    status: "Live",
    href: "https://roam-dusky.vercel.app/",
  },
  {
    name: "Pulse",
    year: "2026",
    blurb:
      "A fitness and health tracker that keeps me accountable, with workout suggestions, calorie tracking, and an AI health coach, all in one clean dashboard.",
    stack: ["Next.js", "HealthKit", "Supabase"],
    status: "WIP",
  },
  {
    // TODO: rename, working title
    name: "Outbound Stack",
    year: "2026",
    blurb:
      "A set of materials on how to do modern outbound and drive interest in any product or service. Pulls from everything I've learned building my own companies and driving growth across my career, covering infrastructure, enrichment pipelines, outreach strategies, and the GTM tactics that actually work.",
    stack: ["Playbook", "Research"],
    status: "WIP",
  },
  // TODO: Add selected films / direction reel here.
  // TODO: Add additional apps as they're ready.
];
