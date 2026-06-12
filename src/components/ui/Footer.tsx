const Footer = () => {
  return (
    <footer
      className="
        border-t border-white/10
        py-10
        mt-20
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6 md:px-10 lg:px-16
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-4
        "
      >
        <p className="text-zinc-500 text-sm">
          © 2026 Karmendra Bahadur Srivastava
        </p>

        <p className="text-zinc-600 text-sm">
          Designed & Developed with React + Tailwind
        </p>
      </div>
    </footer>
  )
}

export default Footer