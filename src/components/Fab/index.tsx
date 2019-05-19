import * as React from 'react'
import './style.css'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  hide?: boolean
}

export default function Fab({
  hide = false,
  type = 'submit', // Formik gets grumpy if you don't specify this
  ...rest
}: IProps) {
  return hide ? null : <button {...rest} className="e-fab" type={type} />
}
