import { ResendVerificationPage } from "../../../src";

export default function ResendVerificationPageDocs() {
  return (
    <ResendVerificationPage
      onSubmit={async ({ email }) => console.table({ email })}
    />
  );
}
