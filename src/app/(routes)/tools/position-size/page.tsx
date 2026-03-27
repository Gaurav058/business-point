import type { Metadata } from "next";
import dynamic from "next/dynamic";
import ToolShell from "@/components/tools/ToolShell";

const description =
  "Determine the right position size based on your account balance, risk tolerance, and stop-loss distance.";

export const metadata: Metadata = {
  title: "Position Size Calculator",
  description,
  openGraph: { title: "Position Size Calculator | Business Point", description, type: "website" },
  twitter: { card: "summary", title: "Position Size Calculator | Business Point", description },
};

const PositionSizeForm = dynamic(
  () => import("@/components/tools/PositionSizeForm"),
  {
    loading: () => (
      <div className="animate-pulse space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[0, 1, 2, 3].map((i) => <div key={i} className="h-[74px] rounded-lg bg-zinc-100 dark:bg-zinc-800" />)}
        </div>
        <div className="mt-6 h-10 w-28 rounded-full bg-zinc-100 dark:bg-zinc-800" />
        <div className="mt-6 h-24 rounded-lg bg-zinc-100 dark:bg-zinc-800" />
      </div>
    ),
  }
);

export default function PositionSizePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <ToolShell title="Position Size Calculator" description={description}>
        <PositionSizeForm />
      </ToolShell>
    </main>
  );
}