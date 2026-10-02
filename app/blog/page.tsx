import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Newsletter } from "@/app/components/Newsletter"
import { getAllPosts, formatDate } from "@/lib/blog"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Blog",
  description: `Articles de ${site.name} sur le développement web et mobile, le design d'interfaces, Supabase, l'IA et l'automatisation.`,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Blog — ${site.name}`,
    description: "Développement, design et automatisation : je partage ce que j'apprends sur mes projets.",
    url: `${site.url}/blog`,
    type: "website",
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main id="contenu" className="container-x max-w-4xl pb-24 pt-32 md:pb-32 md:pt-40">
      <header>
        <p className="eyebrow text-ash">Blog</p>
        <h1 className="mt-4 font-display text-brush-lg font-bold text-paper">Je partage ce que j&apos;apprends.</h1>
        <p className="mt-5 max-w-xl text-ash">
          Développement web et mobile, design d&apos;interfaces, Supabase, IA et automatisation. Des articles courts,
          tirés de projets réels.
        </p>
      </header>

      <ol className="mt-14 divide-y divide-white/10 border-y border-white/10">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group grid gap-4 py-7 transition-colors md:grid-cols-[11rem_1fr_auto] md:items-start md:gap-7"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-night-2">
                {post.cover && (
                  <Image
                    src={post.cover}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 176px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>
              <div>
                <time dateTime={post.date} className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ash">
                  {formatDate(post.date)}
                </time>
                <h2 className="mt-2 text-xl font-semibold leading-snug text-paper transition-colors group-hover:text-brand-light md:text-2xl">
                  {post.title}
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-ash">{post.description}</p>
                <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ash">
                  {post.tags.join(" · ")} · {post.readingTime} min
                </p>
              </div>
              <ArrowUpRight className="hidden size-5 text-ash transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-light md:block" />
            </Link>
          </li>
        ))}
      </ol>

      <Newsletter className="mt-16" />
    </main>
  )
}
