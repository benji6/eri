import * as React from "react";
import PageLinks from "../PageLinks";
import { Paper } from "../../../src";
import { RouteComponentProps } from "@reach/router";

export default function PagesHome(_: RouteComponentProps) {
  return (
    <Paper.Group>
      <Paper>
        <h2>Pages</h2>
        <PageLinks />
      </Paper>
    </Paper.Group>
  );
}
