import Link from "next/link";
import { getPostsByType } from "@/lib/mdx";
import { formatDate } from "@/lib/date-utils";

export default function Home() {
  const recentResearch = getPostsByType("research").slice(0, 3);

  return (
    <div className="max-w-[640px] mx-auto px-6 py-12">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          Cyber Security Engineer & Researcher.
        </h1>
        <div className="text-lg text-foreground/80 leading-relaxed mb-6 space-y-4">
          <p>
            I'm a Cyber Security Engineer and Penetration Tester at DeepStrike with solid experience across web, mobile and network security. I've been recognized by multiple organizations for my security research and responsible vulnerability disclosures.
          </p>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Selected Research
          </h2>
          <Link
            href="/research"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            View all →
          </Link>
        </div>

        {recentResearch.length > 0 ? (
          <div className="space-y-6">
            {recentResearch.map((post) => (
              <article
                key={post.slug}
                className="border-b border-[#262626] pb-6 last:border-0 last:pb-0"
              >
                <Link
                  href={`/research/${post.slug}`}
                  className="block group"
                >
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-foreground/80 transition-colors">
                    {post.frontmatter.title}
                  </h3>
                  {post.frontmatter.description && (
                    <p className="text-muted mb-2">
                      {post.frontmatter.description}
                    </p>
                  )}
                  <time className="text-sm text-muted">
                    {formatDate(post.frontmatter.date)}
                  </time>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-muted">No research articles yet.</p>
        )}
      </section>
    </div>
  );
}

