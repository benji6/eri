import * as React from "react";
import { ForgotPasswordPage } from "../../../src";
import { RouteComponentProps } from "@reach/router";

export default function ForgotPasswordPageDocs(_: RouteComponentProps) {
  return (
    <ForgotPasswordPage
      onSubmit={async ({ email }) => console.table({ email })}
    />
  );
}
