import * as React from 'react'
import { Paper } from '../../../src'
import { RouteComponentProps } from '@reach/router'

export default function LinkDocs(_: RouteComponentProps) {
  return (
    <Paper.Group>
      <Paper>
        <h2>Link</h2>
        <p>Links take you places.</p>
        <a href="/#">Click me!</a>
      </Paper>
    </Paper.Group>
  )
}
