'use client'
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function TypeWriter(){
    const [text] = useTypewriter({
        words: ['UX/UI Designer', 'Developpeur Web', 'Developpeur Mobile', 'Web Designer'],
        loop: 0,
        typeSpeed: 120,
        deleteSpeed: 80
    })
    return(
        <div>
            <span className="text-5xl font-bold max-sm:text-xl">{text}</span>
            <Cursor cursorColor="green" />
        </div>
    );
}