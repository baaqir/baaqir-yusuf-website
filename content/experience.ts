export type Role = {
  company: string;
  title: string;
  location: string;
  start: string;
  end: string;
  href?: string;
  summary: string;
};

export const experience: Role[] = [
  {
    company: "Stainless",
    title: "Founding GTM Engineer",
    location: "New York, NY",
    start: "2025",
    end: "Now",
    href: "https://stainless.com",
    summary:
      "Stainless is the complete API platform that generates robust SDKs, docs, and MCP servers from your OpenAPI spec. Our customers include OpenAI, Anthropic, Cloudflare, Nvidia, Rippling, and many more. I joined as a founding GTM engineer.",
  },
  {
    company: "Jaan Health",
    title: "Growth & GTM Strategy",
    location: "New York, NY",
    start: "2024",
    end: "2025",
    href: "https://phamily.com",
    summary:
      "Jaan Health is an AI care-management platform for primary-care practices, specialty groups, and health systems. They pair a dedicated clinical workforce with the platform to drive better patient outcomes and new revenue for their customers. I spent a year and a half on the growth and GTM team, working across direct sales, channel partnerships, and the strategy behind both.",
  },
  {
    company: "Suora",
    title: "Co-Founder & Managing Partner",
    location: "Raleigh, NC",
    start: "2023",
    end: "2025",
    href: "https://suorastudios.com",
    summary:
      "Suora is a creative studio for digital learning and executive education. We worked with top universities and global brands like Meta, Duke, Dartmouth, Berkeley, and UNC, and managed one of the largest sound stages on the East Coast. I co-founded the studio and led sales and operations for two years before transitioning to an advisor role.",
  },
  {
    company: "Triad Studios",
    title: "Founder & Head of Sales",
    location: "Chapel Hill, NC",
    start: "2018",
    end: "2022",
    summary:
      "Triad was a full-service video production studio I started at the end of my freshman year at UNC. It was my first company and the one that gave me the confidence to take on everything since. I grew it through school and the years that followed, and the company was acquired in 2022.",
  },
];
