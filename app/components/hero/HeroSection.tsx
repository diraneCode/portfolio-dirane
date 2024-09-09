
import TypeWriter from "@/app/ui/typeWriter";
import Image from "next/image";
import Skill from "../skill";

const HeroSection = () => {
    return(
        <section id="hero" className="w-[80%] flex items-center justify-between self-center relative">
            <div className="w-[50%] h-full flex items-center justify-center relative">
                <div className="w-full h-full absolute blur-3xl backdrop-blur-3xl z-0">
                    <Image
                    src='/person.png'
                    alt="guy"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-1/2 h-full z-10 max-sm:w-full">
                    <Image
                    src='/portf.png'
                    alt="guy"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <div className="w-[50%] h-full flex flex-col space-y-5">
                <div>
                    <span className="text-primary">Hello je suis dirane👋!</span>
                    <TypeWriter />
                </div>
                <span className="text-gray-300 max-sm:hidden">
                    Je suis développeur web et mobile passionné, spécialisé en UI/UX design. Mon objectif est de transformer vos idées en expériences numériques intuitives et captivantes. Explorez mes projets et découvrez comment je peux apporter une valeur ajoutée à vos besoins technologiques
                </span>
                <a href="#contact" className="w-fit p-2 relative mb-20">
                    <div className="w-full h-full bg-green/40 absolute top-0 left-0 -rotate-6"></div>
                    <div className="w-full h-full bg-green/40 absolute top-0 left-0 rotate-6"></div>
                    Me contacter
                </a>
            </div>
            <Skill />
        </section>
    )
}

export default HeroSection;