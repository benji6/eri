import { RouteComponentProps } from '@reach/router'
import * as React from 'react'

export default function LinkDocs(_: RouteComponentProps) {
  return (
    <div e-util="slide-in">
      <h2>Link</h2>
      <p>Links take you places.</p>
      <a href="#">Click me!</a>
    </div>
  )
}
