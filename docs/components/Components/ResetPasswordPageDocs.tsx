import * as React from "react";
import { ResetPasswordPage } from "../../../src";
import { RouteComponentProps } from "@reach/router";

export default function ResetPasswordPageDocs(_: RouteComponentProps) {
  return (
    <ResetPasswordPage
      onSubmit={async ({ code, email, password }) =>
        console.table({ code, email, password })
      }
    />
  );
}
