import * as React from "react";
import { ChangePasswordPage } from "../../../src";
import { RouteComponentProps } from "@reach/router";

export default function ChangePasswordPageDocs(_: RouteComponentProps) {
  return (
    <ChangePasswordPage
      onSubmit={async ({ password }) => console.table({ password })}
    />
  );
}
