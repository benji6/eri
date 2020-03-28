import * as React from "react";
import { Menu } from "../../../src";
import { RouteComponentProps } from "@reach/router";

export default function ComponentLinks(
  props: RouteComponentProps & React.HTMLAttributes<HTMLAnchorElement>
) {
  return (
    <ul>
      <li>
        <Menu.Link {...props} to="/components/button">
          Button
        </Menu.Link>
      </li>
      <li>
        <Menu.Link {...props} to="/components/card">
          Card
        </Menu.Link>
      </li>
      <li>
        <Menu.Link {...props} to="/components/dialog">
          Dialog
        </Menu.Link>
      </li>
      <li>
        <Menu.Link {...props} to="/components/fab">
          Fab
        </Menu.Link>
      </li>
      <li>
        <Menu.Link {...props} to="/components/form">
          Form
        </Menu.Link>
      </li>
      <li>
        <Menu.Link {...props} to="/components/header">
          Header
        </Menu.Link>
      </li>
      <li>
        <Menu.Link {...props} to="/components/icon">
          Icon
        </Menu.Link>
      </li>
      <li>
        <Menu.Link {...props} to="/components/link">
          Link
        </Menu.Link>
      </li>
      <li>
        <Menu.Link {...props} to="/components/main">
          Main
        </Menu.Link>
      </li>
      <li>
        <Menu.Link {...props} to="/components/pagination">
          Pagination
        </Menu.Link>
      </li>
      <li>
        <Menu.Link {...props} to="/components/paper">
          Paper
        </Menu.Link>
      </li>
      <li>
        <Menu.Link {...props} to="/components/share-button">
          ShareButton
        </Menu.Link>
      </li>
      <li>
        <Menu.Link {...props} to="/components/spinner">
          Spinner
        </Menu.Link>
      </li>
    </ul>
  );
}
