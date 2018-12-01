import classnames from 'classnames'
import * as React from 'react'
import './style.css'

interface IProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  variation?: 'page'
}

export default function Spinner({ variation, ...rest }: IProps) {
  const className = classnames('e-spinner', {
    'e-spinner--page': variation === 'page',
  })

  return <span {...rest} className={className} />
}
