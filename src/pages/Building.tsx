import Container from "../components/ui/Container"
import ScrollToTop from "../components/ui/ScrollToTop"
import BackButton from "../components/ui/BackButton"
import PageHero from "../components/ui/PageHero"
import GlassCard from "../components/ui/GlassCard"
import StatCard from "../components/ui/StatCard"

import {
  activeProject,
  pipelineProjects,
} from "../data/building"

const Building = () => {
  return (
    <>
      <ScrollToTop />

      <Container>
        <div className="py-32">

          <BackButton />

          <PageHero
            title="Currently Building"
            description="A look into active development work, project roadmaps, upcoming ideas, and technologies currently being explored."
          />

          <GlassCard className="p-8 md:p-10">

            <p className="text-cyan-400 text-sm mb-3">
              ACTIVE DEVELOPMENT
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              {activeProject.title}
            </h2>

            <p className="text-zinc-400 mt-4 max-w-4xl">
              {activeProject.description}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              <StatCard
                value={activeProject.startDate}
                label="Started"
              />

              <StatCard
                value={activeProject.lastUpdated}
                label="Last Updated"
              />

              <StatCard
                value={activeProject.currentStage}
                label="Current Stage"
              />

              <StatCard
                value={activeProject.estimatedCompletion}
                label="Estimated Completion"
              />
            </div>

            <div className="mt-12">
              <div className="flex justify-between mb-3">
                <span>Development Progress</span>
                <span>{activeProject.progress}%</span>
              </div>

              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full"
                  style={{
                    width: `${activeProject.progress}%`,
                  }}
                />
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">
                Technology Stack
              </h3>

              <div className="flex flex-wrap gap-3">
                {activeProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-4 py-2
                      rounded-full
                      border border-white/10
                      bg-white/5
                      text-sm
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">
                Development Roadmap
              </h3>

              <div className="space-y-4">
                {activeProject.milestones.map((item) => (
                  <div
                    key={item.title}
                    className="
                      flex
                      items-center
                      justify-between
                      border-b border-white/5
                      pb-3
                    "
                  >
                    <span>{item.title}</span>

                    <span className="text-sm text-zinc-400">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </GlassCard>

          <div className="mt-24">

            <h2 className="text-3xl font-bold">
              Project Pipeline
            </h2>

            <p className="text-zinc-400 mt-4">
              Concepts and projects planned for future development.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-10">

              {pipelineProjects.map((project) => (
                <GlassCard
                  key={project.title}
                  className="p-6"
                >
                  <h3 className="text-xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-cyan-400 text-sm mt-2">
                    {project.status}
                  </p>

                  <p className="text-zinc-400 mt-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-3 py-1
                          text-xs
                          rounded-full
                          border border-white/10
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              ))}

            </div>

          </div>

          <GlassCard className="mt-24 p-10">

            <h2 className="text-3xl font-bold">
              Development Philosophy
            </h2>

            <p className="text-zinc-400 mt-6 max-w-3xl leading-relaxed">
              Build small. Ship often. Improve continuously.
              Every project starts with research, evolves through
              experimentation, and gradually becomes a polished
              product through iterative development.
            </p>

          </GlassCard>

        </div>
      </Container>
    </>
  )
}

export default Building