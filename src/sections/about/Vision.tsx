import Container from "../../components/ui/Container"
import Reveal from "../../components/ui/Reveal"
import GlassCard from "../../components/ui/GlassCard"
import TechPills from "../../components/hero/TechPills"

const focusAreas = [
  "Artificial Intelligence",
  "Space Technology",
  "Large-Scale Systems",
  "Research & Innovation",
  "Human-Machine Interaction",
  "Future Civilizations",
]

const Vision = () => {
  return (
    <section className="py-32">
      <Container>

        <Reveal>
          <GlassCard
            className="
              relative
              overflow-hidden
              p-10 md:p-16
            "
          >

            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_45%)]
              "
            />

            <div className="relative z-10">

              <p
                className="
                  uppercase
                  tracking-[0.3em]
                  text-zinc-500
                  text-sm
                  mb-6
                "
              >
                Long-Term Vision
              </p>

              <h2
                className="
                  text-4xl
                  md:text-6xl
                  font-bold
                  leading-tight
                  tracking-tight
                  max-w-5xl
                "
              >
                Building technology that helps
                shape the future rather than
                simply react to it.
              </h2>

              <p
                className="
                  text-zinc-400
                  text-lg
                  leading-relaxed
                  max-w-4xl
                  mt-10
                "
              >
                My long-term goal is to contribute to systems that
                operate at meaningful scale—whether through artificial
                intelligence, cloud infrastructure, data-driven
                platforms, or future technologies that expand human
                capabilities and understanding.
              </p>

              <p
                className="
                  text-zinc-500
                  leading-relaxed
                  max-w-4xl
                  mt-6
                "
              >
                I am particularly interested in the intersection of
                intelligence, automation, research, and space
                exploration. These themes inspire both my technical
                work and personal projects, from machine learning
                applications to conceptual worlds such as Heliox,
                where technology, philosophy, and future civilizations
                converge.
              </p>

              {/* Focus Areas */}
              <div className="mt-12">

                <p className="text-zinc-500 text-sm uppercase tracking-[0.2em] mb-5">
                  Areas of Interest
                </p>

                <TechPills items={focusAreas} />

                </div>

              </div>

          </GlassCard>
        </Reveal>

      </Container>
    </section>
  )
}

export default Vision