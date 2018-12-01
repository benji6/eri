import * as React from 'react'
import getStylePropValue from '../../utils/getStylePropValue'
import './style.css'

interface IProps {
  varName:
    | '--e-border-radius-0'
    | '--e-border-radius-1'
    | '--e-border-width-0'
    | '--e-border-width-1'
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
  public myRef: React.RefObject<HTMLDivElement> = React.createRef()
  public state = { value: undefined }

  public componentDidMount() {
    this.setState({
      value: this.myRef.current.clientWidth,
    })
  }

  public render() {
    const { varName } = this.props
    const { value } = this.state

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
