"use client"

import LogoLoop from "@/components/LogoLoop"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Reveal } from "@/components/shared/Reveal"

const front = [
  { alt: "React", src: "/logo/react.png", width: 44, height: 44 },
  { alt: "Next.js", src: "/logo/nextjs.png", width: 44, height: 44 },
  { alt: "Claude", src: "/logo/claude.jpeg", width: 44, height: 44 },
  { alt: "TypeScript", src: "/logo/typescript.png", width: 44, height: 44 },
  { alt: "JavaScript", src: "/logo/Javascript.png", width: 44, height: 44 },
  { alt: "Tailwind CSS", src: "/logo/tailwind.png", width: 44, height: 44 },
  { alt: "HTML", src: "/logo/html.png", width: 44, height: 44 },
  { alt: "CSS", src: "/logo/css.png", width: 44, height: 44 },
  { alt: "Expo", src: "/logo/expo.png", width: 44, height: 44 },
  { alt: "Figma", src: "/logo/figma.png", width: 44, height: 44 },
  { alt: "Photoshop", src: "/logo/photoshop.png", width: 44, height: 44 },
]

const back = [
  { alt: "Node.js", src: "/logo/nodejs.png", width: 44, height: 44 },
  { alt: "NestJS", src: "/logo/nestjs.png", width: 44, height: 44 },
  { alt: "Arc", src: "/logo/arc.png", width: 44, height: 44 },
  { alt: "Supabase", src: "/logo/supabase.png", width: 44, height: 44 },
  { alt: "PostgreSQL", src: "/logo/postgre.png", width: 44, height: 44 },
  { alt: "MongoDB", src: "/logo/mongodb.png", width: 44, height: 44 },
  { alt: "n8n", src: "/logo/n8n.png", width: 44, height: 44 },
  { alt: "Docker", src: "/logo/docker.png", width: 44, height: 44 },
  { alt: "VS Code", src: "/logo/vscode.png", width: 44, height: 44 },
  { alt: "ChatGPT", src: "/logo/chatgpt.png", width: 44, height: 44 },
  { alt: "Notion", src: "/logo/notion.png", width: 44, height: 44 },
  { alt: "Trello", src: "/logo/trello.png", width: 44, height: 44 },
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
          <LogoLoop logos={front} speed={45} direction="left" logoHeight={44} gap={64} pauseOnHover scaleOnHover fadeOut fadeOutColor="#121212"  />
        </div>
        <div>
          <LogoLoop logos={back} speed={45} direction="right" logoHeight={44} gap={64} pauseOnHover scaleOnHover fadeOut fadeOutColor="#121212" ariaLabel="Technologies back-end et outils" />
        </div>
      </Reveal>
    </section>
  )
}
