import * as React from 'react'
import './style.css'

const iconNameMap = {
  check: <polyline points="20 6 9 17 4 12" />,
  cross: (
    <>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </>
  ),
  down: <polyline points="6 9 12 15 18 9" />,
}

interface IProps extends React.SVGProps<SVGSVGElement> {
  name: 'check' | 'cross' | 'down'
}

export default class Icon extends React.PureComponent<IProps> {
  render() {
    const { name, ...rest } = this.props

    return (
      <svg
        {...rest}
        className="e-icon"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {iconNameMap[name]}
      </svg>
    )
  }
}
