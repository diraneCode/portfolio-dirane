import * as Icon from 'react-icons/fa6'

const CardCode = () => {
    return(
        <div className="w-72 h-80 relative">
            <div className="w-full h-full bg-green rounded rotate-6 absolute"></div>
            <div className="w-full h-full bg-dark rounded rotate-0 border-2 border-green py-8 px-6 flex flex-col justify-around">
                <Icon.FaCode size={50} color='#859a02' />
                <h1 className="text-xl">Web developper</h1>
                <span className="text-sm text-gray-500">
                    Passionné par le développement web mon expérience inclut également l’utilisation de frameworks comme React et Angular, ainsi que des compétences en backend avec Node.js et Express. Toujours à l’affût des dernières tendances, je m’efforce de concevoir des solutions innovantes et performantes.
                </span>
            </div>
        </div>
    )
}

export default CardCode;