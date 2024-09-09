import Image from 'next/image';
import * as Icon from 'react-icons/fa6'

type props = {
    nom: string
    description: string
    stars: number
    link: string
}

const CardClient = ({nom, description, stars, link}: props) => {
    return(
        <div className="w-full p-5 bg-dark rounded flex flex-col items-center space-y-2">
            <div className="size-16 bg-gray-500 rounded-full overflow-hidden">
                <Image
                    src='/folio.jpeg'
                    alt='person'
                    width={1000}
                    height={1000}
                    className='w-full h-full object-contain'
                />
            </div>
            <h1>{nom}</h1>
            <div className='flex space-x-2'>
                <Icon.FaStar size={23} fill='#859a02' />
                <Icon.FaStar size={23} fill='#859a02' />
                <Icon.FaStar size={23} fill='#859a02' />
                <Icon.FaStar size={23} fill='#859a02' />
                <Icon.FaStar size={23} />
            </div>
            <div className='text-gray-400 text-center'>
                {description}
            </div>
            <a href={link} target='_blank' className='text-primary font-bold'>Voir</a>
        </div>
    )
}

export default CardClient;