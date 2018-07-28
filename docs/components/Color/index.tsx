import * as React from 'react'
import getStylePropValue from '../../utils/getStylePropValue'
import './style.css'

interface IProps {
  varName:
    | '--e-color-accent'
    | '--e-color-accent-more'
    | '--e-color-accent-less'
    | '--e-color-balance'
    | '--e-color-balance-more'
    | '--e-color-balance-less'
    | '--e-color-figure'
    | '--e-color-ground'
    | '--e-color-negative'
}

class Color extends React.Component<IProps> {
  render() {
    const { varName } = this.props
    const color = getStylePropValue(varName)

    return (
      <div className="d-color">
        <div className="d-color__visual" style={{ background: color }} />
        <pre>
          <code>
            {varName}: {color};
          </code>
        </pre>
      </div>
    )
  }
}

export default Color
