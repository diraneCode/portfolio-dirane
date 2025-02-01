"use client"


import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, Mousewheel } from "swiper/modules"
import "swiper/css"
import 'swiper/css/effect-fade';
import 'swiper/css/mousewheel';
import * as Icon from 'react-icons/fa6'
import { useSwiper } from 'swiper/react';



const tuto = [
    { name: "promo store", video: "/tuto/1.mp4", },
    { name: "Corrige tes cours", video: "/tuto/2.mp4", },
]


export default function Page() {
    const swiper = useSwiper();
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, Mousewheel]}
                mousewheel={true}
                spaceBetween={30}
                slidesPerView={1}
                className="w-screen h-screen flex items-center justify-center py-10"
                direction="vertical"
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 1,
                    },
                }}
            >
                {tuto.map((video) => (
                    <SwiperSlide key={video.name} className="w-1/2 h-full bg-white/5 rounded-xl overflow-hidden relative">
                        <div className="w-screen h-screen absolute blur-2xl backdrop-blur- -z-10">
                            <video src="/tuto/1.mp4" className="w-full h-full" muted autoPlay={true}></video>
                        </div>
                        <video src="/tuto/1.mp4" className="w-full h-full z-30" muted autoPlay={true}></video>
                    </SwiperSlide>
                ))}
                <div className="absolute z-40 bottom-20 right-1/4 space-y-4">
                    <button className="size-8 rounded-full bg-white/10 flex items-center justify-center" onClick={() => swiper.slidePrev()}>
                        <Icon.FaChevronUp />
                    </button>
                    <button className="size-8 rounded-full bg-white/10 flex items-center justify-center" onClick={() => swiper.slideNext()}>
                        <Icon.FaChevronDown />
                    </button>
                </div>
            </Swiper>
        </div>
    )
}