type StatCardProps = {
  value: string | number
  label: string
}

const StatCard = ({
  value,
  label,
}: StatCardProps) => {
  return (
    <div
      className="
        p-6
        rounded-2xl
        border border-white/10
        bg-white/5
      "
    >
      <h3 className="text-3xl font-bold">
        {value}
      </h3>

      <p className="text-zinc-400 text-sm mt-2">
        {label}
      </p>
    </div>
  )
}

export default StatCard