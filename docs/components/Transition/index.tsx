import * as React from 'react'
import getStylePropValue from '../../utils/getStylePropValue'
import './style.css'

interface IProps {
  varName: '--e-transition'
}

class Transition extends React.PureComponent<IProps> {
  render() {
    const { varName } = this.props
    const transition = getStylePropValue(varName)

    return (
      <div className="d-transition">
        <div className="d-transition__visual-container">
          <div
            className="d-transition__visual"
            style={{ animationTimingFunction: transition }}
          />
        </div>
        <pre>
          <code>
            {varName}: {transition};
          </code>
        </pre>
        <pre>
          <code>animation-name: e-rotate;</code>
        </pre>
      </div>
    )
  }
}

export default Transition
