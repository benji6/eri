import { RouteComponentProps } from '@reach/router'
import * as React from 'react'

interface IProps extends RouteComponentProps {
  children: React.ReactElement[]
}

export default function Components({ children }: IProps) {
  return (
    <>
      <h2 e-util="fade-in">Components</h2>
      {children}
    </>
  )
}
