import classnames from 'classnames'
import * as React from 'react'
import './style.css'

interface IProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  variation?: 'ground' | 'page'
}

class Spinner extends React.PureComponent<IProps> {
  render() {
    const { variation, ...rest } = this.props

    const className = classnames('spinner', {
      'spinner--ground': variation === 'ground',
      'spinner--page': variation === 'page',
    })

    return <span {...rest} className={className} />
  }
}

export default Spinner
