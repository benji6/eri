import * as React from "react";
import { Menu } from "../../../src";
import { RouteComponentProps } from "@reach/router";

export default function ComponentLinks(
  props: RouteComponentProps & React.HTMLAttributes<HTMLAnchorElement>
) {
  return (
    <Menu.SubList>
      <Menu.Link {...props} to="/components/bar-chart">
        BarChart
      </Menu.Link>
      <Menu.Link {...props} to="/components/button">
        Button
      </Menu.Link>
      <Menu.Link {...props} to="/components/card">
        Card
      </Menu.Link>
      <Menu.Link {...props} to="/components/dialog">
        Dialog
      </Menu.Link>
      <Menu.Link {...props} to="/components/fab">
        Fab
      </Menu.Link>
      <Menu.Link {...props} to="/components/form">
        Form
      </Menu.Link>
      <Menu.Link {...props} to="/components/header">
        Header
      </Menu.Link>
      <Menu.Link {...props} to="/components/icon">
        Icon
      </Menu.Link>
      <Menu.Link {...props} to="/components/line-chart">
        LineChart
      </Menu.Link>
      <Menu.Link {...props} to="/components/link">
        Link
      </Menu.Link>
      <Menu.Link {...props} to="/components/main">
        Main
      </Menu.Link>
      <Menu.Link {...props} to="/components/menu">
        Menu
      </Menu.Link>
      <Menu.Link {...props} to="/components/pagination">
        Pagination
      </Menu.Link>
      <Menu.Link {...props} to="/components/paper">
        Paper
      </Menu.Link>
      <Menu.Link {...props} to="/components/quick-nav">
        QuickNav
      </Menu.Link>
      <Menu.Link {...props} to="/components/share-button">
        ShareButton
      </Menu.Link>
      <Menu.Link {...props} to="/components/spinner">
        Spinner
      </Menu.Link>
    </Menu.SubList>
  );
}
