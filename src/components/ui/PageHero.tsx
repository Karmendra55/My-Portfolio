type PageHeroProps = {
  title: string
  description: string
  badge?: string
}

const PageHero = ({
  title,
  description,
  badge,
}: PageHeroProps) => {
  return (
    <div className="mb-20">
      {badge && (
        <p className="text-cyan-400 mb-4">
          {badge}
        </p>
      )}

      <h1 className="text-5xl md:text-6xl font-bold">
        {title}
      </h1>

      <p className="text-zinc-400 text-lg mt-6 max-w-3xl">
        {description}
      </p>
    </div>
  )
}

export default PageHero