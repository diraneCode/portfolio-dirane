"use client"

import LogoLoop from "../../components/LogoLoop"

export function LogoSection() {
    const logoFrontTab = [
        { name: "Photoshop", src: "/logo/photoshop.png", width: 50, height: 50 },
        { name: "ChatGPT", src: "/logo/chatgpt.png", width: 50, height: 50 },
        { name: "CSS", src: "/logo/css.png", width: 50, height: 50 },
        { name: "React", src: "/logo/react.png", width: 50, height: 50 },
        { name: "VSCode", src: "/logo/vscode.png", width: 50, height: 50 },
        { name: "Tailwind", src: "/logo/tailwind.png", width: 50, height: 50 },
        { name: "HTML", src: "/logo/html.png", width: 50, height: 50 },
        { name: "Bootstrap", src: "/logo/bootstrap.png", width: 50, height: 50 },
        { name: "Notion", src: "/logo/notion.png", width: 50, height: 50 },
        { name: "Expo", src: "/logo/expo.png", width: 50, height: 50 },
        { name: "Trello", src: "/logo/trello.png", width: 50, height: 50 },
        { name: "Figma", src: "/logo/figma.png", width: 50, height: 50 },
        { name: "Typescript", src: "/logo/typescript.png", width: 50, height: 50 },
    ]

    const logoBackTab = [
        { name: "MongoDB", src: "/logo/mongodb.png", width: 50, height: 50 },
        { name: "Docker", src: "/logo/docker.png", width: 50, height: 50 },
        { name: "Supabase", src: "/logo/supabase.png", width: 50, height: 50 },
        { name: "NodeJs", src: "/logo/nodejs.png", width: 50, height: 50 },
        { name: "NestJS", src: "/logo/nestjs.png", width: 50, height: 50 },
        { name: "PostgreSQL", src: "/logo/postgre.png", width: 50, height: 50 },
    ]

    return (
        <section className="relative overflow-hidden py-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
            <div className="relative mx-auto w-full px- z-10">
                <div
                    className="relative"
                >
                    {/* Gradient edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900 via-slate-900 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900 via-slate-900 to-transparent z-10 pointer-events-none" />

                    <div className="space-y-8 py-6">
                        <LogoLoop
                            logos={logoFrontTab}
                            speed={35}
                            direction="left"
                            logoHeight={48}
                            gap={50}
                            pauseOnHover
                            scaleOnHover
                            fadeOut
                            fadeOutColor="#38bdf8" // cyan-400
                            ariaLabel="Front-end stack logos"
                        />
                        <LogoLoop
                            logos={logoBackTab}
                            speed={35}
                            direction="right"
                            logoHeight={48}
                            gap={50}
                            pauseOnHover
                            scaleOnHover
                            fadeOut
                            fadeOutColor="#60a5fa" // blue-400
                            ariaLabel="Back-end stack logos"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
