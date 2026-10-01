import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Clock } from "lucide-react"
import { Reveal } from "@/components/shared/Reveal"
import { BrandPattern } from "@/components/shared/BrandPattern"
import { getAllPosts, formatDate } from "@/lib/blog"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Blog",
  description: `Articles de ${site.name} sur le développement web et mobile, le design d'interfaces, Supabase, l'IA et l'automatisation.`,
  alternates: { canonical: "/blog" },
  openGraph: { title: `Blog — ${site.name}`, description: "Développement, design et automatisation : je partage ce que j'apprends sur mes projets.", url: `${site.url}/blog`, type: "website" },
}

export default function BlogPage() {
  const posts = getAllPosts()
  const [featured, ...rest] = posts

  return (
    <main id="contenu" className="relative pt-28 md:pt-36">
      <BrandPattern className="text-brand" variant="mark" opacity={0.06} />
      <header className="container-x relative pb-14 md:pb-20">
        <p className="eyebrow text-ash">
          <span className="text-brand">Blog</span> &nbsp;—&nbsp; Expertise & retours d&apos;expérience
        </p>
        <h1 className="mt-5 max-w-3xl font-brush text-brush-xl text-paper">Je partage ce que j&apos;apprends.</h1>
        <p className="mt-6 max-w-2xl text-lg text-ash">
          Développement web et mobile, design d&apos;interfaces, Supabase, IA et automatisation : des articles concrets,
          tirés de projets réels.
        </p>
      </header>

      {featured && (
        <section className="container-x relative pb-10" aria-label="Article à la une">
          <Reveal>
            <Link href={`/blog/${featured.slug}`} className="group grid overflow-hidden rounded-3xl border border-white/10 bg-night-2 transition-all duration-500 hover:border-brand/60 hover:shadow-glow md:grid-cols-2">
              <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[360px]">
                {featured.cover && <Image src={featured.cover} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />}
                <div className="absolute inset-0 bg-gradient-to-t from-night/70 to-transparent md:bg-gradient-to-r" />
              </div>
              <div className="flex flex-col justify-between p-7 md:p-10">
                <div>
                  <div className="flex flex-wrap gap-2">
                    {featured.tags.map((t) => (
                      <span key={t} className="rounded-full border border-white/15 px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ash">{t}</span>
                    ))}
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold leading-tight text-paper md:text-3xl">{featured.title}</h2>
                  <p className="mt-4 text-ash">{featured.description}</p>
                </div>
                <div className="mt-8 flex items-center justify-between text-xs text-ash">
                  <span className="inline-flex items-center gap-3">
                    <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                    <span className="inline-flex items-center gap-1"><Clock className="size-3" /> {featured.readingTime} min</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-semibold text-brand">Lire <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
                </div>
              </div>
            </Link>
          </Reveal>
        </section>
      )}

      <section className="container-x relative pb-24 md:pb-32" aria-label="Tous les articles">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08} className="h-full">
              <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-night-2 transition-all duration-500 hover:-translate-y-1 hover:border-brand/60 hover:shadow-glow">
                <div className="relative aspect-[16/10] overflow-hidden">
                  {post.cover && <Image src={post.cover} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((t) => (
                      <span key={t} className="rounded-full border border-white/15 px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ash">{t}</span>
                    ))}
                  </div>
                  <h2 className="mt-4 text-xl font-semibold leading-snug text-paper">{post.title}</h2>
                  <p className="mt-3 line-clamp-3 text-sm text-ash">{post.description}</p>
                  <div className="mt-auto flex items-center justify-between pt-6 text-xs text-ash">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span className="inline-flex items-center gap-1"><Clock className="size-3" /> {post.readingTime} min</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  )
}
