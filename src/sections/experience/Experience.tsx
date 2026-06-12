import Container from "../../components/ui/Container"
import Reveal from "../../components/ui/Reveal"
import SectionTitle from "../../components/ui/SectionTitle"

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
          <div
            className="
              absolute
              left-4
              top-0
              bottom-0
              w-px
              bg-white/10
            "
          />

          <div className="space-y-16">
            {experiences.map((item) => (
              <Reveal key={item.role}>
                <div className="relative pl-16">
                  <div
                    className="
                      absolute
                      left-0
                      top-2
                      w-8
                      h-8
                      rounded-full
                      border border-white/20
                      bg-black
                      backdrop-blur-md
                    "
                  />

                  <p className="text-sm text-zinc-500 mb-3">
                    {item.duration}
                  </p>

                  <h3 className="text-2xl font-bold">
                    {item.role}
                  </h3>

                  <p className="text-zinc-400 mt-2 mb-5">
                    {item.company}
                  </p>

                  <p
                    className="
                      text-zinc-400
                      leading-relaxed
                      max-w-3xl
                    "
                  >
                    {item.description}
                  </p>
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