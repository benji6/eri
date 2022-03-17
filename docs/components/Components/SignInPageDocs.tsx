import * as React from "react";

import { SignInPage } from "../../../src";

export default function SignInPageDocs() {
  return (
    <SignInPage
      onSubmit={async ({ email, password }) =>
        console.table({ email, password })
      }
    />
  );
}
