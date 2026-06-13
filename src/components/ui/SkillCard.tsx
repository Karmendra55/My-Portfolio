import type { ReactNode } from "react"

interface SkillCardProps {
  title: string
  icon: ReactNode
  skills: string[]
}

const SkillCard = ({
  title,
  icon,
  skills,
}: SkillCardProps) => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        p-7
        transition-all
        duration-300
      "
    >
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]
        "
      />

      <div className="relative z-10">
        <div
          className="
            w-14
            h-14
            rounded-2xl
            bg-white/10
            flex
            items-center
            justify-center
            text-2xl
            mb-6
          "
        >
          {icon}
        </div>

        <h3 className="text-2xl font-semibold mb-5">
          {title}
        </h3>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="
                px-3
                py-2
                rounded-full
                bg-white/5
                border border-white/10
                text-sm
                text-zinc-300
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillCard