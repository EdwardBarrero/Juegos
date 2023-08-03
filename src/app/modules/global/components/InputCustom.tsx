import { FC } from "react"

interface InputCustomProps {
  type: string,
  className?: string,
  placeholder: string,
  name: string,
  label?: string,
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const InputCustom : FC<InputCustomProps> = ({ type, className, placeholder, name, label, value, onChange }) => {
  return (
    <>
    {label && (
      <label 
        htmlFor={name}
        className="form-label"
      >
        {label}
      </label>
    )}
      <input
        id={name}
        type={type}
        className={`form-control ${className}`}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  )
}