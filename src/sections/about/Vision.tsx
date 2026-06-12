import Container from "../../components/ui/Container"
import Reveal from "../../components/ui/Reveal"

const Vision = () => {
  return (
    <section className="py-32">
      <Container>
        <Reveal>
          <div
            className="
              rounded-[3rem]
              border border-white/10
              bg-white/3
              p-10 md:p-16
              overflow-hidden
              relative
            "
          >
            <div
              className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_40%)]
              "
            />

            <div className="relative z-10 max-w-4xl">
              <p
                className="
                  uppercase
                  tracking-[0.3em]
                  text-zinc-500
                  text-sm
                  mb-6
                "
              >
                Beyond Engineering
              </p>

              <h2
                className="
                  text-4xl
                  md:text-6xl
                  font-bold
                  leading-tight
                  tracking-tight
                  mb-8
                "
              >
                Building systems,
                stories, and ideas
                for the future.
              </h2>

              <p
                className="
                  text-zinc-400
                  text-lg
                  leading-relaxed
                  max-w-3xl
                "
              >
                Fascinated by space technology, intelligent systems,
                futuristic storytelling, human-machine interaction,
                and speculative concepts around the future of
                civilization, automation, and consciousness.
              </p>

              <p
                className="
                  text-zinc-500
                  leading-relaxed
                  mt-8
                  max-w-3xl
                "
              >
                Exploring ideas through research, software
                engineering, creative experimentation, and
                conceptual projects like Heliox — an original
                sci-fi universe blending philosophy, cosmic
                storytelling, and technology.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default Vision