import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import ConfigurableExample from './_ConfigurableExample'
import { Paper, PaperGroup, Spinner } from '../../../src'

export default function SpinnerDocs(_: RouteComponentProps) {
  return (
    <PaperGroup>
      <Paper>
        <h2>Spinner</h2>
      </Paper>
      <ConfigurableExample example={<Spinner />} />
    </PaperGroup>
  )
}
