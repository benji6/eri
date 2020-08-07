import * as React from "react";
import { Menu, Paper } from "../../../src";
import ReactCodeSnippet from "./_ReactCodeSnippet";
import { RouteComponentProps } from "@reach/router";

export default function MenuDocs(_: RouteComponentProps) {
  return (
    <Paper.Group>
      <Paper>
        <h2>Menu</h2>
        <p>The below example should give an idea of how this works.</p>
      </Paper>
      <Paper>
        <ReactCodeSnippet>
          <Menu onClose={() => {}} open={false}>
            <Menu.List>
              <Menu.Link to="/a">Link A</Menu.Link>
              <Menu.Link to="/b">Link B</Menu.Link>
              <Menu.SubList>
                <Menu.Link to="/x">Sub link X</Menu.Link>
                <Menu.Link to="/y">Sub link Y</Menu.Link>
              </Menu.SubList>
            </Menu.List>
          </Menu>
        </ReactCodeSnippet>
      </Paper>
    </Paper.Group>
  );
}
