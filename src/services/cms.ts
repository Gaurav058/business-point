import type { Article, Broker } from "@/types";
import { mockArticles } from "./mock/articles";
import { mockBrokers } from "./mock/brokers";

// ---------------------------------------------------------------------------
// Articles
// ---------------------------------------------------------------------------

/**
 * Returns all articles.
 * Replace the mock import with a real CMS SDK call when ready.
 */
export async function getArticles(): Promise<Article[]> {
  return mockArticles;
}

/**
 * Returns a single article by its slug, or null if not found.
 * Replace the mock import with a real CMS SDK call when ready.
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  return mockArticles.find((article) => article.slug === slug) ?? null;
}

// ---------------------------------------------------------------------------
// Brokers
// ---------------------------------------------------------------------------

/**
 * Returns all brokers.
 * Replace the mock import with a real CMS SDK call when ready.
 */
export async function getBrokers(): Promise<Broker[]> {
  return mockBrokers;
}

/**
 * Returns a single broker by its slug, or null if not found.
 * Replace the mock import with a real CMS SDK call when ready.
 */
export async function getBrokerBySlug(slug: string): Promise<Broker | null> {
  return mockBrokers.find((broker) => broker.slug === slug) ?? null;
}
