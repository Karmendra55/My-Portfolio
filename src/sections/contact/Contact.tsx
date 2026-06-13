import { Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

import Container from "../../components/ui/Container"
import Reveal from "../../components/ui/Reveal"
import SectionTitle from "../../components/ui/SectionHeader"
import StatusBadge from "../../components/ui/StatusBadge"
import GlassCard from "../../components/ui/GlassCard"
import Button from "../../components/ui/Button"

const opportunities = [
  "Machine Learning Engineer",
  "Data Engineer",
  "Software Developer",
  "Research Collaborations",
]

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32"
    >
      <Container>

        <Reveal>
          <SectionTitle
            title="Let's Connect"
            subtitle="Opportunities & Collaborations"
          />
        </Reveal>

        <Reveal>
          <GlassCard
            className="
              relative
              overflow-hidden
              p-10 md:p-16
            "
          >
            {/* Background Glow */}
            <div
              className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_40%)]
              "
            />

            <div className="relative z-10">

              {/* Availability */}
              <StatusBadge>
                Open to Full-Time Opportunities
              </StatusBadge>

              <h3
                className="
                  text-4xl
                  md:text-6xl
                  font-bold
                  leading-tight
                  max-w-5xl
                "
              >
                Building intelligent systems,
                scalable software, and
                future-focused technology.
              </h3>

              <p
                className="
                  text-zinc-400
                  text-lg
                  leading-relaxed
                  max-w-3xl
                  mt-8
                "
              >
                Interested in Machine Learning, Data Engineering,
                Cloud Computing, Software Development, and Research.
                If you're working on something ambitious,
                I'd love to hear about it.
              </p>

              {/* Opportunity Areas */}
              <div className="grid md:grid-cols-2 gap-4 mt-12 max-w-4xl">
                {opportunities.map((item) => (
                  <GlassCard className="p-5">
                  {item}
                </GlassCard>
                ))}
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-wrap gap-4 mt-12">

                <Button
                  as="a"
                  href="mailto:karmendra5902@gmail.com"
                >
                  <Mail size={18} />
                  Send Email
                </Button>

                <Button
                  as="a"
                  href="https://github.com/Karmendra55"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                >
                  <FaGithub size={18} />
                  GitHub
                </Button>

                <Button
                  as="a"
                  href="https://linkedin.com/in/karmendra-bahadur-s-b71177137"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                >
                  <FaLinkedin size={18} />
                  LinkedIn
                </Button>

              </div>

              {/* Footer Note */}
              <p className="text-zinc-500 text-lg mt-8">
                Typical response time: within a day.
              </p>

            </div>
          </GlassCard>
        </Reveal>

      </Container>
    </section>
  )
}

export default Contact