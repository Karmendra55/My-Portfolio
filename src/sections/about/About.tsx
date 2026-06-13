import Container from "../../components/ui/Container"
import Reveal from "../../components/ui/Reveal"
import SectionTitle from "../../components/ui/SectionHeader"
import StatCard from "../../components/ui/StatCard"
import TechPills from "../../components/hero/TechPills"
import { roles } from "../../data/roles"

const stats = [
  {
    number: "10+",
    label: "Projects Built",
  },

  {
    number: "20+",
    label: "Certifications",
  },

  {
    number: "4",
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

        <SectionTitle
          title="About Me"
          subtitle="Engineer • Researcher • Builder"
        />

        <div className="grid lg:grid-cols-2 gap-16 mt-16">

          {/* Content */}
          <Reveal>
            <div>

              <p
                className="
                  text-zinc-300
                  text-xl
                  leading-relaxed
                "
              >
                Computer Science Engineer focused on Machine Learning,
                Data Engineering, Cloud Computing, and intelligent
                software systems.
              </p>

              <p
                className="
                  text-zinc-400
                  leading-relaxed
                  mt-8
                "
              >
                My work revolves around transforming ideas into
                practical products through software engineering,
                research, and experimentation. From machine learning
                applications and cloud deployments to automation
                workflows and data-driven platforms, I enjoy building
                systems that solve real-world problems while remaining
                scalable and user-focused.
              </p>

              <p
                className="
                  text-zinc-500
                  leading-relaxed
                  mt-6
                "
              >
                Beyond technology, I am deeply interested in space
                exploration, emerging technologies, futuristic systems,
                and the long-term relationship between humanity and
                intelligent machines. These interests often influence
                both my research work and personal projects.
              </p>

              {/* Focus Areas */}
              <div className="flex flex-wrap gap-3 mt-10">

                <TechPills items={roles} />

              </div>

            </div>
          </Reveal>

          {/* Stats */}
          <Reveal>
            <div className="grid grid-cols-2 gap-5">

              {stats.map((stat) => (
                <StatCard
                  key={stat.label}
                  value={stat.number}
                  label={stat.label}
                />
              ))}

            </div>
          </Reveal>

        </div>

      </Container>
    </section>
  )
}

export default About