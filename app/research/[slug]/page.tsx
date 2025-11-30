import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs } from "@/lib/mdx";
import { MDXContent } from "@/components/mdx";
import { formatDate } from "@/lib/date-utils";
import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = getAllPostSlugs("research");
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export const dynamic = 'force-dynamic';

export default async function ResearchPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug("research", slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-[880px] mx-auto px-6 py-12">
      <Link
        href="/research"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Research
      </Link>

      <article className="flex flex-col lg:flex-row gap-12">
        <div className="max-w-[640px] flex-1">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-foreground">
              {post.frontmatter.title}
            </h1>
            {post.frontmatter.description && (
              <p className="text-lg text-muted mb-4">
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
          </header>

          <div className="prose prose-invert max-w-none">
            <MDXContent source={post.content} />
          </div>
        </div>

        <aside className="hidden lg:block flex-shrink-0 w-[200px]">
          <TableOfContents />
        </aside>
      </article>
    </div>
  );
}

