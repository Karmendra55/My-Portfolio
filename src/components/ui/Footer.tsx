import Container from "./Container"

const Footer = () => {
  return (
    <footer
      className="
        mt-20
        border-t
        border-white/10
        py-10
      "
    >
      <Container>
        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-4
            md:flex-row
          "
        >
          <p className="text-sm text-zinc-500">
            © 2026 Karmendra Bahadur Srivastava
          </p>

          <p className="text-sm text-zinc-600">
            Designed & Developed with React + Tailwind
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer