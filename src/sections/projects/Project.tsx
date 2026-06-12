import Container from "../../components/ui/Container"
import ProjectCard from "../../components/ui/ProjectCard"
import Reveal from "../../components/ui/Reveal"
import SectionTitle from "../../components/ui/SectionTitle"

import { projects } from "../../data/projects"

const Projects = () => {
  const featuredProjects = projects.filter(
    (project) => project.featured
  )

  const otherProjects = projects.filter(
    (project) => !project.featured
  )

  return (
    <section
      id="projects"
      className="py-32"
    >
      <Container>
        <Reveal>
          <SectionTitle
            title="Projects & Engineering"
            subtitle="Selected Work"
          />
        </Reveal>

        <div className="space-y-8">
          {featuredProjects.map((project) => (
            <Reveal key={project.title}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24">
          <h3
            className="
              text-2xl
              font-semibold
              mb-10
            "
          >
            Additional Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-7">
            {otherProjects.map((project) => (
              <ProjectCard
                key={project.title}
                {...project}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default Projects