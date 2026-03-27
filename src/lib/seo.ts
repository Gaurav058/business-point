import type { Metadata } from "next";
import type { Article, Broker } from "@/types";

export const SITE_NAME = "Business Point";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://businesspoint.com";

export function buildArticleMetadata(article: Article): Metadata {
  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
      tags: article.tags,
      images: [
        {
          url: article.coverImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      images: [article.coverImage],
    },
  };
}

export function buildBrokerMetadata(broker: Broker): Metadata {
  const title = `${broker.name} Review`;
  const description = broker.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: broker.logo,
          alt: broker.name,
        },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}