import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getArticleBySlug, getArticles } from "@/services";
import ArticleDetail from "@/components/content/ArticleDetail";
import { buildArticleMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles
    .filter((a) => a.category === "analysis")
    .map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article || article.category !== "analysis") {
    return { title: "Article Not Found" };
  }
  return buildArticleMetadata(article);
}

export default async function AnalysisArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article || article.category !== "analysis") {
    notFound();
  }

  return <ArticleDetail article={article} />;
}