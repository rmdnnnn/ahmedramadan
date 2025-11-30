import Link from "next/link";
import { getPostsByType } from "@/lib/mdx";
import { formatDate } from "@/lib/date-utils";

export default function ResearchPage() {
  const posts = getPostsByType("research");

  return (
    <div className="max-w-[640px] mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-foreground">Research</h1>

      {posts.length > 0 ? (
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border-b border-[#262626] pb-8 last:border-0 last:pb-0"
            >
              <Link
                href={`/research/${post.slug}`}
                className="block group"
              >
                <h2 className="text-2xl font-semibold mb-2 text-foreground group-hover:text-foreground/80 transition-colors">
                  {post.frontmatter.title}
                </h2>
                {post.frontmatter.description && (
                  <p className="text-muted mb-3 leading-relaxed">
                    {post.frontmatter.description}
                  </p>
                )}
                <div className="flex items-center gap-4 text-sm text-muted">
                  <time>{formatDate(post.frontmatter.date)}</time>
                  {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                    <div className="flex items-center gap-2">
                      {post.frontmatter.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-[#1a1a1a] border border-[#262626] rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p className="text-muted">No research articles yet.</p>
      )}
    </div>
  );
}

