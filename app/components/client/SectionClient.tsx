import CardClient from "./CardClient";

// Swiper components, modules and styles
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SectionClient = () => {
    return(
        <section id="clients" className="w-full py-20 px-8 bg-[#0a0b01] flex flex-col items-center space-y-10">
            <h1 className="text-xl">Appreciation des clients</h1>
            <Swiper 
                navigation
                pagination={true}
                modules={[Navigation]} 
                spaceBetween={1}
                slidesPerView={1}   
                slidesPerGroup={1}  
                className="w-full flex flex-row space-x-4 overflow-scroll"
            >
                <SwiperSlide>
                    <CardClient />
                </SwiperSlide>
                <SwiperSlide>
                    <CardClient />
                </SwiperSlide>
                <SwiperSlide>
                    <CardClient />
                </SwiperSlide>
            </Swiper>
            {/* <div className="w-full flex space-x-4 overflow-scroll">
                <CardClient />
                <CardClient />
                <CardClient />
            </div> */}
        </section>
    )
}

export default SectionClient;