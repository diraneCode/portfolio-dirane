import CardCode from "./CardCode";
import CardFigma from "./CardFigma";
import CardGithub from "./CardGithub";


const ServiceSection = () => {
    return(
        <section id="services" className="w-full py-20 bg-black flex flex-col items-center space-y-10">
            <h1 className="text-xl">Service</h1>
            <div className="w-full px-5 flex items-center space-x-7 place-content-center max-sm:flex-col max-sm:gap-y-10">
                <CardFigma />
                <CardCode />
                <CardGithub />
            </div>
        </section>
    )
}

export default ServiceSection;