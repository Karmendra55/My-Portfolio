import { motion } from "framer-motion"
import Container from "../../components/ui/Container"
import RoleSwitcher from "../../components/ui/RoleSwitcher"
import TechPills from "../../components/ui/TechPills"
import resume from "../../assets/Resume_Updated.pdf"
import ProfileImage from "../../components/hero/ProfileImage"

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative pt-24 lg:pt-0">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* TEXT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 max-w-5xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              Karmendra
              <br />
              Bahadur
              <br />
              Srivastava
            </h1>

            <RoleSwitcher />

            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl mt-8">
              Building intelligent systems, machine learning solutions,
              scalable cloud applications, and futuristic digital experiences
              through engineering, research, and creativity.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://github.com/Karmendra55"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform"
              >
                View Projects
              </a>

              <a
                href={resume}
                download
                className="px-7 py-4 border border-white/20 rounded-full text-white hover:bg-white/10 transition"
              >
                Download Resume
              </a>
            </div>

            <TechPills />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="mt-24 flex items-center gap-4 text-zinc-500"
            >
              <div className="h-px w-16 bg-white/20" />
              <p className="text-sm tracking-[0.3em] uppercase">
                Scroll
              </p>
            </motion.div>
          </motion.div>

          {/* IMAGE COLUMN */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end mt-25 lg:mt-0">
            <ProfileImage />
          </div>

        </div>
      </Container>
    </section>
  )
}

export default Hero
