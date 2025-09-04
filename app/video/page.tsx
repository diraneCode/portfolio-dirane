"use client"

import { useRef, useState, useEffect } from "react"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { Navigation, Mousewheel } from "swiper/modules"
import "swiper/css"
import "swiper/css/mousewheel"
import {
  FaChevronUp,
  FaChevronDown,
  FaPlay,
  FaPause,
  FaVolumeXmark, // mute
  FaVolumeHigh,  // unmute
} from "react-icons/fa6"

const tuto = [
  { name: "Google Maps", video: "/tuto/1.mp4" },
  { name: "Corrige tes cours", video: "/tuto/2.mp4" },
]

function SwiperNav() {
  const swiper = useSwiper()
  return (
    <div className="absolute z-40 bottom-20 left-2/3 flex flex-col gap-3">
      <button
        className="size-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shadow-lg backdrop-blur-md transition"
        onClick={() => swiper.slidePrev()}
      >
        <FaChevronUp />
      </button>
      <button
        className="size-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shadow-lg backdrop-blur-md transition"
        onClick={() => swiper.slideNext()}
      >
        <FaChevronDown />
      </button>
    </div>
  )
}

function VideoPlayer({ src, title, isActive }: { src: string; title: string; isActive: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(true)
  const [muted, setMuted] = useState(true)
  const [progress, setProgress] = useState(0)

  // Lecture/Pause auto selon le slide actif
  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }, [isActive])

  // Mise à jour de la barre de progression
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const { currentTime, duration } = videoRef.current
      setProgress((currentTime / duration) * 100)
    }
  }

  const togglePlay = () => {
    if (!videoRef.current) return
    if (videoRef.current.paused) {
      videoRef.current.play()
      setPlaying(true)
    } else {
      videoRef.current.pause()
      setPlaying(false)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setMuted(videoRef.current.muted)
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const newTime = (parseFloat(e.target.value) / 100) * videoRef.current.duration
      videoRef.current.currentTime = newTime
    }
  }

  return (
    <div className="relative w-full h-[85%] self-center max-w-sm mx-auto aspect-[9/16] rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-black">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        muted={muted}
        loop
        playsInline
        onTimeUpdate={handleTimeUpdate}
      />

      {/* Controls overlay */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4">
        {/* Title */}
        <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>

        {/* Progress bar */}
        <input
          type="range"
          min={0}
          max={100}
          value={progress}
          onChange={handleSeek}
          className="w-full accent-white cursor-pointer"
        />

        {/* Buttons */}
        <div className="flex justify-between items-center mt-3 text-white">
          <button onClick={togglePlay} className="p-2 rounded-full bg-white/20 hover:bg-white/30">
            {playing ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={toggleMute} className="p-2 rounded-full bg-white/20 hover:bg-white/30">
            {muted ? <FaVolumeXmark /> : <FaVolumeHigh />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Swiper
        modules={[Navigation, Mousewheel]}
        mousewheel
        slidesPerView={1}
        direction="vertical"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="w-full h-full"
      >
        {tuto.map((video, index) => (
          <SwiperSlide
            key={video.name}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Vidéo de fond floutée */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <video
                src={video.video}
                className="w-full h-full object-cover blur-3xl scale-110 opacity-60"
                muted
                autoPlay
                loop
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
            </div>

            {/* Vidéo principale au format mobile */}
            <VideoPlayer
              src={video.video}
              title={video.name}
              isActive={activeIndex === index}
            />
          </SwiperSlide>
        ))}

        {/* Navigation custom */}
        <SwiperNav />
      </Swiper>
    </div>
  )
}
