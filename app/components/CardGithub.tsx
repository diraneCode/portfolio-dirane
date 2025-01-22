import { motion } from "framer-motion";
import * as Icon from 'react-icons/fa6'

export default function CardGithub() {
    return (
        <motion.div
            className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg relative font-[Roboto]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
        >
                <div className="w-full h-full rounded rotate-0 border-2py-4 px-6 flex flex-col justify-between">
                    <Icon.FaGithub size={50} color='#254FA' />
                    <h1 className="text-xl font-bold">Github</h1>
                    <span className="text-sm text-gray-400">
                    Je maîtrise GitHub pour la gestion de versions et la collaboration sur des projets. J’utilise régulièrement des branches pour organiser le développement et GitHub Actions pour automatiser les workflows. Mon expérience inclut également la gestion des pull requests et la résolution des conflits de code.
                    </span>
                </div>
        </motion.div>
    )
}