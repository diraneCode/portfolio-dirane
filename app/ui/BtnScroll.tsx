import { FaArrowUp, FaChevronUp } from "react-icons/fa6";

const BtnScroll = () => {
    return(
        <a href="#hero" className="size-10 rounded-full flex items-center justify-center bg-gray-900 fixed right-[2vw] bottom-[5vh] border border-[#859a02]">
            <FaArrowUp size={20} color="539400" />
        </a>
    )
}

export default BtnScroll;