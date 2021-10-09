import * as React from "react";
import { Link, RouteComponentProps } from "@reach/router";
import { Nav, Paper } from "../../../src";
import ReactCodeSnippet from "./_ReactCodeSnippet";

export default function NavDocs(_: RouteComponentProps) {
  return (
    <Paper.Group>
      <Paper>
        <h2>Nav</h2>
        <p>
          The main navigation component. The below example should give an idea
          of how this works.
        </p>
        <h3>See also</h3>
        <ul>
          <li>
            <Link to="../quick-nav">QuickNav</Link>
          </li>
        </ul>
      </Paper>
      <Paper>
        <ReactCodeSnippet>
          <Nav onClose={() => {}} open={false}>
            <Nav.List>
              <Nav.Link to="/a">Link A</Nav.Link>
              <Nav.Link to="/b">Link B</Nav.Link>
              <Nav.SubList heading="Sub list">
                <Nav.Link to="/x">Sub link X</Nav.Link>
                <Nav.Link to="/y">Sub link Y</Nav.Link>
              </Nav.SubList>
            </Nav.List>
          </Nav>
        </ReactCodeSnippet>
      </Paper>
    </Paper.Group>
  );
}
