import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/seo";

const description =
  "Discover the latest financial news, in-depth market analysis, broker reviews, and investment tools on Business Point.";

export const metadata: Metadata = {
  title: { absolute: SITE_NAME },
  description,
  openGraph: {
    title: SITE_NAME,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description,
  },
};

const sections = [
  {
    title: "News",
    description: "Latest financial news and market updates.",
    href: "/news",
  },
  {
    title: "Analysis",
    description: "In-depth market analysis and technical breakdowns.",
    href: "/analysis",
  },
  {
    title: "Brokers",
    description: "Compare top brokers on regulation, fees, and more.",
    href: "/brokers",
  },
  {
    title: "Blog",
    description: "Investment guides and educational resources.",
    href: "/blog",
  },
  {
    title: "Tools",
    description: "Free calculators for traders and investors.",
    href: "/tools",
  },
] as const;

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          {SITE_NAME}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </section>

      <section aria-label="Site sections">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex flex-col gap-2 rounded-xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
            >
              <h2 className="text-base font-semibold text-zinc-900 dark:text-white">
                {s.title}
              </h2>
              <p className="flex-1 text-sm text-zinc-500 dark:text-zinc-400">
                {s.description}
              </p>
              <span className="mt-auto pt-2 text-xs font-medium text-zinc-400 transition-colors group-hover:text-zinc-600 dark:text-zinc-500 dark:group-hover:text-zinc-300">
                Explore &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}