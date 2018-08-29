import * as React from 'react'
import getStylePropValue from '../../utils/getStylePropValue'
import './style.css'

interface IProps {
  varName:
    | '--e-color-accent'
    | '--e-color-accent-less'
    | '--e-color-accent-more'
    | '--e-color-balance'
    | '--e-color-balance-less'
    | '--e-color-balance-more'
    | '--e-color-figure'
    | '--e-color-figure-less'
    | '--e-color-ground'
    | '--e-color-ground-more'
    | '--e-color-negative'
}

export default class Color extends React.Component<IProps> {
  render() {
    const { varName } = this.props
    const color = getStylePropValue(varName)

    return (
      <div className="d-color">
        <div className="d-color__visual" style={{ background: color }} />
        <pre>
          <code>{varName}</code>
        </pre>
        <pre>
          <code>{color}</code>
        </pre>
      </div>
    )
  }
}
