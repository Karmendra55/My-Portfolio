import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const CursorGlow = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [])

  return (
    <motion.div
      animate={{
        x: position.x - 150,
        y: position.y - 150,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        mass: 0.5,
      }}
      className="
        pointer-events-none
        fixed
        top-0
        left-0
        z-0
        h-75
        w-75
        rounded-full
        bg-white/4
        blur-3xl
      "
    />
  )
}

export default CursorGlow