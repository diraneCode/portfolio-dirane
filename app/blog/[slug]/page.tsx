import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { getAllPosts, getPost, formatDate } from "@/lib/blog"
import { site } from "@/lib/site"
import { ShareBar } from "@/app/components/ShareBar"
import { Newsletter } from "@/app/components/Newsletter"

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

  const url = `${site.url}/blog/${post.slug}`
  const all = getAllPosts()
  const index = all.findIndex((p) => p.slug === post.slug)
  const next = all[(index + 1) % all.length]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: site.name, url: site.url },
    publisher: { "@type": "Person", name: site.name, url: site.url },
    image: post.cover ? `${site.url}${post.cover}` : undefined,
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    keywords: post.tags.join(", "),
    inLanguage: "fr-FR",
  }

  return (
    <main id="contenu" className="container-x max-w-2xl pb-24 pt-32 md:pb-32 md:pt-40">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-ash transition-colors hover:text-brand-light">
        <ArrowLeft className="size-4" /> Blog
      </Link>

      <article className="mt-10">
        <header>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ash">
            <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingTime} min de lecture
          </p>
          <h1 className="mt-4 font-display text-display-lg font-bold text-paper">{post.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-ash">{post.description}</p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Thèmes">
            {post.tags.map((t) => (
              <li key={t} className="rounded-full border border-white/15 px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ash">
                {t}
              </li>
            ))}
          </ul>
        </header>

        {post.cover && (
          <figure className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-night-2">
            <Image src={post.cover} alt="" fill priority sizes="(max-width: 768px) 100vw, 672px" className="object-cover object-top" />
          </figure>
        )}

        <ShareBar url={url} title={post.title} className="mt-8" />

        <div className="prose-blog mt-12">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>

        <footer className="mt-16 border-t border-white/10 pt-8">
          <ShareBar url={url} title={post.title} />
          <p className="mt-8 text-sm text-ash">
            Écrit par <span className="text-paper">{site.name}</span>. Une question sur cet article ?{" "}
            <Link href="/#contact" className="link-brush text-paper">
              Écrivez-moi
            </Link>
            .
          </p>
          {next && next.slug !== post.slug && (
            <Link href={`/blog/${next.slug}`} className="group mt-8 flex items-center justify-between gap-4">
              <span>
                <span className="block font-mono text-[0.6rem] uppercase tracking-[0.18em] text-ash">Article suivant</span>
                <span className="mt-1 block font-semibold text-paper group-hover:text-brand-light">{next.title}</span>
              </span>
              <ArrowRight className="size-5 shrink-0 text-ash transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </footer>
      </article>

      <Newsletter compact className="mt-16" />
    </main>
  )
}
