import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { navItems } from "../../data/navigation"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      for (const item of navItems) {
        const section = document.getElementById(item.href)

        if (!section) continue

        const rect = section.getBoundingClientRect()

        if (rect.top <= 200 && rect.bottom >= 200) {
          setActive(item.href)
          break
        }
      }
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-xl
        border-b
        border-white/10
        bg-black/30
      "
    >
      <nav
        className="
          max-w-7xl
          mx-auto
          px-6
          md:px-10
          lg:px-16
          h-20
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}
        <a
          href="#"
          className="
            text-xl
            font-semibold
            tracking-[0.2em]
          "
        >
          KBS
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={`#${item.href}`}
                className={`
                  relative
                  text-sm
                  transition-colors
                  ${
                    active === item.href
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }
                `}
              >
                {item.label}

                {active === item.href && (
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

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle Navigation"
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className="
            md:hidden
            border-t
            border-white/10
            bg-black/90
            backdrop-blur-xl
          "
        >
          <ul className="flex flex-col p-6 gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={`#${item.href}`}
                  onClick={() => setIsOpen(false)}
                  className="
                    block
                    text-zinc-300
                    hover:text-white
                    transition
                  "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default NavBar