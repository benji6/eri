import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Paper, PaperGroup, Spinner } from '../../../src'

export default function SpinnerDocs(_: RouteComponentProps) {
  return (
    <PaperGroup>
      <Paper>
        <h2>Spinner</h2>
        <Spinner />
      </Paper>
    </PaperGroup>
  )
}
