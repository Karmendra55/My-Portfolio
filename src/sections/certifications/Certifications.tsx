import Container from "../../components/ui/Container"
import GlassCard from "../../components/ui/GlassCard";
import Reveal from "../../components/ui/Reveal"
import SectionTitle from "../../components/ui/SectionHeader"
import StatCard from "../../components/ui/StatCard"
import Button from "../../components/ui/Button"
import { Link } from "react-router-dom"

type Certification = {
  id: string
  title: string
  issuer: string
  category: string
  year: string
}

type CertificationsProps = {
  certifications: Certification[]
}

const Certifications = ({
  certifications,
}: CertificationsProps) => {

  return (
    <section id="certificates" className="py-32">
      <Container>

        {/* Header */}
        <Reveal>
          <SectionTitle
            title="Certifications"
            subtitle="Verified skills and technical credentials"
          />
        </Reveal>

        {/* Stats */}
        <StatCard
          value="20+"
          label="Certifications Completed"
        />

        <StatCard
          value="Cloud + AI"
          label="Core Technical Domains"
        />

        <StatCard
          value="Industry + Academic"
          label="Mixed Credential Sources"
        />

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {certifications.map((cert) => (
            <Reveal key={cert.title}>
              <GlassCard
                className="group p-6
              ">

                <p className="text-xs text-cyan-400 mb-2">
                  {cert.category}
                </p>

                <h3 className="text-lg font-semibold group-hover:text-white transition">
                  {cert.title}
                </h3>

                <p className="text-zinc-400 text-sm mt-2">
                  {cert.issuer}
                </p>

                <div className="mt-4 text-xs text-zinc-500">
                  {cert.year}
                </div>

              </GlassCard>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal>
          <div className="mt-16 flex flex-col items-center text-center">
            <p className="text-zinc-400 mb-4">
              Want to see verification documents and full credential details?
            </p>

            <Link to="/certifications">
              <Button>
                View All Certificates
              </Button>
            </Link>
          </div>

        </Reveal>

      </Container>
    </section>
  )
}

export default Certifications