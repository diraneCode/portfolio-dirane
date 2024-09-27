import Image from "next/image";

const CardWindow = () => {
    return(
        <div className="w-80 h-80 bg-[#0e0e0c] rounded-md relative overflow-hidden">
            {/* <Image
                src='/dashboard (1).PNG'
                width={1000}
                height={1000}
                alt="project 1"
                className="w-1/2 h-1/2 object-contain"
            />       */}
            <div className="mockup-browser bg-[#141414] w-full h-full">
                <div className="mockup-browser-toolbar">
                    <div className="input bg-[#141414]">https://portfolio-dirane.vercel.app</div>
                </div>
                <div className="flex justify-center px-4 py-16 bg-[#141414]">Hello!</div>
            </div>
        </div>
    )
}

export default CardWindow;