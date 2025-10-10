import React, { useLayoutEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';
import Link from 'next/link';

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  logo: string;
  logoAlt?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  // baseColor = '#fff',
  // menuColor,
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const calculateHeight = useCallback(() => {
    const navEl = navRef.current;
    if (!navEl) return 260;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
      if (contentEl) {
        const prev = {
          visibility: contentEl.style.visibility,
          pointerEvents: contentEl.style.pointerEvents,
          position: contentEl.style.position,
          height: contentEl.style.height,
        };
        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';
        const topBar = 60;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;
        Object.assign(contentEl.style, prev);
        return topBar + contentHeight + padding;
      }
    }
    return 260;
  }, []);

  const createTimeline = useCallback(() => {
    const navEl = navRef.current;
    if (!navEl) return null;
    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });
    const tl = gsap.timeline({ paused: true });
    tl.to(navEl, { height: calculateHeight, duration: 0.4, ease });
    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');
    return tl;
  }, [calculateHeight, ease]);

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;
    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [createTimeline, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;
      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) tlRef.current = newTl;
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded, calculateHeight, createTimeline]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
      className={`
        card-nav-container absolute left-1/2 -translate-x-1/2
        w-[92%] max-w-[900px] z-[99] top-[1em] md:top-[2em]
        ${className}
      `}
    >
      <nav
        ref={navRef}
        className={`
          relative block h-[60px] rounded-2xl overflow-hidden
          shadow-[0_8px_40px_rgba(0,0,0,0.25)]
          transition-all duration-500 ease-out
          backdrop-blur-2xl backdrop-saturate-150
          border border-white/20 bg-gradient-to-br
          from-white/15 via-white/10 to-transparent
          hover:shadow-[0_12px_50px_rgba(0,0,0,0.35)]
          hover:scale-[1.01]
          ${isExpanded ? "ring-1 ring-white/30" : ""}
        `}
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
        }}
      >
        {/* --- TOP BAR --- */}
        <div className="absolute inset-x-0 top-0 h-[60px] flex items-center justify-between px-4 z-[2]">
          <Link
            href="/"
            className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
          >
            <img src={logo} alt={logoAlt} className="h-[40px] w-auto drop-shadow-lg" />
          </Link>

          {/* --- Hamburger --- */}
          <div
            className={`relative flex flex-col justify-center items-center gap-[6px] cursor-pointer z-[10]
                        transition-transform duration-300 ${isHamburgerOpen ? "rotate-90" : ""}`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <span
              className={`block w-[28px] h-[2px] bg-white transition-all duration-300 rounded-full
                ${isHamburgerOpen ? "translate-y-[6px] rotate-45 bg-cyan-400" : "bg-white/80"}`}
            />
            <span
              className={`block w-[28px] h-[2px] bg-white transition-all duration-300 rounded-full
                ${isHamburgerOpen ? "-translate-y-[6px] -rotate-45 bg-cyan-400" : "bg-white/80"}`}
            />
          </div>
        </div>

        {/* --- CONTENT --- */}
        <div
          className={`
            card-nav-content absolute left-0 right-0 top-[60px] bottom-0
            flex flex-col md:flex-row gap-3 md:gap-4 p-4
            transition-[opacity,visibility] duration-300
            ${isExpanded ? "visible opacity-100" : "invisible opacity-0"}
          `}
        >
          {items.slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card select-none relative flex flex-col gap-2 p-[12px_16px] rounded-[calc(0.75rem-0.2rem)] min-w-0 flex-[1_1_auto] h-auto min-h-[60px] md:h-full md:min-h-0 md:flex-[1_1_0%]"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label font-normal tracking-[-0.5px] text-[18px] md:text-[22px]">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-[2px]">
                {item.links?.map((lnk, i) => (
                  <a
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link inline-flex items-center gap-[6px] no-underline cursor-pointer transition-opacity duration-300 hover:opacity-75 text-[15px] md:text-[16px]"
                    href={lnk.href}
                    aria-label={lnk.ariaLabel}
                  >
                    <GoArrowUpRight className="nav-card-link-icon shrink-0" aria-hidden="true" />
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Halo animé */}
        <span className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 to-blue-600/10 blur-3xl -z-10" />
      </nav>
    </div>
  );
};

export default CardNav;
