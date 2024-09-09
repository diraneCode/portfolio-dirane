import * as Icon from 'react-icons/fa6'

const CardFigma = () => {
    return(
        <div className="w-72 h-80 bg-dark rounded  py-8 px-6 flex flex-col justify-around">
            <Icon.FaFigma size={50} color='#859a02' />
            <h1 className="text-xl">UI/UX design</h1>
            <span className="text-sm text-gray-500">
                Maîtrisant Figma, je crée des interfaces utilisateur intuitives et modernes. Grâce à mon expertise en prototypage interactif et en design collaboratif, je transforme des idées en expériences visuelles captivantes. Mon approche centrée sur l’utilisateur garantit des designs fonctionnels et esthétiques.
            </span>
        </div>
    )
}

export default CardFigma;