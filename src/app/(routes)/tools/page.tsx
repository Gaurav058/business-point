import type { Metadata } from "next";
import { tools } from "@/lib/tools";
import ToolCard from "@/components/tools/ToolCard";

const description =
  "Free financial tools and calculators to support your investment research, portfolio planning, and trading decisions.";

export const metadata: Metadata = {
  title: "Tools",
  description,
  openGraph: {
    title: "Financial Tools | Business Point",
    description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Financial Tools | Business Point",
    description,
  },
};

export default function ToolsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Financial Tools
        </h1>
        <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </header>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard
            key={tool.id}
            title={tool.title}
            description={tool.description}
            href={tool.href}
          />
        ))}
      </div>
    </main>
  );
}