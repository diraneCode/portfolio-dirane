import Image from 'next/image';
import * as Icon from 'react-icons/fa6'

const CardClient = () => {
    return(
        <div className="w-full p-5 bg-dark rounded flex flex-col items-center space-y-2">
            <div className="size-16 bg-gray-500 rounded-full overflow-hidden">
                <Image
                    src='/person.png'
                    alt='person'
                    width={1000}
                    height={1000}
                    className='w-full h-full object-contain'
                />
            </div>
            <h1>Promo Store</h1>
            <div className='flex space-x-2'>
                <Icon.FaStar size={23} fill='#859a02' />
                <Icon.FaStar size={23} fill='#859a02' />
                <Icon.FaStar size={23} fill='#859a02' />
                <Icon.FaStar size={23} fill='#859a02' />
                <Icon.FaStar size={23} />
            </div>
            <div className='text-gray-400 text-center'>
                “Professionnel, réactif et à l’écoute, il a su transformer notre vision en réalité. Un vrai plaisir de travailler avec lui.”
            </div>
        </div>
    )
}

export default CardClient;