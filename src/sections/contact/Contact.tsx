import { Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

import Container from "../../components/ui/Container"
import Reveal from "../../components/ui/Reveal"
import SectionTitle from "../../components/ui/SectionTitle"

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32"
    >
      <Container>
        <Reveal>
          <SectionTitle
            title="Let’s Connect"
            subtitle="Contact"
          />
        </Reveal>

        <Reveal>
          <div
            className="
              rounded-[3rem]
              border border-white/10
              bg-white/3
              p-10 md:p-16
            "
          >
            <div className="max-w-3xl">
              <h3
                className="
                  text-3xl
                  md:text-5xl
                  font-bold
                  leading-tight
                  mb-8
                "
              >
                Interested in building
                intelligent systems,
                cloud applications,
                or futuristic digital experiences?
              </h3>

              <p
                className="
                  text-zinc-400
                  text-lg
                  leading-relaxed
                  mb-10
                "
              >
                Open to full-time opportunities, collaborations,
                research discussions, and innovative projects
                involving machine learning, software engineering,
                cloud systems, and future-focused technologies.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:karmendra5902@gmail.com"
                  className="
                    flex items-center gap-3
                    px-6 py-4
                    rounded-full
                    border border-white/10
                    hover:bg-white/10
                    transition
                  "
                >
                  <Mail size={18} />
                  Email
                </a>

                <a
                  href="https://github.com/Karmendra55"
                  target="_blank"
                  className="
                    flex items-center gap-3
                    px-6 py-4
                    rounded-full
                    border border-white/10
                    hover:bg-white/10
                    transition
                  "
                >
                  <FaGithub size={18} />
                  GitHub
                </a>

                <a
                  href="https://linkedin.com/in/karmendra-bahadur-s-b71177137"
                  target="_blank"
                  className="
                    flex items-center gap-3
                    px-6 py-4
                    rounded-full
                    border border-white/10
                    hover:bg-white/10
                    transition
                  "
                >
                  <FaLinkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default Contact