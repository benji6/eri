import * as React from 'react'
import './style.css'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Fab({
  type = 'submit', // Formik gets grumpy if you don't specify this
  ...rest
}: IProps) {
  return <button {...rest} className="e-fab" type={type} />
}
