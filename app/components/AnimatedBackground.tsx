"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const shapeTypes = ["circle", "cross", "triangle", "square"]

interface Shape {
  id: number
  type: string
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export default function AnimatedBackground() {
  const [shapes, setShapes] = useState<Shape[]>([])

  useEffect(() => {
    const newShapes = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 40 + 20, // Taille entre 20 et 60
      duration: Math.random() * 20 + 10, // Durée entre 10 et 30 secondes
      delay: Math.random() * -20, // Délai négatif pour un départ décalé
    }))
    setShapes(newShapes)
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          initial={{ x: `${shape.x}%`, y: `${shape.y}%`, opacity: 0 }}
          animate={{
            x: [`${shape.x}%`, `${(shape.x + 50) % 100}%`],
            y: [`${shape.y}%`, `${(shape.y + 50) % 100}%`],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            filter: "blur(4px)",
          }}
        >
          <ShapeComponent type={shape.type} size={shape.size} />
        </motion.div>
      ))}
    </div>
  )
}


function ShapeComponent({ type, size }: { type: string; size: number }) {
  const commonClasses = `w-${size} h-${size} opacity-20`

  switch (type) {
    case "circle":
      return <div className={`${commonClasses} rounded-full border-2 border-blue-500`} />
    case "cross":
      return (
        <div className={`${commonClasses} relative`}>
          <div className="absolute inset-0 m-auto w-1/2 h-full bg-blue-500" />
          <div className="absolute inset-0 m-auto w-full h-1/2 bg-blue-500" />
        </div>
      )
    case "triangle":
      return (
        <div
          className={`${commonClasses} border-l-[${size / 2}px] border-r-[${size / 2}px] border-b-[${size}px] border-l-transparent border-r-transparent border-b-blue-500`}
          style={{ width: 0, height: 0 }}
        />
      )
    case "square":
      return <div className={`${commonClasses} border-2 border-blue-500`} />
    default:
      return null
  }
}

