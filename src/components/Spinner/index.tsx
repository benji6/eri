import classnames from 'classnames'
import * as React from 'react'
import './style.css'

interface IProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  variation?: 'ground' | 'page'
}

export default class Spinner extends React.PureComponent<IProps> {
  render() {
    const { variation, ...rest } = this.props

    const className = classnames('e-spinner', {
      'e-spinner--ground': variation === 'ground',
      'e-spinner--page': variation === 'page',
    })

    return <span {...rest} className={className} />
  }
}
