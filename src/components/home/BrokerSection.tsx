import Link from "next/link";
import Container from "@/components/ui/Container";
import { getBrokers } from "@/services";

export default async function BrokerSection() {
  const brokers = await getBrokers();
  const top = brokers.slice(0, 4);

  if (top.length === 0) return null;

  return (
    <section className="bg-[#0B0F14] py-14">
      <Container>
        <div className="mb-7 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#E6EDF3]">Top Brokers</h2>
          <Link
            href="/brokers"
            className="text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
          >
            Compare all &rarr;
          </Link>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#1F2933]">
          <table className="min-w-full divide-y divide-[#1F2933]">
            <thead className="bg-[#0D1117]">
              <tr>
                {["Broker", "Regulation", "Min. Deposit", "Spread", "Action"].map(
                  (col) => (
                    <th
                      key={col}
                      scope="col"
                      className="whitespace-nowrap px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"
                    >
                      {col}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1F2933] bg-[#0B0F14]">
              {top.map((broker) => (
                <tr
                  key={broker.id}
                  className="transition-colors hover:bg-[#0D1117]"
                >
                  <td className="whitespace-nowrap px-5 py-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-semibold text-[#E6EDF3]">
                        {broker.name}
                      </span>
                      <span className="text-xs text-amber-400">
                        {"★".repeat(Math.round(broker.rating))}
                        <span className="ml-1 text-slate-500">
                          {broker.rating.toFixed(1)}
                        </span>
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex flex-wrap gap-1">
                      {broker.regulators.slice(0, 2).map((reg) => (
                        <span
                          key={reg}
                          className="rounded-full bg-slate-800 px-2 py-0.5 text-xs text-slate-300"
                        >
                          {reg}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-400">
                    {broker.minDeposit === 0 ? (
                      <span className="text-emerald-400">None</span>
                    ) : (
                      `$${broker.minDeposit}`
                    )}
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-400">
                    {broker.spread}
                  </td>
                  <td className="whitespace-nowrap px-5 py-4">
                    <div className="flex items-center gap-2">
                      <a
                        href={broker.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-blue-500 px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-blue-400"
                      >
                        Open Account
                      </a>
                      <Link
                        href={`/brokers/${broker.slug}`}
                        className="rounded-full border border-[#1F2933] px-4 py-1.5 text-xs font-semibold text-slate-400 transition-colors hover:border-slate-500 hover:text-[#E6EDF3]"
                      >
                        Review
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}