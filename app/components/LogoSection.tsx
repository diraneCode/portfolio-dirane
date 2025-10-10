"use client";

import { motion } from 'framer-motion';
import LogoLoop from '../../components/LogoLoop';

export default function LogoSection() {
    const logoFrontTab = [
        {
            name: "Photoshop",
            src: "/logo/photoshop.png",
            width: 50,
            height: 50
        },
        {
            name: "ChatGPT",
            src: "/logo/chatgpt.png",
            width: 50,
            height: 50
        },
        {
            name: "Css",
            src: "/logo/css.png",
            width: 50,
            height: 50
        },
        {
            name: "React",
            src: "/logo/react.png",
            width: 50,
            height: 50
        },
        {
            name: "VSCode",
            src: "/logo/vscode.png",
            width: 50,
            height: 50
        },
        {
            name: "Tailwind",
            src: "/logo/tailwind.png",
            width: 50,
            height: 50
        },
        {
            name: "React",
            src: "/logo/react.png",
            width: 50,
            height: 50
        },
        {
            name: "Html",
            src: "/logo/html.png",
            width: 50,
            height: 50
        },
        {
            name: "Bootstrap",
            src: "/logo/bootstrap.png",
            width: 50,
            height: 50
        },
        {
            name: "Javascript",
            src: "/logo/javascript.png",
            width: 50,
            height: 50
        },
    ]

    const logoBackTab = [
        {
            name: "Mongo",
            src: "/logo/mongodb.png",
            width: 50,
            height: 50
        },
        {
            name: "Docker",
            src: "/logo/docker.png",
            width: 50,
            height: 50
        },
        {
            name: "Supabase",
            src: "/logo/supabase.png",
            width: 50,
            height: 50
        },
        {
            name: "NodeJs",
            src: "/logo/nodejs.png",
            width: 50,
            height: 50
        },
        {
            name: "NestJS",
            src: "/logo/nestjs.png",
            width: 50,
            height: 50
        },
        {
            name: "PostgreSQL",
            src: "/logo/postgre.png",
            width: 50,
            height: 50
        }
    ]
    return (
        <section id='logo'>
            <motion.section
                id="competences"
                className="min-h-fit w-full bg-[#0f172a] relative py-4 space-y-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
                    }}
                />
                <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }} className='space-y-16'>
                    <LogoLoop
                        logos={logoFrontTab}
                        speed={40}
                        direction="left"
                        logoHeight={48}
                        gap={40}
                        pauseOnHover
                        scaleOnHover
                        fadeOut
                        fadeOutColor="#ffffff"
                        ariaLabel="Technology Logo"
                    />
                    <LogoLoop
                        logos={logoBackTab}
                        speed={40}
                        direction="right"
                        logoHeight={48}
                        gap={40}
                        pauseOnHover
                        scaleOnHover
                        fadeOut
                        fadeOutColor="#ffffff"
                        ariaLabel="Technology Logo"
                    />
                </div>
            </motion.section>
        </section>
    )
}