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
  left: <polyline points="15 18 9 12 15 6" />,
  menu: (
    <>
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </>
  ),
  right: <polyline points="9 18 15 12 9 6" />,
}

interface IProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof iconNameMap
  size?: '2' | '3'
}

export default function Icon({ name, size = '2', ...rest }: IProps) {
  return (
    <svg
      {...rest}
      className={`e-icon e-icon--size-${size}`}
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
