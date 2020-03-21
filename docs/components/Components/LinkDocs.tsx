import * as React from 'react'
import { Paper, PaperGroup } from '../../../src'
import { RouteComponentProps } from '@reach/router'

export default function LinkDocs(_: RouteComponentProps) {
  return (
    <PaperGroup>
      <Paper>
        <h2>Link</h2>
        <p>Links take you places.</p>
        <a href="/#">Click me!</a>
      </Paper>
    </PaperGroup>
  )
}
