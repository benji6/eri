import * as React from 'react'
import './style.css'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  sentiment?: 'negative'
  variant?: 'primary' | 'secondary'
}

export default function Button({
  sentiment,
  variant = 'primary',
  type = 'submit', // Formik gets grumpy if you don't specify this
  ...rest
}: IProps) {
  const className = `e-button e-button--${variant}${
    sentiment === 'negative' ? ' e-button--negative' : ''
  }`

  return <button {...rest} className={className} e-util="ripple" type={type} />
}
