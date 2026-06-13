import Reveal from "./Reveal"

type SectionHeaderProps = {
  title: string
  subtitle?: string
  description?: string
}

const SectionHeader = ({
  title,
  subtitle,
  description,
}: SectionHeaderProps) => {
  return (
    <Reveal>
      <div className="mb-16">
        {subtitle && (
          <p
            className="
              mb-3
              text-sm
              uppercase
              tracking-[0.3em]
              text-zinc-500
            "
          >
            {subtitle}
          </p>
        )}

        <h2
          className="
            text-4xl
            md:text-5xl
            font-bold
            tracking-tight
          "
        >
          {title}
        </h2>

        {description && (
          <p
            className="
              mt-4
              max-w-3xl
              text-zinc-400
              leading-relaxed
            "
          >
            {description}
          </p>
        )}
      </div>
    </Reveal>
  )
}

export default SectionHeader