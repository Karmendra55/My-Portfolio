interface SectionTitleProps {
  title: string
  subtitle?: string
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="mb-14">
      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-3">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
        {title}
      </h2>
    </div>
  )
}

export default SectionTitle