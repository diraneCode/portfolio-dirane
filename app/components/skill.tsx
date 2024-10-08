const Skill = () => {
    return(
        <div className="w-full bg-white/20 rounded p-4 absolute left-0 -bottom-12 self-center z-10 max-sm:p-1">
            <div className="h-full w-full bg-gray-900/20 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 absolute top-0 left-0 -z-10"></div>
            <div className="flex flex-row items-center z-20 overflow-auto max-sm:justify-between">
                <div className="w-[22%] flex flex-col space-y-4 max-sm:w-[30%]">
                    <span className="text-xl">50+</span>
                    <span className="text-gray-400 max-sm:text-sm">Projets</span>
                </div>
                <div className="w-[22%] flex flex-col space-y-4 max-sm:w-[30%]">
                    <span className="text-xl">40+</span>
                    <span className="text-gray-400 max-sm:text-sm">Livrer</span>
                </div>
                <div className="w-[22%] flex flex-col space-y-4 max-sm:w-[30%]">
                    <span className="text-xl">20+</span>
                    <span className="text-gray-400 max-sm:text-sm">Partenaires</span>
                </div>
                <div className="w-[22%] flex flex-col space-y-4 max-sm:w-[30%]">
                    <span className="text-xl">45+</span>
                    <span className="text-gray-400 max-sm:text-sm">Terminer</span>
                </div>
            </div>
        </div>
    )
}

export  default Skill;