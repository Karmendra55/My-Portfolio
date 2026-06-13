import { techStack } from "../../data/techStack"

type TechPillsProps = {
  items?: string[]
}

const TechPills = ({
  items = techStack,
}: TechPillsProps) => {
  return (
    <div className="flex flex-wrap gap-3 mt-12">
      {items.map((item) => (
        <div
          key={item}
          className="
            px-4
            py-2
            rounded-full
            border border-white/10
            bg-white/5
            backdrop-blur-md
            text-sm
            text-zinc-300
            hover:border-white/20
            hover:bg-white/10
            transition-all
          "
        >
          {item}
        </div>
      ))}
    </div>
  )
}

export default TechPills