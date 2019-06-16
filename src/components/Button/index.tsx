import * as React from 'react'
import './style.css'

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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

  const rippleProp = rest.disabled ? undefined : { 'e-util': 'ripple' }

  return <button {...rest} {...rippleProp} className={className} type={type} />
}
