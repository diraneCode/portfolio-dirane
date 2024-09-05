'use client'

import Navbar from "./components/navbar";
import SectionProject from "./components/project/SectionProject";
import Footer from "./components/Footer";
import SectionClient from "./components/client/SectionClient";
import HeroSection from "./components/hero/HeroSection";
import ServiceSection from "./components/service/ServiceSection";
import BtnScroll from "./ui/BtnScroll";
import { useEffect, useState } from "react";

export default function Home() {
  const [scroll, setScroll] = useState<number>(0)
    useEffect(() => {
      window.addEventListener('scroll', (e) => {
        setScroll(window.scrollY)
      })
    })
  return (
    <div className="w-screen h-fit flex flex-col bg-[#0a0b01] relative">
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <SectionClient />
      <SectionProject />
      <Footer />
      { scroll > 500 && <BtnScroll />}
    </div>
  );
}
