import { useParams } from "react-router-dom"
import { projectDetails } from "../data/projectDetails"
import { FaGithub } from "react-icons/fa"

import Container from "../components/ui/Container"
import BackButton from "../components/ui/BackButton"
import PageHero from "../components/ui/PageHero"
import GlassCard from "../components/ui/GlassCard"
import StatCard from "../components/ui/StatCard"
import ScrollToTop from "../components/ui/ScrollToTop"
import Button from "../components/ui/Button"

const ProjectDetails = () => {
  const { slug } = useParams()

  const project =
    slug &&
    projectDetails[
      slug as keyof typeof projectDetails
    ]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Project Not Found
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <ScrollToTop />
      <Container className="pt-32">
        <BackButton />
      </Container>

        {/* HERO */}

        <Container className="py-16">

            <img
            src={project.heroImage}
            alt={project.title}
            className="
                w-full
                rounded-3xl
                border
                border-white/10
                mb-12
            "
            />

            <PageHero
                badge="Case Study"
                title={project.title}
                description={project.subtitle}
            />

        </Container>

        {/* METRICS */}

        <section className="max-w-6xl mx-auto px-6">

            <div className="grid md:grid-cols-4 gap-6">

            {project.metrics.map((metric) => (
                <StatCard
                    key={metric.label}
                    value={metric.value}
                    label={metric.label}
                />
            ))}

            </div>

        </section>

        {/* Content */}

        <section className="max-w-6xl mx-auto px-6 py-20 space-y-20">

            <div>
            <h2 className="text-3xl font-bold mb-6">
                Overview
            </h2>

            <p className="text-zinc-400 leading-relaxed">
                {project.overview}
            </p>
            </div>

            <div>
            <h2 className="text-3xl font-bold mb-6">
                Problem
            </h2>

            <p className="text-zinc-400 leading-relaxed">
                {project.problem}
            </p>
            </div>

            <div>
            <h2 className="text-3xl font-bold mb-6">
                Solution
            </h2>

            <p className="text-zinc-400 leading-relaxed">
                {project.solution}
            </p>
            </div>

            {/* Architecture */}

            <div>
            <h2 className="text-3xl font-bold mb-8">
                Architecture
            </h2>

            <div className="flex flex-wrap gap-4">

                {project.architecture.map((step) => (
                    <GlassCard
                        key={step}
                        className="px-5 py-3"
                    >
                        {step}
                    </GlassCard>
                ))}

            </div>
            </div>

            {/* Tech Stack */}

            <div>
            <h2 className="text-3xl font-bold mb-8">
                Tech Stack
            </h2>

            <div className="flex flex-wrap gap-3">

                {project.techStack.map((tech) => (
                <span
                    key={tech}
                    className="
                    px-4
                    py-2
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    "
                >
                    {tech}
                </span>
                ))}

            </div>
            </div>

            {/* Challenges */}

            <div>
            <h2 className="text-3xl font-bold mb-8">
                Engineering Challenges
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

                {project.challenges.map((challenge) => (
                    <GlassCard
                        key={challenge.title}
                        className="p-6"
                    >
                        <h3 className="font-semibold mb-4">
                        {challenge.title}
                        </h3>

                        <p className="text-zinc-400">
                        {challenge.description}
                        </p>
                    </GlassCard>
                ))}

            </div>
            </div>

            {/* Results */}

            <div>
            <h2 className="text-3xl font-bold mb-8">
                Results
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

                {project.results.map((result) => (
                    <GlassCard
                        key={result}
                        className="p-5"
                    >
                        {result}
                    </GlassCard>
                ))}

            </div>
            </div>

            {/* Lessons */}

            <div>
            <h2 className="text-3xl font-bold mb-8">
                Lessons Learned
            </h2>

            <ul className="space-y-4 text-zinc-400">

                {project.lessonsLearned.map((lesson) => (
                <li key={lesson}>
                    • {lesson}
                </li>
                ))}

            </ul>
            </div>

            {/* Github */}

            <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                >
                <Button
                    variant="outline"
                    className="inline-flex items-center gap-3"
                >
                    <FaGithub size={20} />
                    View Repository
                </Button>
            </a>

        </section>

        </main>
    )
}
export default ProjectDetails