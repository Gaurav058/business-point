import type { Broker } from "@/types";

interface BrokerDetailProps {
  broker: Broker;
}

export default function BrokerDetail({ broker }: BrokerDetailProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          {broker.name}
        </h1>
        <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {broker.description}
        </p>
      </header>

      <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
          <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Rating
          </dt>
          <dd className="mt-1 text-2xl font-semibold text-zinc-900 dark:text-white">
            {broker.rating}/5
          </dd>
        </div>
        <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
          <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Min. Deposit
          </dt>
          <dd className="mt-1 text-2xl font-semibold text-zinc-900 dark:text-white">
            {broker.minDeposit === 0 ? "None" : `$${broker.minDeposit}`}
          </dd>
        </div>
        <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
          <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Founded
          </dt>
          <dd className="mt-1 text-2xl font-semibold text-zinc-900 dark:text-white">
            {broker.founded}
          </dd>
        </div>
      </dl>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
          Regulators
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {broker.regulators.map((reg) => (
            <span
              key={reg}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {reg}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
          Tradable Assets
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {broker.assets.map((asset) => (
            <span
              key={asset}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {asset}
            </span>
          ))}
        </div>
      </section>

      <footer className="mt-10 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Headquarters: {broker.headquarters}
        </p>
        <a
          href={broker.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
        >
          Visit Website
        </a>
      </footer>
    </article>
  );
}
