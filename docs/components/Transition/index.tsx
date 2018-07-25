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
      <div>
        <div
          className="d-transition__visual"
          style={{ animationTimingFunction: transition }}
        />
        <pre>
          <code>
            {varName}: {transition};
          </code>
        </pre>
      </div>
    )
  }
}

export default Transition
