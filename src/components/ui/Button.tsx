import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react"

type BaseProps = {
  children: ReactNode
  variant?: "primary" | "outline"
  className?: string
}

type ButtonProps =
  | (BaseProps &
      ButtonHTMLAttributes<HTMLButtonElement> & {
        as?: "button"
      })
  | (BaseProps &
      AnchorHTMLAttributes<HTMLAnchorElement> & {
        as: "a"
      })

const Button = ({
  children,
  variant = "primary",
  className = "",
  as = "button",
  ...props
}: ButtonProps) => {
  const baseStyles = `
    inline-flex
    items-center
    justify-center
    gap-2

    px-7
    py-4

    rounded-full
    font-medium

    cursor-pointer

    transition-all
    duration-300

    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-white/20

    active:scale-[0.98]

    disabled:cursor-not-allowed
    disabled:pointer-events-none
    disabled:opacity-50
  `

  const variants = {
    primary: `
      bg-white
      text-black

      hover:scale-105
    `,

    outline: `
      border
      border-white/20

      bg-transparent
      text-white

      hover:bg-white/10
    `,
  }

  const classes = `
    ${baseStyles}
    ${variants[variant]}
    ${className}
  `

  if (as === "a") {
    return (
      <a
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        className={classes}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      className={classes}
    >
      {children}
    </button>
  )
}

export default Button

