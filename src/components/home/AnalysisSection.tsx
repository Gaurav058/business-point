import Link from "next/link";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { getArticles } from "@/services";

export default async function AnalysisSection() {
  const articles = await getArticles();
  const analysis = articles
    .filter((a) => a.category === "analysis")
    .slice(0, 3);

  if (analysis.length === 0) return null;

  return (
    <section className="bg-[#0D1117] py-14">
      <Container>
        <div className="mb-7 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#E6EDF3]">
            Daily Analysis
          </h2>
          <Link
            href="/analysis"
            className="text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
          >
            View all &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {analysis.map((article) => (
            <Link
              key={article.id}
              href={`/analysis/${article.slug}`}
              className="group block"
            >
              <Card className="flex h-full flex-col">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  {article.category}
                </span>
                <h3 className="mt-2 text-sm font-semibold leading-snug text-[#E6EDF3] transition-colors group-hover:text-emerald-300">
                  {article.title}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-400 line-clamp-3">
                  {article.summary}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                  <span>{article.author}</span>
                  <span>&middot;</span>
                  <time dateTime={article.publishedAt}>
                    {new Date(article.publishedAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}