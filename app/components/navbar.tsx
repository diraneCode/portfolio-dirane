'use client'

import { useEffect, useState } from 'react';
import * as Icon from 'react-icons/fa6'
import { navLink } from '../lib/navLink';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState<string>();
    useEffect(() => {
        const hash = window.location.hash
        setActiveLink(hash)
    }, [])
    return(
        <div className="w-[80%] pt-5 flex items-center justify-between self-center mb-20">
            <a href='#hero' className="size-10 rounded-full bg-primary flex items-center justify-center">
                <Icon.FaChessRook size={25} />
            </a>
            <ul className="flex items-center space-x-5 max-sm:hidden">
                {
                    navLink.map((link, index) => (
                        link.name == 'Home' ? 
                        <li key={index} onClick={() => setActiveLink(link.name)}>
                            <a href={link.link} className="flex items-center">
                                <div className="size-7 rounded-full bg-primary flex justify-end items-center pr-1">{link.name.charAt(0)}</div>
                                <span>{link.name.split(link.name.charAt(0))}</span>
                            </a>
                        </li> :
                        <li key={index} onClick={() => setActiveLink(link.name)}>
                            <a className={`${activeLink == link.name ? 'text-white' : 'text-white/80'}`} href={link.link}>{link.name}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Navbar;