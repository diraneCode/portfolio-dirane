import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { ArrowLeft, ArrowRight, Clock } from "lucide-react"
import { BrandPattern } from "@/components/shared/BrandPattern"
import { Button } from "@/components/ui/button"
import { getAllPosts, getPost, formatDate } from "@/lib/blog"
import { site } from "@/lib/site"

type Params = { slug: string }

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${site.url}/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [site.name],
      tags: post.tags,
      images: post.cover ? [{ url: post.cover }] : undefined,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description, images: post.cover ? [post.cover] : undefined },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const all = getAllPosts()
  const index = all.findIndex((p) => p.slug === post.slug)
  const next = all[(index + 1) % all.length]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: site.name, url: site.url },
    image: post.cover ? `${site.url}${post.cover}` : undefined,
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    keywords: post.tags.join(", "),
    inLanguage: "fr-FR",
  }

  return (
    <main id="contenu" className="relative pt-28 md:pt-36">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <BrandPattern className="text-brand" variant="arc" opacity={0.05} size={160} />

      <article className="container-x relative max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-ash transition-colors hover:text-brand">
          <ArrowLeft className="size-4" /> Tous les articles
        </Link>

        <header className="mt-8">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span key={t} className="rounded-full border border-white/15 px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ash">{t}</span>
            ))}
          </div>
          <h1 className="mt-5 text-display-lg font-semibold text-paper">{post.title}</h1>
          <p className="mt-5 text-lg text-ash">{post.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-ash">
            <span className="inline-flex items-center gap-2">
              <Image src="/dirane-square.png" alt="" width={28} height={28} className="rounded-full" />
              <span className="text-paper">{site.name}</span>
            </span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="inline-flex items-center gap-1"><Clock className="size-3" /> {post.readingTime} min de lecture</span>
          </div>
        </header>

        {post.cover && (
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 bg-night-2">
            <Image src={post.cover} alt="" fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover object-top" />
          </div>
        )}

        <div className="prose-blog mt-12">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>

        <footer className="mt-16 border-t border-white/10 pt-10">
          <div className="flex flex-col gap-6 rounded-3xl bg-night-2 p-7 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="eyebrow text-brand">Un projet en tête ?</p>
              <p className="mt-2 font-brush text-3xl text-paper">Parlons-en.</p>
            </div>
            <Button asChild size="lg">
              <Link href="/#contact">Me contacter <ArrowRight /></Link>
            </Button>
          </div>
          {next && next.slug !== post.slug && (
            <Link href={`/blog/${next.slug}`} className="group mt-8 flex items-center justify-between gap-4 text-paper">
              <span>
                <span className="block font-mono text-[0.6rem] uppercase tracking-[0.18em] text-ash">Article suivant</span>
                <span className="mt-1 block font-semibold group-hover:text-brand">{next.title}</span>
              </span>
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-transform group-hover:translate-x-1">
                <ArrowRight className="size-4" />
              </span>
            </Link>
          )}
        </footer>
      </article>
      <div className="h-24 md:h-32" />
    </main>
  )
}
