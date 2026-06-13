import Container from "../../components/ui/Container"
import Reveal from "../../components/ui/Reveal"
import SectionTitle from "../../components/ui/SectionHeader"
import GlassCard from "../../components/ui/GlassCard"

import { experiences } from "../../data/experience"

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32"
    >
      <Container>
        <Reveal>
          <SectionTitle
            title="Experience Timeline"
            subtitle="Career Journey"
          />
        </Reveal>

        <div className="relative mt-16">

          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-14">
            {experiences.map((item) => (
              <Reveal key={item.role}>
                <div className="relative pl-16">

                  {/* node */}
                  <div className="absolute left-0 top-2 w-8 h-8 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-md" />

                  {/* card */}
                  <GlassCard className="p-6">

                    <p className="text-sm text-cyan-400 mb-2">
                      {item.duration}
                    </p>

                    <h3 className="text-xl md:text-2xl font-semibold">
                      {item.role}
                    </h3>

                    <p className="text-zinc-400 mt-1 mb-2">
                      {item.company}
                    </p>

                    <p className="text-zinc-400 leading-relaxed max-w-3xl">
                      {item.description}
                    </p>

                  </GlassCard>

                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </Container>
    </section>
  )
}

export default Experience