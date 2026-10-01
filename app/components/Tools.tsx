"use client"

import LogoLoop from "@/components/LogoLoop"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Reveal } from "@/components/shared/Reveal"

const front = [
  { alt: "React", src: "/logo/react.png" },
  { alt: "Next.js", src: "/logo/nextjs.png" },
  { alt: "TypeScript", src: "/logo/typescript.png" },
  { alt: "JavaScript", src: "/logo/Javascript.png" },
  { alt: "Tailwind CSS", src: "/logo/tailwind.png" },
  { alt: "HTML", src: "/logo/html.png" },
  { alt: "CSS", src: "/logo/css.png" },
  { alt: "Bootstrap", src: "/logo/Bootstrap.png" },
  { alt: "Expo", src: "/logo/expo.png" },
  { alt: "Figma", src: "/logo/figma.png" },
  { alt: "Photoshop", src: "/logo/photoshop.png" },
]

const back = [
  { alt: "Node.js", src: "/logo/nodejs.png" },
  { alt: "NestJS", src: "/logo/nestjs.png" },
  { alt: "Supabase", src: "/logo/supabase.png" },
  { alt: "PostgreSQL", src: "/logo/postgre.png" },
  { alt: "MongoDB", src: "/logo/mongodb.png" },
  { alt: "Docker", src: "/logo/docker.png" },
  { alt: "VS Code", src: "/logo/vscode.png" },
  { alt: "Cursor", src: "/logo/cursor.png" },
  { alt: "ChatGPT", src: "/logo/chatgpt.png" },
  { alt: "Notion", src: "/logo/notion.png" },
  { alt: "Trello", src: "/logo/trello.png" },
]

export function Tools() {
  return (
    <section id="outils" className="section section-dark border-t border-white/10" aria-labelledby="outils-title">
      <div className="container-x">
        <SectionHeading
          index="08"
          eyebrow="Outils & technologies"
          id="outils-title"
          align="center"
          title="Une stack moderne, *choisie pour durer*"
          lede="Les technologies et outils que j'utilise au quotidien pour concevoir, développer et livrer."
        />
      </div>

      <Reveal delay={0.1} className="mt-14 space-y-10">
        <div>
          <p className="container-x mb-4 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ash">Front-end & design</p>
          <LogoLoop logos={front} speed={45} direction="left" logoHeight={44} gap={64} pauseOnHover scaleOnHover fadeOut fadeOutColor="#121212" ariaLabel="Technologies front-end et design" />
        </div>
        <div>
          <p className="container-x mb-4 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ash">Back-end, data & productivité</p>
          <LogoLoop logos={back} speed={45} direction="right" logoHeight={44} gap={64} pauseOnHover scaleOnHover fadeOut fadeOutColor="#121212" ariaLabel="Technologies back-end et outils" />
        </div>
      </Reveal>
    </section>
  )
}
