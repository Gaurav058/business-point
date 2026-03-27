import type { Article } from "@/types";

interface ArticleDetailProps {
  article: Article;
}

export default function ArticleDetail({ article }: ArticleDetailProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-8">
        <span className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          {article.category}
        </span>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          {article.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {article.summary}
        </p>
        <div className="mt-4 flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
          <span>{article.author}</span>
          <span aria-hidden="true">&middot;</span>
          <time dateTime={article.publishedAt}>
            {new Date(article.publishedAt).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </header>

      <div className="mt-8 text-base leading-8 text-zinc-700 dark:text-zinc-300">
        <p>{article.content}</p>
      </div>

      {article.tags.length > 0 && (
        <footer className="mt-12 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </footer>
      )}
    </article>
  );
}
