import * as React from "react";
import { ChangePasswordPage } from "../../../src";

export default function ChangePasswordPageDocs() {
  return (
    <ChangePasswordPage
      onSubmit={async ({ currentPassword, newPassword }) =>
        console.table({ currentPassword, newPassword })
      }
    />
  );
}
