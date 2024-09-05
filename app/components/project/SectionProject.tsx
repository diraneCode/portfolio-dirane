import CardProject from "./CardProject";

const SectionProject = () => {
    return(
        <section id="projects" className="w-full pt-20 pb-32 bg-black flex flex-col items-center space-y-10 relative">
            <h1 className="text-xl">Featured project</h1>
            <div className="w-2/4 flex items-center justify-between flex-wrap gap-y-10">
                <CardProject />
                <CardProject />
            </div>

            <div className="w-[80%] h-20 bg-[#0e0e0d] absolute -bottom-14 px-5 py-12 rounded flex items-center justify-between">
                <span className="text-xl max-sm:text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </span>
                <button className="p-2 bg-primary rounded">
                    conatct
                </button>
            </div>
        </section>
    )
}

export default SectionProject;