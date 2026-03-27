import type { Metadata } from "next";
import { getBrokers } from "@/services";
import BrokerComparisonTable from "@/components/brokers/BrokerComparisonTable/BrokerComparisonTable";

const description =
  "Compare and review top brokers. Ratings, regulation details, minimum deposits, and tradable assets all in one place.";

export const metadata: Metadata = {
  title: "Brokers",
  description,
  openGraph: {
    title: "Broker Reviews | Business Point",
    description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Broker Reviews | Business Point",
    description,
  },
};

export default async function BrokersPage() {
  const brokers = await getBrokers();

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Broker Comparison
        </h1>
        <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
          Compare top brokers side by side on regulation, fees, leverage, and
          more.
        </p>
      </header>
      <BrokerComparisonTable brokers={brokers} />
    </main>
  );
}