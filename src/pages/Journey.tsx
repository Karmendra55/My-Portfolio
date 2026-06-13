
import Container from "../components/ui/Container"
import ScrollToTop from "../components/ui/ScrollToTop"
import { journey } from "../data/journey"
import BackButton from "../components/ui/BackButton"
import PageHero from "../components/ui/PageHero"
import GlassCard from "../components/ui/GlassCard"

const Journey = () => {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <ScrollToTop />

      <Container>
        {/* Back Button */}
        <BackButton />

        {/* Header */}
        <section className="pb-20">
          <PageHero
            badge="Journey Timeline"
            title="My Journey Through Technology"
            description="
              From HTML beginnings in school to machine learning systems,
              research publications, cloud computing, and production ML projects.
            "
          />
        </section>

        {/* Timeline */}
        <section className="pb-32">
            <div className="relative">

                {/* center line */}
                <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />

                <div className="space-y-20">
                {journey.map((item, index) => (
                    <div key={item.year} className="relative pl-16">

                    {/* node */}
                    <div className="absolute left-0 top-2 w-8 h-8 rounded-full border border-white/20 bg-black" />

                    {/* card */}
                    <GlassCard
                      className={`
                        p-7
                        transition
                        hover:bg-white/10
                        ${index % 2 === 0 ? "ml-0" : "ml-6 md:ml-16"}
                      `}
                    >

                      {/* top row */}
                      <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                        <span className="text-cyan-400 text-sm font-semibold">
                          {item.year}
                        </span>

                        <span className="text-xs uppercase tracking-wider text-zinc-500">
                          {item.phase}
                        </span>
                      </div>

                      {/* title */}
                      <h3 className="text-2xl md:text-3xl font-bold">
                        {item.title}
                      </h3>

                      {/* description */}
                      <p className="mt-4 text-zinc-400 leading-relaxed max-w-3xl">
                        {item.description}
                      </p>

                      {/* tags */}
                      <div className="flex flex-wrap gap-2 mt-5">
                        {item.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </GlassCard>
                    </div>
                ))}
                </div>

            </div>
            </section>

      </Container>
    </main>
  )
}

export default Journey