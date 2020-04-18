import * as React from "react";
import { ResendVerificationPage } from "../../../src";
import { RouteComponentProps } from "@reach/router";

export default function ResendVerificationPageDocs(_: RouteComponentProps) {
  return (
    <ResendVerificationPage
      onSubmit={async ({ email }) => console.table({ email })}
    />
  );
}
