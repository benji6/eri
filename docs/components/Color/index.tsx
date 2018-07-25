import * as React from 'react'
import getStylePropValue from '../../utils/getStylePropValue'
import './style.css'

interface IProps {
  varName:
    | '--e-color-accent'
    | '--e-color-accent-dark'
    | '--e-color-accent-light'
    | '--e-color-balance'
    | '--e-color-balance-dark'
    | '--e-color-balance-light'
    | '--e-color-figure'
    | '--e-color-ground'
    | '--e-color-ground-dark'
    | '--e-color-ground-light'
    | '--e-color-negative'
}

class Color extends React.PureComponent<IProps> {
  render() {
    const { varName } = this.props
    const color = getStylePropValue(varName)

    return (
      <div className="d-color">
        <div className="d-color__visual" style={{ backgroundColor: color }} />
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
