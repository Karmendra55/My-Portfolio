import type { ReactNode } from "react"

type StatusBadgeProps = {
  children: ReactNode
}

const StatusBadge = ({
  children,
}: StatusBadgeProps) => {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-3
        px-4
        py-2
        rounded-full
        border border-white/10
        bg-white/5
        backdrop-blur-md
        text-sm
        text-zinc-400
      "
    >
      <span className="w-2 h-2 rounded-full bg-green-500" />

      {children}
    </div>
  )
}

export default StatusBadge