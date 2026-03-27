import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="bg-[#0B0F14] py-20 lg:py-28">
      <Container>
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
            Forex Intelligence Platform
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[#E6EDF3] sm:text-5xl lg:text-6xl">
            Your Trusted Hub for{" "}
            <span className="text-blue-400">Forex Intelligence</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            Daily insights, broker comparisons, and proven strategies — built
            for serious traders and investors.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/analysis">
              <Button variant="primary">View Market Analysis</Button>
            </Link>
            <Link href="/brokers">
              <Button variant="secondary">Compare Brokers</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}