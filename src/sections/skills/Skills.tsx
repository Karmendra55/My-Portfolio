import {
  Brain,
  Cloud,
  Code2,
  Database,
  LayoutDashboard,
  Wrench,
} from "lucide-react"

import Container from "../../components/ui/Container"
import Reveal from "../../components/ui/Reveal"
import SectionTitle from "../../components/ui/SectionHeader"
import SkillCard from "../../components/ui/SkillCard"
import StatCard from "../../components/ui/StatCard"

const skillCategories = [
  {
    title: "Programming",
    icon: <Code2 size={28} />,
    skills: [
      "Python",
      "C++",
      "JavaScript",
      "TypeScript",
      "PHP",
      "SQL",
      "HTML",
      "CSS",
    ],
  },

  {
    title: "Machine Learning & AI",
    icon: <Brain size={28} />,
    skills: [
      "Scikit-Learn",
      "TensorFlow",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Jupyter",
      "Streamlit",
    ],
  },

  {
    title: "Cloud Computing",
    icon: <Cloud size={28} />,
    skills: [
      "AWS",
      "GCP",
      "EC2",
      "S3",
      "SageMaker",
      "BigQuery",
      "Vertex AI",
      "Linux",
    ],
  },

  {
    title: "Backend Engineering",
    icon: <Database size={28} />,
    skills: [
      "Flask",
      "REST APIs",
      "MySQL",
      "Firebase",
      "XAMPP",
      "ETL",
    ],
  },

  {
    title: "Frontend Development",
    icon: <LayoutDashboard size={28} />,
    skills: [
      "React",
      "Tailwind CSS",
      "Tkinter",
      "Responsive Design",
      "UI Systems",
    ],
  },

  {
    title: "Developer Tools",
    icon: <Wrench size={28} />,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "UiPath",
      "Canva",
      "DaVinci Resolve",
    ],
  },
]

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-32"
    >
      <Container>

        <Reveal>
          <SectionTitle
            title="Skills & Expertise"
            subtitle="Technical Foundation"
          />
        </Reveal>

        <Reveal>
          <p
            className="
              text-zinc-400
              text-lg
              leading-relaxed
              max-w-3xl
              mt-8
              mb-12
            "
          >
            A multidisciplinary technical stack developed through
            software engineering, machine learning projects,
            cloud certifications, research publications,
            and hands-on internship experience.
          </p>
        </Reveal>

        {/* Summary Stats */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mb-16">

          <Reveal>
            <StatCard
              value="10+"
              label="Years Since First Coding Experience"
            />
          </Reveal>

          <Reveal>
            <StatCard
              value="25+"
              label="Technologies & Tools Used"
            />
          </Reveal>

          <Reveal>
            <StatCard
              value="AWS + GCP"
              label="Cloud Platforms"
            />
          </Reveal>

          <Reveal>
            <StatCard
              value="ML + Data"
              label="Primary Specialization"
            />
          </Reveal>

        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
          {skillCategories.map((category) => (
            <Reveal key={category.title}>
              <SkillCard
                title={category.title}
                icon={category.icon}
                skills={category.skills}
              />
            </Reveal>
          ))}
        </div>

      </Container>
    </section>
  )
}

export default Skills