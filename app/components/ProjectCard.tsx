"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/projectData"
import { cn } from "@/lib/utils"

type Props = {
  project: Project
  onOpen: (project: Project) => void
  className?: string
  /** Hauteur de la zone image ; `h-full` pour remplir le conteneur (bento). */
  imageHeight?: string
}

export function ProjectCard({ project, onOpen, className, imageHeight = "h-64" }: Props) {
  return (
    <article
      tabIndex={0}
      role="button"
      aria-label={`Ouvrir le projet ${project.name}`}
      onClick={() => onOpen(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onOpen(project)
        }
      }}
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-night-2 transition-all duration-500 hover:border-brand/60 hover:shadow-glow",
        className
      )}
    >
      <div className={cn("relative w-full overflow-hidden", imageHeight)}>
        <Image
          src={project.image[0].src}
          alt={project.image[0].alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
        <div className="absolute inset-0 bg-brand/0 transition-colors duration-500 group-hover:bg-brand/10" />

        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-night/60 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-paper backdrop-blur">
          {project.category}
        </span>
        <span className="absolute right-4 top-4 flex size-10 translate-y-2 items-center justify-center rounded-full bg-brand text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="size-4" />
        </span>

        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
          <h3 className="translate-y-2 text-xl font-semibold text-paper transition-transform duration-500 group-hover:translate-y-0 md:text-2xl">
            {project.name}
          </h3>
          <div className="mt-2 flex max-h-0 flex-wrap gap-1.5 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
            {project.tech.slice(0, 3).map((t) => (
              <span key={t} className="rounded-full bg-white/15 px-2.5 py-0.5 text-[0.68rem] text-paper backdrop-blur">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
