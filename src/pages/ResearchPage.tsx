import Container from "../components/ui/Container"
import GridBackground from "../components/background/GridBackground"
import BackButton from "../components/ui/BackButton"
import PageHero from "../components/ui/PageHero"
import StatCard from "../components/ui/StatCard"
import GlassCard from "../components/ui/GlassCard"
import ScrollToTop from "../components/ui/ScrollToTop"

import { research } from "../data/research"

const ResearchPage = () => {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <ScrollToTop />
      <GridBackground />

      <section className="pt-40 pb-24">
        <Container>
          <BackButton />

          <PageHero
            badge="Publications & Innovation"
            title="Research Portfolio"
            description="
              Research contributions spanning
              Machine Learning,
              Blockchain Technology,
              Wireless Sensor Networks,
              and Aerospace Systems.
            "
          />

          <div className="grid md:grid-cols-3 gap-6 mt-16">

            <StatCard
              value="4"
              label="Publications"
            />

            <StatCard
              value="4"
              label="Research Domains"
            />

            <StatCard
              value="2022-2024"
              label="Publication Timeline"
            />

            </div>

            <div className="grid lg:grid-cols-2 gap-8 mt-20">

                {research.map((paper) => (
                    <GlassCard
                      key={paper.id}
                      className="p-8"
                    >
                    <p className="text-cyan-400 text-sm mb-3">
                        {paper.category}
                    </p>

                    <h2 className="text-2xl font-bold">
                        {paper.title}
                    </h2>

                    <p className="text-zinc-400 mt-4">
                        {paper.description}
                    </p>

                    <div className="mt-6">
                        <p className="text-sm text-zinc-500">
                        {paper.venue}
                        </p>

                        <p className="text-sm text-zinc-500">
                        {paper.year}
                        </p>
                    </div>

                    <a
                        href={paper.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        inline-block
                        mt-6
                        px-5 py-2
                        rounded-full
                        border border-white/10
                        hover:bg-white/10
                        transition
                        "
                    >
                        View Publication
                    </a>

                    </ GlassCard>
                ))}

                </div>

        </Container>
      </section>

    </main>
  )
}

export default ResearchPage