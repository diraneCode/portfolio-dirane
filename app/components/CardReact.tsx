import { motion } from "framer-motion";
import * as Icon from 'react-icons/fa6'

export default function CardReact() {
    return (
        <motion.div
            className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg font-[Roboto]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
        >
            <div className="w-72 h-80 rounded  py-4 px-6 flex flex-col justify-between hover:scale-110 cursor-pointer transition-all">
                <Icon.FaReact size={50} color='#254FA' />
                <h1 className="text-xl font-bold">React</h1>
                <span className="text-sm text-gray-400">
                    Maitrise de librairie react, je l`utilise au quotidien dans mes différents projets pour mes projets web ou mobiles
                </span>
            </div>
        </motion.div>
    )
}