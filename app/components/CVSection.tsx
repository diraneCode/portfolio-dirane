
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import BtnDevis from "@/components/BtnDevis";
import Image from "next/image";

export default function CVSection() {
    return (
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

            <div className="container mx-auto flex items-center flex-col justify-between space-y-3 md:flex-row bg-[#1B2062] rounded-xl py-4 px-6">
                {/* Left: ChromaGrid */}
                <div className="flex-1 flex justify-center md:justify-start">
                    <div className="h-[280px] w-[280px] sm:h-[200px] sm:w-[200px] relative">
                        {/* <ChromaGrid items={items} radius={300} damping={0.45} fadeOut={0.6} ease="power3.out" /> */}
                        <Image
                            src={'/dirane-square.png'}
                            alt="photo de dirane"
                            fill
                        />
                    </div>
                </div>

                {/* Right: CV & Devis Cards */}
                <div className="flex-1 flex flex-col gap-6">
                    {/* CV Card */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-[#0f172a] rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4 shadow-lg"
                    >
                        <div className="flex-1 text-center sm:text-left">
                            <span className="text-xl font-bold block">Mon profil vous intéresse ?</span>
                            <span className="text-sm text-white/70">Télécharger la version PDF de mon CV</span>
                        </div>
                        <a href="/dirane's-cv.pdf" download className="w-full sm:w-auto">
                            <Button className="flex items-center gap-2 px-6 py-4 bg-blue-500 hover:bg-blue-600 transition-colors w-full sm:w-auto">
                                <FaDownload size={20} />
                                Télécharger CV
                            </Button>
                        </a>
                    </motion.div>

                    {/* Devis Card */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-[#0f172a] rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4 shadow-lg"
                    >
                        <div className="flex-1 text-center sm:text-left">
                            <span className="text-xl font-bold block">Besoin d’un service ?</span>
                            <span className="text-sm text-white/70">Obtenez un devis gratuitement</span>
                        </div>
                        <BtnDevis />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
