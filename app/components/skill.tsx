const Skill = () => {
    return(
        <div className="w-full bg-white/20 rounded p-4 absolute left-0 -bottom-12 self-center z-10">
            <div className="h-full w-full bg-gray-900/20 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 absolute top-0 left-0 -z-10"></div>
            <div className="flex items-center  z-20">
                <div className="w-[22%] flex flex-col space-y-4">
                    <span className="text-xl">12+</span>
                    <span className="text-gray-400">Your repositories</span>
                </div>
                <div className="w-[22%] flex flex-col space-y-4">
                    <span className="text-xl">60+</span>
                    <span className="text-gray-400">Cleares</span>
                </div>
                <div className="w-[22%] flex flex-col space-y-4">
                    <span className="text-xl">240+</span>
                    <span className="text-gray-400">Complete projects</span>
                </div>
                <div className="w-[22%] flex flex-col space-y-4">
                    <span className="text-xl">20+</span>
                    <span className="text-gray-400">Achievements</span>
                </div>
            </div>
        </div>
    )
}

export  default Skill;