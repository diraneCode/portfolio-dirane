import { motion } from "framer-motion";
import * as Icon from 'react-icons/fa6'

export default function CardFigma() {
    return (
        <motion.div
            className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg font-[Roboto]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
        >
            <div className="w-72 h-80 rounded py-4 px-6 flex flex-col justify-between hover:scale-110 cursor-pointer transition-all">
                <Icon.FaFigma size={50} color='#254FA' />
                <h1 className="text-xl font-bold">UI/UX design</h1>
                <span className="text-sm text-gray-400">
                    Maîtrisant Figma, je crée des interfaces utilisateur intuitives et modernes. Grâce à mon expertise en prototypage interactif et en design collaboratif, je transforme des idées en expériences visuelles captivantes. Mon approche centrée sur l’utilisateur garantit des designs fonctionnels et esthétiques.
                </span>
            </div>
        </motion.div>
    )
}