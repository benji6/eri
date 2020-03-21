import * as React from 'react'
import { Paper, Spinner } from '../../../src'
import ConfigurableExample from './_ConfigurableExample'
import { RouteComponentProps } from '@reach/router'

export default function SpinnerDocs(_: RouteComponentProps) {
  return (
    <Paper.Group>
      <Paper>
        <h2>Spinner</h2>
      </Paper>
      <ConfigurableExample example={<Spinner />} />
    </Paper.Group>
  )
}
