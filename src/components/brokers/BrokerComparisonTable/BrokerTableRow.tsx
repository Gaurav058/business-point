import Link from "next/link";
import type { Broker } from "@/types";

interface BrokerTableRowProps {
  broker: Broker;
}

export default function BrokerTableRow({ broker }: BrokerTableRowProps) {
  return (
    <tr className="transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/60">
      {/* Broker Name */}
      <td className="whitespace-nowrap px-4 py-4 sm:px-6">
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-semibold text-zinc-900 dark:text-white">
            {broker.name}
          </span>
          <span className="flex items-center gap-1 text-xs text-zinc-400 dark:text-zinc-500">
            <span className="text-amber-500">&#9733;</span>
            {broker.rating.toFixed(1)}
          </span>
        </div>
      </td>

      {/* Regulation */}
      <td className="px-4 py-4 sm:px-6">
        <div className="flex flex-wrap gap-1">
          {broker.regulators.map((reg) => (
            <span
              key={reg}
              className="inline-block rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400"
            >
              {reg}
            </span>
          ))}
        </div>
      </td>

      {/* Min. Deposit */}
      <td className="whitespace-nowrap px-4 py-4 text-sm text-zinc-700 dark:text-zinc-300 sm:px-6">
        {broker.minDeposit === 0 ? (
          <span className="font-medium text-emerald-600 dark:text-emerald-400">
            None
          </span>
        ) : (
          `$${broker.minDeposit}`
        )}
      </td>

      {/* Spread */}
      <td className="whitespace-nowrap px-4 py-4 text-sm text-zinc-700 dark:text-zinc-300 sm:px-6">
        {broker.spread}
      </td>

      {/* Leverage */}
      <td className="whitespace-nowrap px-4 py-4 text-sm text-zinc-700 dark:text-zinc-300 sm:px-6">
        {broker.leverage}
      </td>

      {/* Action */}
      <td className="whitespace-nowrap px-4 py-4 sm:px-6">
        <div className="flex items-center gap-2">
          <a
            href={broker.website}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Visit Broker
          </a>
          <Link
            href={`/brokers/${broker.slug}`}
            className="rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-600 transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
          >
            Review
          </Link>
        </div>
      </td>
    </tr>
  );
}