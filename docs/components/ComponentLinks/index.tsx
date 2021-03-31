import * as React from "react";
import { Nav } from "../../../src";
import { RouteComponentProps } from "@reach/router";

export default function ComponentLinks(
  props: RouteComponentProps & React.HTMLAttributes<HTMLAnchorElement>
) {
  return (
    <Nav.SubList>
      <Nav.Link {...props} to="/components/button">
        Button
      </Nav.Link>
      <Nav.Link {...props} to="/components/card">
        Card
      </Nav.Link>
      <Nav.Link {...props} to="/components/bar-chart">
        Chart.BarChart
      </Nav.Link>
      <Nav.Link {...props} to="/components/line-chart">
        Chart.LineChart
      </Nav.Link>
      <Nav.Link {...props} to="/components/combo-box">
        ComboBox
      </Nav.Link>
      <Nav.Link {...props} to="/components/currency-field">
        CurrencyField
      </Nav.Link>
      <Nav.Link {...props} to="/components/date-field">
        DateField
      </Nav.Link>
      <Nav.Link {...props} to="/components/dialog">
        Dialog
      </Nav.Link>
      <Nav.Link {...props} to="/components/fab">
        Fab
      </Nav.Link>
      <Nav.Link {...props} to="/components/form">
        Form
      </Nav.Link>
      <Nav.Link {...props} to="/components/header">
        Header
      </Nav.Link>
      <Nav.Link {...props} to="/components/icon">
        Icon
      </Nav.Link>
      <Nav.Link {...props} to="/components/image-upload">
        ImageUpload
      </Nav.Link>
      <Nav.Link {...props} to="/components/link">
        Link
      </Nav.Link>
      <Nav.Link {...props} to="/components/main">
        Main
      </Nav.Link>
      <Nav.Link {...props} to="/components/nav">
        Nav
      </Nav.Link>
      <Nav.Link {...props} to="/components/pagination">
        Pagination
      </Nav.Link>
      <Nav.Link {...props} to="/components/paper">
        Paper
      </Nav.Link>
      <Nav.Link {...props} to="/components/quick-nav">
        QuickNav
      </Nav.Link>
      <Nav.Link {...props} to="/components/radio-button">
        RadioButton
      </Nav.Link>
      <Nav.Link {...props} to="/components/select">
        Select
      </Nav.Link>
      <Nav.Link {...props} to="/components/share-button">
        ShareButton
      </Nav.Link>
      <Nav.Link {...props} to="/components/spinner">
        Spinner
      </Nav.Link>
      <Nav.Link {...props} to="/components/text-area">
        TextArea
      </Nav.Link>
      <Nav.Link {...props} to="/components/text-field">
        TextField
      </Nav.Link>
      <Nav.Link {...props} to="/components/toggle">
        Toggle
      </Nav.Link>
      <Nav.Link {...props} to="/components/word-cloud">
        WordCloud
      </Nav.Link>
    </Nav.SubList>
  );
}
