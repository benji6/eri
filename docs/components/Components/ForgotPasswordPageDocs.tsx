import * as React from "react";
import { ForgotPasswordPage } from "../../../src";

export default function ForgotPasswordPageDocs() {
  return (
    <ForgotPasswordPage
      onSubmit={async ({ email }) => console.table({ email })}
    />
  );
}
