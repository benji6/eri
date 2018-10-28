import classnames from 'classnames'
import * as React from 'react'
import './style.css'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Field({ className, ...rest }: IProps) {
  return <div {...rest} className={classnames('e-field', className)} />
}
