import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Paper } from '../../../src'
import ComponentLinks from '../ComponentLinks'

export default function ComponentsHome(_: RouteComponentProps) {
  return (
    <Paper e-util="slide-in">
      <h2>Components</h2>
      <ComponentLinks />
    </Paper>
  )
}
