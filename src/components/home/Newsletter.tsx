import Container from "@/components/ui/Container";
import NewsletterForm from "./NewsletterForm";

export default function Newsletter() {
  return (
    <section className="border-t border-[#1F2933] bg-[#0D1117] py-16">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold text-[#E6EDF3]">
            Join the Trader Community
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Get daily market analysis, trade ideas, and broker updates delivered
            to your inbox.
          </p>
          <NewsletterForm />
        </div>
      </Container>
    </section>
  );
}