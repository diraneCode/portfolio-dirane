"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import ChromaGrid from '../../components/ChromaGrid';
import BtnDevis from "@/components/BtnDevis";

const items = [
    {
        image: "/dirane-square.png",
        title: "Dirane",
        subtitle: "Software Engineer",
        handle: "@diranecode",
        borderColor: "#3B82F6",
        gradient: "linear-gradient(145deg, #3B82F6, #000)",
        url: "https://github.com/diranecode"
    }
];

export default function CVSection() {
    return (
        <div>
            <motion.section
                id="competences"
                className="min-h-fit w-full bg-[#0f172a] relative py-20 px-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
                    }}
                />
                <div className="container mx-auto flex flex-col justify-between space-y-3 md:flex-row bg-[#1B2062] rounded-xl py-4 px-6">
                    <div className="bg-transparent flex flex-col space-y-3 sm:flex-row justify-between items-center">
                        <div className="h-fit relative">
                            <ChromaGrid
                                items={items}
                                radius={300}
                                damping={0.45}
                                fadeOut={0.6}
                                ease="power3.out"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-5">
                        <div className="flex flex-col justify-center space-y-5">
                            <span className="text-xl font-bold">Mon profil vous intéresse ?</span>
                            <span>Télécharger la version pdf de mon CV</span>
                        </div>
                        <a href="/dirane's-cv.pdf" className="block w-full " download>
                            <Button className="p-6 bg-blue-500 w-full sm:w-fit">
                                <FaDownload size={20} />
                                Télécharger CV
                            </Button>
                        </a>
                    </div>
                    <div className="flex flex-col items-start gap-5">
                        <div className="flex flex-col justify-center space-y-5">
                            <span className="text-xl font-bold">Vous avez besoin d&lsquo;un service ?</span>
                            <span>Obtenez un devis gratuitement</span>
                        </div>
                        <BtnDevis />
                    </div>
                </div>
            </motion.section>
        </div>
    )
}