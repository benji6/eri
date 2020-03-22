import * as React from "react";
import { Redirect, RouteComponentProps } from "@reach/router";

export default function _404(_: RouteComponentProps) {
  return <Redirect to="/" />;
}
