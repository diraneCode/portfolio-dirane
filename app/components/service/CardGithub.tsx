import * as Icon from 'react-icons/fa6'

const CardGithub = () => {
    return(
        <div className="w-72 h-80 bg-dark rounded  py-8 px-6 flex flex-col justify-around">
            <Icon.FaGithub size={50} color='#859a02' />
            <h1 className="text-xl">Github</h1>
            <span className="text-sm text-gray-500">
                Je maîtrise GitHub pour la gestion de versions et la collaboration sur des projets. J’utilise régulièrement des branches pour organiser le développement et GitHub Actions pour automatiser les workflows. Mon expérience inclut également la gestion des pull requests et la résolution des conflits de code.
            </span>
        </div>
    )
}

export default CardGithub;