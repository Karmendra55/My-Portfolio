import Container from "../../components/ui/Container"
import Reveal from "../../components/ui/Reveal"
import SectionTitle from "../../components/ui/SectionHeader"
import StatCard from "../../components/ui/StatCard"
import GlassCard from "../../components/ui/GlassCard"

import { research } from "../../data/research"
import { researchCertificateFiles } from "../../data/researchcertificateFile"
import { FileText, Award } from "lucide-react"

const Research = () => {
  return (
    <section
      id="research"
      className="py-32"
    >
      <Container>

        <Reveal>
          <SectionTitle
            title="Research & Publications"
            subtitle="Academic Research, Innovation & Technical Contributions"
          />
        </Reveal>

        {/* Stats */}
        <StatCard
          value="4"
          label="Publications"
        />

        <StatCard
          value="IEEE"
          label="Conference Publication"
        />

        <StatCard
          value="ML + Space"
          label="Primary Research Domains"
        />

        {/* Research Cards */}
        <br></br>
        <div className="grid lg:grid-cols-2 gap-8">

          {research.map((item) => (
            <Reveal key={item.id}>

              <GlassCard className="h-full p-8">

                <div className="flex flex-wrap gap-3 mb-5">

                  <span
                    className="
                      px-3 py-1
                      rounded-full
                      border border-white/10
                      text-xs
                      text-cyan-400
                    "
                  >
                    {item.category}
                  </span>

                  <span
                    className="
                      px-3 py-1
                      rounded-full
                      border border-white/10
                      text-xs
                      text-zinc-400
                    "
                  >
                    {item.year}
                  </span>

                </div>

                <div className="flex items-start justify-between gap-6">

                <div>
                  <h3
                    className="
                      text-2xl
                      font-bold
                      leading-snug
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="text-zinc-500 mt-3 text-sm">
                    {item.venue}
                  </p>
                </div>

                <div className="flex gap-3">

                  {item.url !== "#" && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.title} publication`}
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
                      <FileText size={18} />
                    </a>
                  )}

                  {researchCertificateFiles[item.id] && (
                    <a
                      href={researchCertificateFiles[item.id]}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.title} certificate`}
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
                      <Award size={18} />
                    </a>
                  )}

                </div>

              </div>

              </GlassCard>

            </Reveal>
          ))}

        </div>

      </Container>
    </section>
  )
}

export default Research