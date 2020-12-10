import * as React from "react";
import { Button, Paper, TextField } from "../..";
import { validatePasswordField } from "../../utils/validators";

interface IProps {
  onSubmit({
    password,
    setSubmitError,
  }: {
    password: string;
    setSubmitError: (r: React.ReactNode) => void;
  }): Promise<void>;
}

export default function ChangePasswordPage({ onSubmit }: IProps) {
  const [passwordError, setPasswordError] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<React.ReactNode>();
  const [successfullyChanged, setSuccessfullyChanged] = React.useState(false);

  return (
    <Paper.Group>
      <Paper>
        <h2>Change password</h2>
        {successfullyChanged ? (
          <>
            <p className="positive">Password successfully changed!</p>
            <p>Use your new password next time you sign in.</p>
          </>
        ) : (
          <form
            noValidate
            onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              const password = (e.target as HTMLFormElement).password.value;
              const passwordErrorMessage = validatePasswordField(password);
              if (passwordErrorMessage)
                return setPasswordError(passwordErrorMessage);
              if (passwordError) setPasswordError("");
              setIsSubmitting(true);
              try {
                await onSubmit({ password, setSubmitError });
              } finally {
                setIsSubmitting(false);
                setSuccessfullyChanged(true);
              }
            }}
          >
            <TextField
              autoComplete="new-password"
              autoFocus
              error={passwordError}
              label="New password"
              name="password"
              type="password"
            />
            {submitError && (
              <p className="center">
                <small className="negative">{submitError}</small>
              </p>
            )}
            <Button.Group>
              <Button disabled={isSubmitting}>Change password</Button>
            </Button.Group>
          </form>
        )}
      </Paper>
    </Paper.Group>
  );
}
