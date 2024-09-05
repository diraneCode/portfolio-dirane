import CardClient from "./CardClient";


const SectionClient = () => {
    return(
        <section id="clients" className="w-full py-20 px-8 bg-[#0a0b01] flex flex-col items-center space-y-10">
            <h1 className="text-xl">Listen to my clients</h1>
            <div className="flex space-x-4">
                <CardClient />
                <CardClient />
                <CardClient />
            </div>
        </section>
    )
}

export default SectionClient;