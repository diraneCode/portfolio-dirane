"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";

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
                <div className="container mx-auto flex flex-col space-y-3 sm:flex-row justify-between items-center bg-[#1B2062] rounded-xl py-4 px-6">
                    <div className="flex flex-col space-y-3 sm:flex-row justify-between items-center">
                        <div className="sm:size-28 sm:rounded-xl rounded-md">
                            <Image
                                src={"/dirane-square.png"}
                                alt="CV"
                                width={800}
                                height={600}
                                className="mx-auto"
                            />
                        </div>
                        <div className="flex flex-col justify-center ml-6 space-y-2">
                            <span className="text-xl font-bold">Mon profil vous intéresse ?</span>
                            <span>Télécharger la version pdf de mon curriculum vitae pour en savoir plus...</span>
                        </div>
                    </div>
                    <a href="/dirane's-cv.pdf" download>
                        <Button className="p-6 bg-blue-500 w-full sm:w-fit">
                            <FaDownload size={20} />
                            Télécharger CV
                        </Button>
                    </a>
                </div>
            </motion.section>
        </div>
    )
}