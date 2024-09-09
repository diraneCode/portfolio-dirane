import * as Icon from 'react-icons/fa6'

const Footer = () => {
    return(
        <section id='contact' className='w-full bg-[#10100e] pt-20 flex flex-col items-center space-y-10'>
            <div className="size-10 rounded-full bg-primary flex items-center justify-center">
                <Icon.FaChessRook size={25} />
            </div>
            <div className='flex space-x-4'>
                <a href="https://facebook.com" target='_blank'>
                    <Icon.FaFacebook size={25} color='#1877F2' />
                </a>
                <a href="https://www.tiktok.com/@diranecode" target='_blank'>
                    <Icon.FaTiktok size={25} stroke='#ff0050' />                    
                </a>
                <a href="https://api.whatsapp.com/send?phone=237697609387" target='_blank'>
                    <Icon.FaWhatsapp size={25} color='#075e54' />                    
                </a>
                <a href="https://instagram.com" target='_blank'>
                    <Icon.FaInstagram size={25} color='pink' />                    
                </a>
                <a href="https://www.linkedin.com/in/dirane-mekem-63b588273" target='_blank'>
                    <Icon.FaLinkedin size={25} color='#0e76a8' />                    
                </a>
                <a href="https://github.com/diranecode" target='_blank'>
                    <Icon.FaGithub size={25} color='#24292e' />                    
                </a>
                <a href="https://x.com/dirane_mekem" target='_blank'>
                    <Icon.FaXTwitter size={25} color='#657786' />                    
                </a>
            </div>
            <div className='w-[90%] border-t border-gray-500 flex justify-end py-3'>
                <div className='flex items-center space-x-1'>
                    <span>&copy; 2024</span>
                    <span>Design By</span>
                    <Icon.FaCode color='#24292e' size={20} />
                    <a target='_blank' href="https://www.github.com/diranecode" className='text-secondary text-lg'>diraneCode</a>
                </div>
            </div>
        </section>
    )
}

export default Footer;