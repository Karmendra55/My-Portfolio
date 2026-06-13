import Container from "../../components/ui/Container"
import Reveal from "../../components/ui/Reveal"
import SectionTitle from "../../components/ui/SectionHeader"
import GlassCard from "../../components/ui/GlassCard"
import Button from "../../components/ui/Button"

import { Link } from "react-router-dom"

import { activeProject } from "../../data/building"

const BuildingPreview = () => {
  return (
    <section
      id="building"
      className="py-32"
    >
      <Container>

        <Reveal>
          <SectionTitle
            title="Building Now"
            subtitle="Current Development Focus"
          />
        </Reveal>

        <Reveal>
          <GlassCard
            className="
              mt-16
              p-8
            "
          >
            <h3 className="text-3xl font-bold">
              {activeProject.title}
            </h3>

            <p className="text-zinc-400 mt-4 max-w-3xl">
              {activeProject.subtitle}
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">

              <div>
                <p className="text-zinc-500 text-sm">
                  Status
                </p>

                <p className="font-medium mt-1">
                  Active Development
                </p>
              </div>

              <div>
                <p className="text-zinc-500 text-sm">
                  Current Stage
                </p>

                <p className="font-medium mt-1">
                  {activeProject.currentStage}
                </p>
              </div>

              <div>
                <p className="text-zinc-500 text-sm">
                  Target MVP
                </p>

                <p className="font-medium mt-1">
                  {activeProject.estimatedCompletion}
                </p>
              </div>

            </div>

            <Link to="/building">
              <Button className="mt-8">
                Explore Development Roadmap
              </Button>
            </Link>

          </GlassCard>
        </Reveal>

      </Container>
    </section>
  )
}

export default BuildingPreview