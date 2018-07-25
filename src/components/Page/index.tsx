import * as React from 'react'
import './style.css'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

class Page extends React.PureComponent<IProps> {
  render() {
    return <div {...this.props} className="e-page" />
  }
}

export default Page
