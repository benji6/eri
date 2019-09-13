import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Paper, PaperGroup } from '../../../src'
import PageLinks from '../PageLinks'

export default function PagesHome(_: RouteComponentProps) {
  return (
    <PaperGroup>
      <Paper>
        <h2>Pages</h2>
        <PageLinks />
      </Paper>
    </PaperGroup>
  )
}
