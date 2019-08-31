import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Paper, PaperGroup } from '../../../src'

export default function PaperDocs(_: RouteComponentProps) {
  return (
    <PaperGroup>
      <Paper>
        <h2>Paper</h2>
        <p>
          Wrap your Papers in a <code>PaperGroup</code>.
        </p>
      </Paper>
      <Paper>
        <h3>Paper one</h3>
      </Paper>
      <Paper side>
        <h3>Paper two</h3>
        <p>
          Give Paper a <code>side</code> prop to move it to the side on wider
          screens.
        </p>
      </Paper>
      <Paper>
        <h3>Paper three</h3>
      </Paper>
      <Paper onClick={() => {}}>
        <h3>Paper four</h3>
        <p>
          Add an <code>onClick</code> property to make the paper clickable.
        </p>
      </Paper>
      <Paper onClick={() => {}}>
        <h3>Paper five</h3>
        <p>
          Add an <code>onClick</code> property to make the paper clickable.
        </p>
      </Paper>
      <Paper onClick={() => {}}>
        <h3>Paper six</h3>
        <p>
          Add an <code>onClick</code> property to make the paper clickable.
        </p>
      </Paper>
    </PaperGroup>
  )
}
