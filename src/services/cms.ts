import type { Article, Broker } from "@/types";
import { mockArticles } from "./mock/articles";
import { mockBrokers } from "./mock/brokers";

const STRAPI_URL = process.env.STRAPI_URL;

// ---------------------------------------------------------------------------
// Strapi v5 response shapes (flat — no nested "attributes" wrapper)
// ---------------------------------------------------------------------------

interface StrapiArticle {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  author: string;
  category: "news" | "analysis" | "blog";
  tags: string[] | null;
  coverImage: string | null;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

interface StrapiBroker {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: string;
  website: string;
  rating: number;
  regulators: string[] | null;
  minDeposit: number | null;
  spread: string | null;
  leverage: string | null;
  founded: number | null;
  headquarters: string | null;
  assets: string[] | null;
  logo: string | null;
  createdAt: string;
  updatedAt: string;
}

interface StrapiList<T> {
  data: T[];
  meta: { pagination: { page: number; pageSize: number; pageCount: number; total: number } };
}

// ---------------------------------------------------------------------------
// HTTP helper — returns null on any failure so callers fall back to mock data
// ---------------------------------------------------------------------------

async function fetchStrapi<T>(path: string): Promise<T | null> {
  if (!STRAPI_URL) return null;

  try {
    const res = await fetch(`${STRAPI_URL}${path}`, {
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.warn(`[cms] Strapi responded ${res.status} for ${path}`);
      return null;
    }

    return res.json() as Promise<T>;
  } catch (err) {
    console.warn("[cms] Strapi unreachable — falling back to mock data", err);
    return null;
  }
}

// ---------------------------------------------------------------------------
// Transformers: Strapi shape → internal Article / Broker types
// ---------------------------------------------------------------------------

function toArticle(item: StrapiArticle): Article {
  return {
    id: String(item.id),
    slug: item.slug,
    title: item.title,
    summary: item.summary,
    content: item.content,
    author: item.author,
    category: item.category,
    tags: Array.isArray(item.tags) ? item.tags : [],
    publishedAt: item.publishedAt ?? item.createdAt,
    updatedAt: item.updatedAt,
    coverImage: item.coverImage ?? "",
  };
}

function toBroker(item: StrapiBroker): Broker {
  return {
    id: String(item.id),
    slug: item.slug,
    name: item.name,
    description: item.description,
    website: item.website,
    rating: item.rating,
    regulators: Array.isArray(item.regulators) ? item.regulators : [],
    minDeposit: item.minDeposit ?? 0,
    spread: item.spread ?? "",
    leverage: item.leverage ?? "",
    founded: item.founded ?? 0,
    headquarters: item.headquarters ?? "",
    assets: Array.isArray(item.assets) ? (item.assets as Broker["assets"]) : [],
    logo: item.logo ?? "",
  };
}

// ---------------------------------------------------------------------------
// Articles
// ---------------------------------------------------------------------------

export async function getArticles(): Promise<Article[]> {
  const data = await fetchStrapi<StrapiList<StrapiArticle>>(
    "/api/articles?sort=publishedAt:desc&pagination[pageSize]=50"
  );

  if (data?.data) return data.data.map(toArticle);

  return mockArticles;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const data = await fetchStrapi<StrapiList<StrapiArticle>>(
    `/api/articles?filters[slug][$eq]=${encodeURIComponent(slug)}`
  );

  if (data?.data?.length) return toArticle(data.data[0]);

  return mockArticles.find((a) => a.slug === slug) ?? null;
}

// ---------------------------------------------------------------------------
// Brokers
// ---------------------------------------------------------------------------

export async function getBrokers(): Promise<Broker[]> {
  const data = await fetchStrapi<StrapiList<StrapiBroker>>(
    "/api/brokers?sort=rating:desc&pagination[pageSize]=50"
  );

  if (data?.data) return data.data.map(toBroker);

  return mockBrokers;
}

export async function getBrokerBySlug(slug: string): Promise<Broker | null> {
  const data = await fetchStrapi<StrapiList<StrapiBroker>>(
    `/api/brokers?filters[slug][$eq]=${encodeURIComponent(slug)}`
  );

  if (data?.data?.length) return toBroker(data.data[0]);

  return mockBrokers.find((b) => b.slug === slug) ?? null;
}