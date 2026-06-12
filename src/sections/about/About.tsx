import Container from "../../components/ui/Container"
import Reveal from "../../components/ui/Reveal"
import SectionTitle from "../../components/ui/SectionTitle"

const stats = [
  {
    number: "5+",
    label: "ML & Software Projects",
  },
  {
    number: "10+",
    label: "Certifications",
  },
  {
    number: "3",
    label: "Research Publications",
  },
  {
    number: "AWS + GCP",
    label: "Cloud Experience",
  },
]

const About = () => {
  return (
    <section
      id="about"
      className="py-32"
    >
      <Container>
        <Reveal>
          <SectionTitle
            title="About Me"
            subtitle="Introduction"
          />

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p
                className="
                  text-zinc-400
                  text-lg
                  leading-relaxed
                "
              >
                Computer Science graduate focused on Machine Learning,
                Data Engineering, Cloud Computing, and Software
                Development. Experienced in building intelligent
                applications, scalable backend systems, automation
                workflows, and data-driven solutions using modern
                technologies.
              </p>

              <p
                className="
                  text-zinc-500
                  mt-8
                  leading-relaxed
                "
              >
                Interested in futuristic systems, space technology,
                intelligent automation, storytelling, and the evolving
                relationship between humans and technology.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="
                    p-6
                    rounded-3xl
                    border border-white/10
                    bg-white/3
                    backdrop-blur-md
                  "
                >
                  <h3 className="text-3xl font-bold mb-2">
                    {stat.number}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default About