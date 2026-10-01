import fs from "node:fs"
import path from "node:path"

export type Post = {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  cover?: string
  readingTime: number
  content: string
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog")

/** Parse un frontmatter YAML minimal (chaînes, nombres, tableaux de chaînes). */
function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }
  const data: Record<string, unknown> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(":")
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    let value: string = line.slice(idx + 1).trim()
    if (value.startsWith("[") && value.endsWith("]")) {
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((v) => v.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean)
      continue
    }
    value = value.replace(/^["']|["']$/g, "")
    data[key] = /^\d+(\.\d+)?$/.test(value) ? Number(value) : value
  }
  return { data, content: match[2] }
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8")
      const { data, content } = parseFrontmatter(raw)
      const words = content.split(/\s+/).filter(Boolean).length
      return {
        slug: file.replace(/\.md$/, ""),
        title: String(data.title ?? file),
        description: String(data.description ?? ""),
        date: String(data.date ?? ""),
        tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
        cover: data.cover ? String(data.cover) : undefined,
        readingTime: typeof data.readingTime === "number" ? data.readingTime : Math.max(1, Math.round(words / 200)),
        content,
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug)
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })
}
