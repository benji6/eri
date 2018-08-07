import * as React from 'react'
import './style.css'

interface IProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

class Card extends React.PureComponent<IProps> {
  render() {
    return <div {...this.props} className="e-card" />
  }
}

export default Card
