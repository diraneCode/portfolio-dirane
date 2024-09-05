
import TypeWriter from "@/app/ui/typeWriter";
import Image from "next/image";
import Skill from "../skill";

const HeroSection = () => {
    return(
        <section id="hero" className="w-full flex items-center justify-between self-center relative">
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
                    src='/person.png'
                    alt="guy"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <div className="w-[50%] h-full flex flex-col space-y-5">
                <div>
                    <span className="text-primary">Hello je suis joker!</span>
                    <TypeWriter />
                </div>
                <span className="text-gray-300 max-sm:hidden">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellendus ex cupiditate, quis labore excepturi, assumenda iure officia eos eveniet dolorem minus sint perferendis voluptas voluptatum, quasi magnam odio voluptatem.
                </span>
                <button className="w-fit p-2 relative">
                    <div className="w-full h-full bg-green/40 absolute top-0 left-0 -rotate-6"></div>
                    <div className="w-full h-full bg-green/40 absolute top-0 left-0 rotate-6"></div>
                    ABOUT ME
                </button>
            </div>
            <Skill />
        </section>
    )
}

export default HeroSection;