import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import ComponentLinks from '../ComponentLinks'

export default function ComponentsHome(_: RouteComponentProps) {
  return (
    <div e-util="slide-in">
      <ComponentLinks />
    </div>
  )
}
