import type { Broker } from "@/types";
import BrokerTableRow from "./BrokerTableRow";

interface BrokerComparisonTableProps {
  brokers: Broker[];
}

const COLUMNS = [
  { key: "name", label: "Broker" },
  { key: "regulators", label: "Regulation" },
  { key: "minDeposit", label: "Min. Deposit" },
  { key: "spread", label: "Spread" },
  { key: "leverage", label: "Leverage" },
  { key: "action", label: "Action" },
] as const;

export default function BrokerComparisonTable({
  brokers,
}: BrokerComparisonTableProps) {
  if (brokers.length === 0) {
    return (
      <div className="rounded-xl border border-zinc-200 bg-white px-6 py-12 text-center dark:border-zinc-800 dark:bg-zinc-950">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          No brokers available at this time.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
      <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800">
        <thead className="bg-zinc-50 dark:bg-zinc-900">
          <tr>
            {COLUMNS.map((col) => (
              <th
                key={col.key}
                scope="col"
                className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 sm:px-6"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-100 bg-white dark:divide-zinc-800 dark:bg-zinc-950">
          {brokers.map((broker) => (
            <BrokerTableRow key={broker.id} broker={broker} />
          ))}
        </tbody>
      </table>
    </div>
  );
}