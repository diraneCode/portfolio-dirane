"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Slider from 'react-infinite-logo-slider'

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
        <div>
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
                <Slider
                    width="150px"
                    duration={40}
                    pauseOnHover={false}
                    blurBorders={false}
                    blurBorderColor={'#fff'}
                >
                    {logoFrontTab.map((logo, index) => (
                        <Slider.Slide key={index}>
                            <div className='size-14 p-2 rounded-xl bg-white flex items-center justify-center '>
                                <Image src={logo.src} alt={logo.name} width={logo.width} height={logo.height} />
                            </div>
                        </Slider.Slide>
                    ))}
                </Slider>
                <Slider
                    width="150px"
                    duration={35}
                    pauseOnHover={false}
                    blurBorders={false}
                    blurBorderColor={'#BDBDBD'}
                    toRight={true}
                    
                >
                    {logoBackTab.map((logo, index) => (
                        <Slider.Slide key={index}>
                            <div className='size-14 p-2 rounded-xl bg-white flex items-center justify-center '>
                                <Image src={logo.src} alt={logo.name} width={logo.width} height={logo.height} />
                            </div>
                        </Slider.Slide>
                    ))}
                </Slider>
            </motion.section>
        </div>
    )
}