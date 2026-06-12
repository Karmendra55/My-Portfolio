const GridBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
          bg-size-[40px_40px]
        "
      />

      <div
        className="
          absolute top-0 left-1/2
          h-125
          w-125
          -translate-x-1/2
          rounded-full
          bg-white/5
          blur-3xl
        "
      />
    </div>
  )
}

export default GridBackground