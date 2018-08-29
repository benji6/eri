import * as React from 'react'
import './style.css'

export default class ButtonGroup extends React.PureComponent {
  render() {
    return <div {...this.props} className="e-button-group" />
  }
}
