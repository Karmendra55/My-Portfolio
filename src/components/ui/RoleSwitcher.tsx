import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

const roles = [
  "Machine Learning Engineer",
  "Data Engineer",
  "Cloud Developer",
  "Python Developer",
  "Research Enthusiast",
]

const RoleSwitcher = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-10 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={roles[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="
            text-lg
            md:text-2xl
            text-zinc-300
            font-medium
          "
        >
          {roles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

export default RoleSwitcher