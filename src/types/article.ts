export type ArticleCategory = "news" | "analysis" | "blog";

export interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  category: ArticleCategory;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  coverImage: string;
}
