import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

const BackButton = () => {
  return (
    <Link
      to="/"
      className="
        inline-flex
        items-center
        gap-2
        text-zinc-400
        hover:text-white
        transition
      "
    >
      <ArrowLeft size={18} />
      Back Home
    </Link>
  )
}

export default BackButton