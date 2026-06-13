import GridBackground from "../components/background/GridBackground"

import Container from "../components/ui/Container"
import ScrollToTop from "../components/ui/ScrollToTop"
import BackButton from "../components/ui/BackButton"
import PageHero from "../components/ui/PageHero"
import GlassCard from "../components/ui/GlassCard"
import StatCard from "../components/ui/StatCard"
import Button from "../components/ui/Button"

import { certificateFiles } from "../data/certificateFiles"
import { certifications } from "../data/certifications"
import { FileText, Star } from "lucide-react"

const groupedCertifications = certifications.reduce(
  (acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = []
    }

    acc[cert.category].push(cert)

    return acc
  },
  {} as Record<string, typeof certifications>
)

const CertificationsPage = () => {
  return (
    <>
      <ScrollToTop />

      <main className="min-h-screen bg-[#050505] text-white">
        <GridBackground />

        <section className="relative pt-40 pb-24">
          <Container>

            <BackButton />

            <PageHero
              title="Certifications"
              description="A collection of certifications spanning Cloud Computing, Machine Learning, Data Engineering, Software Development, Research, Automation, and Emerging Technologies."
              badge="Professional Credentials"
            />

            <div className="grid md:grid-cols-3 gap-6 mt-16">

              <StatCard
                value={certifications.length}
                label="Certifications"
              />

              <StatCard
                value="2021–2025"
                label="Continuous Learning"
              />

              <StatCard
                value="7+"
                label="Technical Domains"
              />

            </div>

            <div className="mt-20 space-y-16">

              {Object.entries(groupedCertifications).map(
                ([category, certs]) => (
                  <div key={category}>

                    <h2 className="text-3xl font-bold mb-8">
                      {category}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">

                      {certs.map((cert) => (
                        <GlassCard
                          key={cert.id}
                          className={`
                            p-6
                            flex flex-col justify-between

                            ${
                              cert.featured
                                ? `
                                  border-cyan-500/30
                                  shadow-[0_0_30px_rgba(6,182,212,0.08)]
                                `
                                : ""
                            }
                          `}
                        >

                          <div>

                            {cert.featured && (
                              <span
                                className="
                                  inline-flex
                                  items-center
                                  gap-2
                                  px-3
                                  py-1
                                  rounded-full
                                  text-xs
                                  bg-cyan-500/10
                                  text-cyan-400
                                  border
                                  border-cyan-500/20
                                  mb-4
                                "
                              >
                                <Star size={12} fill="currentColor" />
                                Featured
                              </span>
                            )}

                            <h3 className="font-semibold text-lg">
                              {cert.title}
                            </h3>

                            <p className="text-zinc-400 mt-2">
                              {cert.issuer}
                            </p>

                            <p className="text-zinc-500 text-sm mt-3">
                              {cert.year}
                            </p>

                          </div>

                          <div className="mt-6">
                            {certificateFiles[cert.id] && (
                              <Button
                                as="a"
                                href={certificateFiles[cert.id]}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="outline"
                              >
                                <FileText size={16} />
                                View Certificate
                              </Button>
                            )}
                          </div>

                        </GlassCard>
                      ))}

                    </div>

                  </div>
                )
              )}

            </div>

          </Container>
        </section>
      </main>
    </>
  )
}

export default CertificationsPage