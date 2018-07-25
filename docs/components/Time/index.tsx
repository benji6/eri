import * as React from 'react'
import getStylePropValue from '../../utils/getStylePropValue'
import './style.css'

interface IProps {
  varName: '--e-time-0' | '--e-time-1'
}

class Time extends React.PureComponent<IProps> {
  render() {
    const { varName } = this.props
    const time = getStylePropValue(varName)

    return (
      <div>
        <div className="d-time__visual" style={{ animationDuration: time }} />
        <pre>
          <code>
            {varName}: {time};
          </code>
        </pre>
      </div>
    )
  }
}

export default Time
