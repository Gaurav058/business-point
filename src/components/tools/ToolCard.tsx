import Link from "next/link";
import type { ToolMeta } from "@/types";

type ToolCardProps = Pick<ToolMeta, "title" | "description" | "href">;

export default function ToolCard({ title, description, href }: ToolCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
    >
      <h2 className="text-base font-semibold text-zinc-900 dark:text-white">
        {title}
      </h2>
      <p className="flex-1 text-sm text-zinc-500 dark:text-zinc-400">
        {description}
      </p>
      <span className="text-xs font-medium text-zinc-400 transition-colors group-hover:text-zinc-600 dark:text-zinc-500 dark:group-hover:text-zinc-300">
        Open tool &rarr;
      </span>
    </Link>
  );
}