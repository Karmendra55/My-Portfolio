const ThoughtBubble = () => {
  return (
    <div
      className="
        absolute
        left-1/2
        -translate-x-1/2
        -bottom-14
        w-105
        max-w-[90vw]

        rounded-3xl
        border border-white/10
        bg-black/80
        backdrop-blur-xl

        p-6
        shadow-2xl

        opacity-0
        pointer-events-none

        group-hover:opacity-100
        group-hover:-translate-y-2

        transition-all
        duration-300
        ease-out
      "
    >
      <p className="text-zinc-100 text-2xl font-medium">
        My mind is complex.
      </p>

      <p className="mt-3 text-zinc-300 text-lg">
        But great products shouldn't be.
      </p>

      <p className="mt-4 text-zinc-500 text-base leading-relaxed">
        Scroll through my work and you'll find
        ideas, systems, research, and engineering
        challenges distilled into experiences that
        feel simple, intuitive, and useful.
      </p>

      <div
        className="
          absolute
          left-1/2
          -translate-x-1/2
          -bottom-2

          h-4
          w-4

          rotate-45
          bg-black/80

          border-r
          border-b
          border-white/10
        "
      />
    </div>
  )
}

export default ThoughtBubble