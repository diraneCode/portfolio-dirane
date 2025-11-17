"use client"

import StaggeredMenu from '../../components/StaggeredMenu';

const menuItems = [
    { label: 'Accueil', ariaLabel: 'Aller à l\'accueil', link: '/#home' },
    { label: 'Projets', ariaLabel: 'Voir mes projets', link: '/#projets' },
    { label: 'Services', ariaLabel: 'Mes services', link: '/#services' },
    { label: 'Contact', ariaLabel: 'Contactez-moi', link: '/#contact' },
    { label: 'Témoignages', ariaLabel: 'Voir mes témoignages', link: '/#testimonial' },
];

const socialItems = [
    { label: 'Github', link: 'https://github.com/diraneCode' },
    { label: 'LinkedIn', link: 'https://linkedin.com/in/dirane-mekem-63b588273' },
    { label: 'Tiktok', link: 'https://www.tiktok.com/@diranecode' }
];

export function Navbar() {
    return (
        <div className='absolute inset-0 z-40 pointer-events-none'>
            <StaggeredMenu
                isFixed={true}
                position="right"
                items={menuItems}
                socialItems={socialItems}
                displaySocials={true}
                displayItemNumbering={true}
                menuButtonColor="#fff"
                openMenuButtonColor="#fff"
                changeMenuColorOnOpen={true}
                colors={['#B19EEF', '#5227FF']}
                logoUrl="/apple-touch-icon.png"
                accentColor="#4169e1"
                onMenuOpen={() => console.log('Menu opened')}
                onMenuClose={() => console.log('Menu closed')}
            />
        </div>
    )
}
