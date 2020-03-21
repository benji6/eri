import * as React from 'react'
import ComponentLinks from '../ComponentLinks'
import { Paper } from '../../../src'
import { RouteComponentProps } from '@reach/router'

export default function ComponentsHome(_: RouteComponentProps) {
  return (
    <Paper.Group>
      <Paper>
        <h2>Components</h2>
        <ComponentLinks />
      </Paper>
    </Paper.Group>
  )
}
