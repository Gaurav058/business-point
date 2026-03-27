import type { Metadata } from "next";
import dynamic from "next/dynamic";
import ToolShell from "@/components/tools/ToolShell";

const description =
  "Calculate the monetary value of one pip for any currency pair and lot size in your account currency.";

export const metadata: Metadata = {
  title: "Pip Calculator",
  description,
  openGraph: { title: "Pip Calculator | Business Point", description, type: "website" },
  twitter: { card: "summary", title: "Pip Calculator | Business Point", description },
};

const PipCalculatorForm = dynamic(
  () => import("@/components/tools/PipCalculatorForm"),
  {
    loading: () => (
      <div className="animate-pulse space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[0, 1, 2].map((i) => <div key={i} className="h-[74px] rounded-lg bg-zinc-100 dark:bg-zinc-800" />)}
        </div>
        <div className="mt-6 h-10 w-28 rounded-full bg-zinc-100 dark:bg-zinc-800" />
        <div className="mt-6 h-24 rounded-lg bg-zinc-100 dark:bg-zinc-800" />
      </div>
    ),
  }
);

export default function PipCalculatorPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <ToolShell title="Pip Calculator" description={description}>
        <PipCalculatorForm />
      </ToolShell>
    </main>
  );
}