import * as React from "react";

import { SignUpPage } from "../../../src";

export default function SignUpPageDocs() {
  return (
    <SignUpPage
      onSubmit={async ({ email, password }) =>
        console.table({ email, password })
      }
    />
  );
}
