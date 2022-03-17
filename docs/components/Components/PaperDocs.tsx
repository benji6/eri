import * as React from "react";
import { Paper } from "../../../src";

export default function PaperDocs() {
  return (
    <Paper.Group>
      <Paper>
        <h2>Paper</h2>
        <p>
          Wrap your Papers in a <code>Paper.Group</code>.
        </p>
      </Paper>
      <Paper>
        <h3>Paper one</h3>
      </Paper>
      <Paper>
        <h3>Paper two</h3>
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
    </Paper.Group>
  );
}
