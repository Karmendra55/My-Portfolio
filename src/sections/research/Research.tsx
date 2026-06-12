import Container from "../../components/ui/Container"
import Reveal from "../../components/ui/Reveal"
import SectionTitle from "../../components/ui/SectionTitle"

import { research } from "../../data/research"

const Research = () => {
  return (
    <section
      id="research"
      className="py-32"
    >
      <Container>
        <Reveal>
          <SectionTitle
            title="Research & Publications"
            subtitle="Exploration & Innovation"
          />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {research.map((item) => (
            <Reveal key={item.title}>
              <div
                className="
                  h-full
                  rounded-4xl
                  border border-white/10
                  bg-white/3
                  p-8
                  hover:bg-white/5
                  transition
                "
              >
                <p className="text-sm text-zinc-500 mb-5">
                  {item.event}
                </p>

                <h3
                  className="
                    text-2xl
                    font-bold
                    leading-snug
                    mb-5
                  "
                >
                  {item.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Research