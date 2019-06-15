import { RouteComponentProps } from '@reach/router'
import * as React from 'react'

export default function LinkDocs(_: RouteComponentProps) {
  return (
    <div e-util="slide-in">
      <h3>Link</h3>
      <p>Links take you places.</p>
      <a href="#">Click me!</a>
    </div>
  )
}
