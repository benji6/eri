import classnames from 'classnames'
import * as React from 'react'
import './style.css'

interface IProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  variant?: 'page'
}

export default function Spinner({ variant, ...rest }: IProps) {
  const className = classnames('e-spinner', {
    'e-spinner--page': variant === 'page',
  })

  return <span {...rest} className={className} />
}
