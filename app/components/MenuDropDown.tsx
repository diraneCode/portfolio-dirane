import { FaBars, FaX } from "react-icons/fa6";
import { navLink } from "../lib/navLink";
import { useState, useEffect } from "react";

export default function MenuDropDown(){
    const [activeLink, setActiveLink] = useState<string>();
    useEffect(() => {
        const hash = window.location.hash
        setActiveLink(hash)
    }, [])
    const [activeBtn, setActiveBtn] = useState(false)
    return( 
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn" onClick={() => setActiveBtn(!activeBtn)}>
                {activeBtn ? <FaX color="#859a02" size={20} /> : <FaBars color="#859a02" size={20} />}
            </div>
            <ul
                tabIndex={0}
                className="menu dropdown-content bg-dark rounded-box z-50 mt-4 w-52 p-2 shadow">
                {
                    navLink.map((link, index) => (
                        <li key={index} onClick={() => setActiveLink(link.name)}>
                            <a className={`${activeLink == link.name ? 'text-white' : 'text-white/80'}`} href={link.link}>{link.name}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}