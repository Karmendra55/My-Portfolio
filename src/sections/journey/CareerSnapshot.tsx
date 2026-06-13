import Container from "../../components/ui/Container"
import Reveal from "../../components/ui/Reveal"
import Button from "../../components/ui/Button"

const milestones = [
  {
    year: "2013",
    label: "HTML Start",
  },
  {
    year: "2018",
    label: "Python First Project",
  },
  {
    year: "2020",
    label: "B.Tech CS",
  },
  {
    year: "2024",
    label: "IEEE Publication",
  },
  {
    year: "2026",
    label: "ML Systems",
  },
]

const CareerSnapshot = () => {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              Career Snapshot
            </h2>

            <p className="text-zinc-400 mt-3">
              A quick view of my technical journey
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">

            {milestones.map((item, index) => (
              <div key={item.year} className="flex items-center gap-4">

                <div className="text-center">
                  <p className="text-cyan-400 font-semibold">
                    {item.year}
                  </p>

                  <p className="text-sm text-zinc-400">
                    {item.label}
                  </p>
                </div>

                {index !== milestones.length - 1 && (
                  <div className="hidden md:block w-10 h-px bg-white/20" />
                )}

              </div>
            ))}

          </div>
        </Reveal>

        <Reveal>
          <div className="text-center mt-10">
            <Button
              as="a"
              href="/journey"
              variant="outline"
            >
              View Full Journey
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default CareerSnapshot