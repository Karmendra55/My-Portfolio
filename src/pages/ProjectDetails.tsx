import { useParams, Link } from "react-router-dom"
import { projectDetails } from "../data/projectDetails"
import { ArrowLeft } from "lucide-react"
import { FaGithub } from "react-icons/fa"

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
      <div className="max-w-6xl mx-auto px-6 py-24">
        <Link
            to="/"
            className="
                inline-flex
                items-center
                gap-2
                text-zinc-400
                hover:text-white
                transition
                mb-12
            "
            >
            <ArrowLeft size={18} />
            Back to Portfolio
            </Link>
        </div>
        {/* HERO */}

        <section className="max-w-6xl mx-auto px-6 py-16">

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

            <p className="text-cyan-400 mb-4">
            Case Study
            </p>

            <h1
            className="
                text-5xl
                md:text-6xl
                font-bold
                mb-6
            "
            >
            {project.title}
            </h1>

            <p
            className="
                text-zinc-400
                text-xl
                max-w-4xl
            "
            >
            {project.subtitle}
            </p>

        </section>

        {/* METRICS */}

        <section className="max-w-6xl mx-auto px-6">

            <div className="grid md:grid-cols-4 gap-6">

            {project.metrics.map((metric) => (
                <div
                key={metric.label}
                className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-6
                "
                >
                <p className="text-zinc-500 text-sm">
                    {metric.label}
                </p>

                <h3 className="text-3xl font-bold mt-2">
                    {metric.value}
                </h3>
                </div>
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
                <div
                    key={step}
                    className="
                    px-5
                    py-3
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    "
                >
                    {step}
                </div>
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
                <div
                    key={challenge.title}
                    className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-6
                    "
                >
                    <h3 className="font-semibold mb-4">
                    {challenge.title}
                    </h3>

                    <p className="text-zinc-400">
                    {challenge.description}
                    </p>
                </div>
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
                <div
                    key={result}
                    className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    p-5
                    "
                >
                    {result}
                </div>
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
            className="
                inline-flex
                items-center
                gap-3
                px-6
                py-4
                rounded-xl
                border
                border-white/10
                bg-white/5
                hover:bg-white/10
                transition
            "
            >
            <FaGithub size={20} />
            View Repository
            </a>

        </section>

        </main>
    )
}
export default ProjectDetails