import Reveal from "../../components/ui/Reveal"
import SectionTitle from  "../../components/ui/SectionHeader"

type Research = {
  id: string
  title: string
  venue: string
  year: string
  category?: string
  description: string
  url: string
}

type Props = {
  publications: Research[]
}

const Publications = ({
  publications,
}: Props) => {
  return (
    <div className="mt-32">

      <SectionTitle
        title="Publications & Research Work"
        subtitle="Research publications, conference papers, journal contributions, and aerospace R&D work."
      />

      <div className="grid gap-6">
        {publications.map((item) => (
          <Reveal key={item.id}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                block
                rounded-2xl
                border border-white/10
                bg-white/5
                p-6
                hover:bg-white/10
                transition
              "
            >
              <p className="text-cyan-400 text-xs mb-2">
                {item.category}
              </p>

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="text-zinc-400 mt-2">
                {item.venue}
              </p>

              <p className="text-zinc-500 text-sm mt-1">
                {item.year}
              </p>

              <p className="text-zinc-400 mt-4">
                {item.description}
              </p>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default Publications