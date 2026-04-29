import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Fraunces, Newsreader, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Grain } from "@/components/layout/grain";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { profile } from "@/content/profile";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://baaqir.com"),
  title: {
    default: `${profile.name} · ${profile.tagline}`,
    template: `%s · ${profile.name}`,
  },
  description: profile.description,
  openGraph: {
    title: `${profile.name} · ${profile.tagline}`,
    description: profile.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} · ${profile.tagline}`,
    description: profile.description,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const themeCookie = (await cookies()).get("theme")?.value;
  const themeClass =
    themeCookie === "dark" ? "dark" : themeCookie === "light" ? "light" : "";

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${themeClass} ${fraunces.variable} ${newsreader.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="paper-surface text-ink min-h-full flex flex-col">
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-ink focus:text-paper focus:px-3 focus:py-2 focus:rounded-sm"
          >
            Skip to content
          </a>
          <Grain />
          <Nav />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
