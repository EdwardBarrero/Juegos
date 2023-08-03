import { FC } from "react"

interface ButtonProps {
  type: "button" | "submit" | "reset",
  className?: string,
  text: string,
  onClick?: () => void,
}

export const Button : FC<ButtonProps> = ({ type, className, text, onClick }) => {
  return (
    <button
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}