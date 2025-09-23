"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Slider from 'react-infinite-logo-slider'

export default function LogoSection() {
    return (
        <div>
            <motion.section
                id="competences"
                className="min-h-fit w-full bg-[#0f172a] relative py-4 space-y-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
                    }}
                />
                <Slider
                    width="150px"
                    duration={40}
                    pauseOnHover={false}
                    blurBorders={false}
                    blurBorderColor={'#fff'}
                >
                    <Slider.Slide>
                        <div className='size-14 p-2 rounded-xl bg-white flex items-center justify-center '>
                            <Image src="/logo/docker.png" alt="docker" width={50} height={50} />
                        </div>
                    </Slider.Slide>
                    <Slider.Slide>
                        <div className='size-14 p-2 rounded-xl bg-white flex items-center justify-center '>
                            <Image src="/logo/chatgpt.png" alt="chatgpt" width={50} height={50} />
                        </div>
                    </Slider.Slide>
                    <Slider.Slide>
                        <div className='size-14 p-2 rounded-xl bg-white flex items-center justify-center '>
                            <Image src="/logo/tailwind.png" alt="tailwind" width={50} height={50} />
                        </div>
                    </Slider.Slide>
                    <Slider.Slide>
                        <div className='size-14 p-2 rounded-xl bg-white flex items-center justify-center '>
                            <Image src="/logo/react.png" alt="react" width={50} height={50} />
                        </div>
                    </Slider.Slide>
                    <Slider.Slide>
                        <div className='size-14 p-2 rounded-xl bg-white flex items-center justify-center '>
                            <Image src="/logo/vscode.png" alt="vscode" width={50} height={50} />
                        </div>
                    </Slider.Slide>
                    <Slider.Slide>
                        <div className='size-14 p-2 rounded-xl bg-white flex items-center justify-center '>
                            <Image src="/logo/tailwind.png" alt="tailwind" width={50} height={50} />
                        </div>
                    </Slider.Slide>
                    <Slider.Slide>
                        <div className='size-14 p-2 rounded-xl bg-white flex items-center justify-center '>
                            <Image src="/logo/react.png" alt="react" width={50} height={50} />
                        </div>
                    </Slider.Slide>
                    <Slider.Slide>
                        <div className='size-14 p-2 rounded-xl bg-white flex items-center justify-center '>
                            <Image src="/logo/vscode.png" alt="vscode" width={50} height={50} />
                        </div>
                    </Slider.Slide>
                </Slider>
                <Slider
                    width="150px"
                    duration={40}
                    pauseOnHover={false}
                    blurBorders={false}
                    blurBorderColor={'#BDBDBD'}
                    toRight={true}
                >
                    <Slider.Slide>
                        <div className='size-14 p-2 rounded-xl bg-white flex items-center justify-center '>
                            <Image src="/logo/docker.png" alt="docker" width={50} height={50} />
                        </div>
                    </Slider.Slide>
                    <Slider.Slide>
                        <div className='size-14 p-2 rounded-xl bg-white flex items-center justify-center '>
                            <Image src="/logo/chatgpt.png" alt="chatgpt" width={50} height={50} />
                        </div>
                    </Slider.Slide>
                    <Slider.Slide>
                        <div className='size-14 p-2 rounded-xl bg-white flex items-center justify-center '>
                            <Image src="/logo/tailwind.png" alt="tailwind" width={50} height={50} />
                        </div>
                    </Slider.Slide>
                    <Slider.Slide>
                        <div className='size-14 p-2 rounded-xl bg-white flex items-center justify-center '>
                            <Image src="/logo/react.png" alt="react" width={50} height={50} />
                        </div>
                    </Slider.Slide>
                    <Slider.Slide>
                        <div className='size-14 p-2 rounded-xl bg-white flex items-center justify-center '>
                            <Image src="/logo/vscode.png" alt="vscode" width={50} height={50} />
                        </div>
                    </Slider.Slide>
                    <Slider.Slide>
                        <div className='size-14 p-2 rounded-xl bg-white flex items-center justify-center '>
                            <Image src="/logo/tailwind.png" alt="tailwind" width={50} height={50} />
                        </div>
                    </Slider.Slide>
                    <Slider.Slide>
                        <div className='size-14 p-2 rounded-xl bg-white flex items-center justify-center '>
                            <Image src="/logo/react.png" alt="react" width={50} height={50} />
                        </div>
                    </Slider.Slide>
                    <Slider.Slide>
                        <div className='size-14 p-2 rounded-xl bg-white flex items-center justify-center '>
                            <Image src="/logo/vscode.png" alt="vscode" width={50} height={50} />
                        </div>
                    </Slider.Slide>
                </Slider>
            </motion.section>
        </div>
    )
}