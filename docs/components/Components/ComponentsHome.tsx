import * as React from 'react'
import { Paper, PaperGroup } from '../../../src'
import ComponentLinks from '../ComponentLinks'
import { RouteComponentProps } from '@reach/router'

export default function ComponentsHome(_: RouteComponentProps) {
  return (
    <PaperGroup>
      <Paper>
        <h2>Components</h2>
        <ComponentLinks />
      </Paper>
    </PaperGroup>
  )
}
