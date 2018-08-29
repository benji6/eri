import * as React from 'react'
import getStylePropValue from '../../utils/getStylePropValue'
import './style.css'

interface IProps {
  varName: '--e-time-0' | '--e-time-1'
}

export default class Time extends React.PureComponent<IProps> {
  render() {
    const { varName } = this.props
    const time = getStylePropValue(varName)

    return (
      <div className="d-time">
        <div className="d-time__visual-container">
          <div className="d-time__visual" style={{ animationDuration: time }} />
        </div>
        <pre>
          <code>animation-name: e-rotate;</code>
        </pre>
        <pre>
          <code>
            {varName}: {time};
          </code>
        </pre>
      </div>
    )
  }
}
