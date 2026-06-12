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
import SectionTitle from "../../components/ui/SectionTitle"
import SkillCard from "../../components/ui/SkillCard"

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
    title: "Machine Learning",
    icon: <Brain size={28} />,
    skills: [
      "Scikit-learn",
      "TensorFlow",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Jupyter",
      "Streamlit",
    ],
  },
  {
    title: "Cloud & DevOps",
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
    title: "Backend & Databases",
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
    title: "Frontend & UI",
    icon: <LayoutDashboard size={28} />,
    skills: [
      "React",
      "Tailwind",
      "Tkinter",
      "Responsive Design",
      "UI Systems",
    ],
  },
  {
    title: "Tools & Workflow",
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
            subtitle="Technical Stack"
          />
        </Reveal>

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