import * as React from 'react'
import './style.css'

class Main extends React.PureComponent<React.HTMLAttributes<HTMLMainElement>> {
  render() {
    return <main {...this.props} className="e-main" />
  }
}

export default Main
