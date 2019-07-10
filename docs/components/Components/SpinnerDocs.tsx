import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Paper, Spinner } from '../../../src'

export default function SpinnerDocs(_: RouteComponentProps) {
  return (
    <Paper e-util="slide-in">
      <h2>Spinner</h2>
      <Spinner />
    </Paper>
  )
}
