import Container from "@/components/ui/Container";
import { marketQuotes } from "@/lib/market";

export default function MarketTicker() {
  return (
    <section className="border-y border-[#1F2933] bg-[#0D1117] py-5">
      <Container>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {marketQuotes.map((quote) => (
            <div key={quote.symbol} className="flex flex-col gap-1">
              <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                {quote.symbol}
              </span>
              <span className="text-lg font-semibold text-[#E6EDF3]">
                {quote.price}
              </span>
              <span
                className={`text-xs font-medium ${
                  quote.positive ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {quote.change}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}