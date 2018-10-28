import classnames from 'classnames'
import * as React from 'react'
import './style.css'

interface IProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  variation?: 'ground' | 'page'
}

export default function Spinner({ variation, ...rest }: IProps) {
  const className = classnames('e-spinner', {
    'e-spinner--ground': variation === 'ground',
    'e-spinner--page': variation === 'page',
  })

  return <span {...rest} className={className} />
}
