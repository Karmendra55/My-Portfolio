import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

const navItems = [
  "about",
  "skills",
  "projects",
  "experience",
  "research",
  "contact",
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((id) =>
        document.getElementById(id)
      )

      sections.forEach((section) => {
        if (!section) return

        const rect = section.getBoundingClientRect()

        if (rect.top <= 200 && rect.bottom >= 200) {
          setActive(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className="
        fixed top-0 left-0
        w-full
        z-50
        backdrop-blur-xl
        border-b border-white/10
        bg-black/30
      "
    >
      <nav
        className="
          max-w-7xl
          mx-auto
          px-6 md:px-10 lg:px-16
          h-20
          flex
          items-center
          justify-between
        "
      >
        <a
          href="#"
          className="
            text-xl
            font-semibold
            tracking-[0.2em]
          "
        >
          KS
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`
                  relative
                  text-sm
                  capitalize
                  transition-colors
                  ${
                    active === item
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }
                `}
              >
                {item}

                {active === item && (
                  <span
                    className="
                      absolute
                      left-0
                      -bottom-2
                      w-full
                      h-px
                      bg-white
                    "
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </nav>

      {isOpen && (
        <div
          className="
            md:hidden
            border-t border-white/10
            bg-black/90
            backdrop-blur-xl
          "
        >
          <ul className="flex flex-col p-6 gap-6">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setIsOpen(false)}
                  className="
                    capitalize
                    text-zinc-300
                    hover:text-white
                    transition
                  "
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar