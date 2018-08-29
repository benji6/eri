import * as React from 'react'
import getStylePropValue from '../../utils/getStylePropValue'
import './style.css'

interface IProps {
  varName:
    | '--e-border-radius'
    | '--e-border-width'
    | '--e-font-size-0'
    | '--e-font-size-1'
    | '--e-font-size-2'
    | '--e-font-size-3'
    | '--e-font-size-4'
    | '--e-space-0'
    | '--e-space-1'
    | '--e-space-2'
    | '--e-space-3'
    | '--e-space-4'
    | '--e-space-5'
}

interface IState {
  value?: number
}

export default class Space extends React.PureComponent<IProps, IState> {
  myRef: React.RefObject<HTMLDivElement> = React.createRef()
  state = { value: undefined }

  componentDidMount() {
    this.setState({
      value: this.myRef.current.clientWidth,
    })
  }

  render() {
    const {
      props: { varName },
      state: { value },
    } = this

    const space = getStylePropValue(varName)

    return (
      <>
        <div
          className="d-space__visual"
          ref={this.myRef}
          style={{ width: space }}
        />
        <pre>
          <code>
            {value !== undefined ? `${varName}: ${value}px` : varName}
          </code>
        </pre>
      </>
    )
  }
}
