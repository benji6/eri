import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Spinner } from '../../../src'

export default function SpinnerDocs(_: RouteComponentProps) {
  return (
    <div e-util="slide-in">
      <h3>Spinner</h3>
      <Spinner />
    </div>
  )
}
