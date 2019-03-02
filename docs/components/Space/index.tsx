import * as React from 'react'
import { getCssVar } from '../../../src'
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

export default function Space({ varName }: IProps) {
  const [value, setValue] = React.useState<number | undefined>(undefined)
  const divRef = React.useRef(undefined)
  const space = getCssVar(varName)
  React.useEffect(() => setValue(divRef.current.clientWidth), [])

  return (
    <>
      <div className="d-space__visual" ref={divRef} style={{ width: space }} />
      <pre>
        <code>{value !== undefined ? `${varName}: ${value}px` : varName}</code>
      </pre>
    </>
  )
}
