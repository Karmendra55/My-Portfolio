import { motion } from "framer-motion"
import Container from "../../components/ui/Container"
import RoleSwitcher from "../../components/hero/RoleSwitcher"
import TechPills from "../../components/hero/TechPills"
import resume from "../../assets/Resume_Updated.pdf"
import ProfileImage from "../../components/hero/ProfileImage"
import Button from "../../components/ui/Button"
import GlassCard from "../../components/ui/GlassCard"
import ThoughtBubble from "../../components/hero/ThoughtBubble"
import StatusBadge from "../../components/ui/StatusBadge"

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative pt-24 lg:pt-0">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* TEXT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 max-w-5xl"
          >

            {/* Status Badge */}
            <StatusBadge>
              Open to Full-Time Opportunities
            </StatusBadge>

            {/* Name */}
            <div className="relative inline-block group">
              <motion.div
                whileHover={{
                  scale: 1.02,
                  color: '#ffffff',
                  textShadow: "0 0 20px rgba(255,255,255,0.15), 0 0 40px rgba(255,255,255,0.08",
                }}
                animate={{
                  y: [0, -6, 0],
                  rotate: [0, 0.3, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative select-none"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
                  Karmendra
                  <br />
                  Bahadur
                  <br />
                  Srivastava
                </h1>
              </motion.div>

              {/* Thought Bubble */}
              <ThoughtBubble />
            </div>

            {/* Role Animation */}
            <RoleSwitcher />

            {/* Description */}
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl mt-8">
              Computer Science Engineer focused on Machine Learning,
              Data Engineering, Cloud Computing, and intelligent software
              systems. Building practical solutions through research,
              engineering, and continuous experimentation.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a href="#projects">
                <Button>
                  View Projects
                </Button>
              </a>

              <a
                href={resume}
                download
              >
                <Button variant="outline">
                  Download Resume
                </Button>
              </a>
            </div>

            <TechPills />

            {/* Scroll Indicator */}
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
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end mt-10 lg:mt-0">

            <div className="relative">

              <ProfileImage />

              {/* Floating Status Card */}
              <GlassCard
                className="
                  hidden lg:block
                  absolute
                  -bottom-28
                  w-80
                  p-5
                "
              >
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">
                  Currently Building
                </p>

                <h3 className="font-semibold text-lg">
                  Smart Expense Tracker
                </h3>

                <p className="text-zinc-400 text-sm mt-2">
                  Developing analytics dashboards, budgeting tools,
                  and personal finance insights.
                </p>

                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-zinc-500">
                    Progress
                  </span>

                  <span className="text-cyan-400">
                    In Development
                  </span>
                </div>
              </GlassCard>

            </div>

          </div>

        </div>
      </Container>
    </section>
  )
}

export default Hero