import * as Icon from 'react-icons/fa6'

const CardGithub = () => {
    return(
        <div className="w-72 h-80 bg-dark rounded  py-8 px-6 flex flex-col justify-around">
            <Icon.FaGithub size={50} color='#859a02' />
            <h1 className="text-xl">Github</h1>
            <span className="text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptatibus sed eos dolor voluptatum molestias non nobis in deserunt ullam tempora ipsa et sunt earum, nam voluptatem unde quod quo.
            </span>
        </div>
    )
}

export default CardGithub;