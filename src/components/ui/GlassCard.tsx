import type { ReactNode } from "react"

type GlassCardProps = {
  children: ReactNode
  className?: string
  hover?: boolean
}

const GlassCard = ({
  children,
  className = "",
  hover = true,
}: GlassCardProps) => {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-md
        transition-all
        duration-300
        hover:bg-white/10
        hover:border-white/20
        ${className}
        ${hover
            ? `
                hover:bg-white/10
                hover:border-white/20
            `
            : ""
            }
      `}
    >
      {children}
    </div>
  )
}

export default GlassCard