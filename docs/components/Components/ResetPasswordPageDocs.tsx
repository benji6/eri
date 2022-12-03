import { ResetPasswordPage } from "../../../src";

export default function ResetPasswordPageDocs() {
  return (
    <ResetPasswordPage
      onSubmit={async ({ code, email, password }) =>
        console.table({ code, email, password })
      }
    />
  );
}
