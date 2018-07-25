import * as React from 'react'
import getStylePropValue from '../../utils/getStylePropValue'
import './style.css'

interface IProps {
  varName:
    | '--e-space-0'
    | '--e-space-1'
    | '--e-space-2'
    | '--e-space-3'
    | '--e-space-4'
    | '--e-space-5'
    | '--e-space-6'
    | '--e-space-7'
}

class Space extends React.PureComponent<IProps> {
  render() {
    const { varName } = this.props
    const space = getStylePropValue(varName)

    return (
      <div>
        <div className="d-space__visual" style={{ width: space }} />
        <pre>
          <code>
            {varName}: {space};
          </code>
        </pre>
      </div>
    )
  }
}

export default Space
