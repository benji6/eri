import * as React from "react";
import { RouteComponentProps } from "@reach/router";
import { SignInPage } from "../../../src";

export default function SignInPageDocs(_: RouteComponentProps) {
  return (
    <SignInPage
      onSubmit={async ({ email, password }) =>
        console.table({ email, password })
      }
    />
  );
}
