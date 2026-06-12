const techStack = [
  "Python",
  "AWS",
  "GCP",
  "Machine Learning",
  "React",
  "Flask",
  "SQL",
  "TensorFlow",
]

const TechPills = () => {
  return (
    <div className="flex flex-wrap gap-3 mt-12">
      {techStack.map((tech) => (
        <div
          key={tech}
          className="
            px-4 py-2
            rounded-full
            border border-white/10
            bg-white/5
            backdrop-blur-md
            text-sm
            text-zinc-300
            hover:border-white/20
            hover:bg-white/10
            transition-all
          "
        >
          {tech}
        </div>
      ))}
    </div>
  )
}

export default TechPills