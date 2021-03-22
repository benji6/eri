import * as React from "react";
import { Paper } from "../../../src";
import { RouteComponentProps } from "@reach/router";

export default function CssUtilities(_: RouteComponentProps) {
  return (
    <Paper.Group>
      <Paper>
        <h3>CSS utilities</h3>
        <p className="center">
          You can center any element by setting the <code>class</code> to
          &quot;center&quot;.
        </p>
        <p className="negative">
          You can give any element a negative sentiment by setting the{" "}
          <code>class</code> to &quot;negative&quot;.
        </p>
        <p className="positive">
          You can give any element a positive sentiment by setting the{" "}
          <code>class</code> to &quot;positive&quot;.
        </p>
        <p className="pre-line">
          {`You can set white-space to pre-line...

...by setting the class to "pre-line".`}
        </p>
        <p className="nowrap">
          You can set <code>whitespace</code> to <code>nowrap</code> on any
          element by setting the <code>class</code> to &quot;nowrap&quot;.
        </p>
        <p className="ml-0">
          You can give things a tiny left margin by setting the{" "}
          <code>class</code> to &quot;ml-0&quot;
        </p>
        <p className="mr-0">
          You can give things a tiny right margin by setting the{" "}
          <code>class</code> to &quot;mr-0&quot;
        </p>
      </Paper>
    </Paper.Group>
  );
}
