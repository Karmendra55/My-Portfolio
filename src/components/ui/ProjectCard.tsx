import { BookType } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"

interface ProjectCardProps {
  slug?: string
  title: string
  description: string
  tech: string[]
  github: string
  image?: string
  featured?: boolean
}

const ProjectCard = ({
  slug,
  title,
  description,
  tech,
  github,
  image,
  featured = false,
}: ProjectCardProps) => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        backdrop-blur-md
        transition-all
        duration-500
        hover:border-white/20
        hover:bg-white/10
      "
    >
      {image && (
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="
              w-full
              h-64
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />
        </div>
      )}

      <div className="p-8 lg:p-10">
        <div className="flex items-start justify-between gap-6">
          <div>
            {featured && (
              <p className="mb-6 text-xl text-zinc-500">
                Featured Project
              </p>
            )}

            <h3
              className="
                mb-5
                text-2xl
                font-bold
                md:text-3xl
              "
            >
              {title}
            </h3>
          </div>

          <div className="flex gap-3">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} GitHub repository`}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border border-white/10
                transition
                hover:bg-white/10
              "
            >
              <FaGithub size={18} />
            </a>

            {slug && (
              <Link
                to={`/projects/${slug}`}
                aria-label={`${title} case study`}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border border-white/10
                  transition
                  hover:bg-white/10
                "
              >
                <BookType size={18} />
              </Link>
            )}
          </div>
        </div>

        <p
          className="
            mb-8
            max-w-2xl
            text-lg
            leading-relaxed
            text-zinc-400
          "
        >
          {description}
        </p>

        <div className="flex flex-wrap gap-3">
          {tech.map((item) => (
            <span
              key={item}
              className="
                rounded-full
                border border-white/10
                bg-white/5
                px-4
                py-2
                text-sm
                text-zinc-300
              "
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard