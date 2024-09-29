import * as React from "react";
import { Button, Paper, TextField } from "../..";
import { PaperGroupProps } from "../Paper/PaperGroup";
import { validatePasswordField } from "../../utils/validators";

interface Props extends Omit<PaperGroupProps, "onSubmit"> {
  onSubmit({
    currentPassword,
    newPassword,
    setSubmitError,
  }: {
    currentPassword: string;
    newPassword: string;
    setSubmitError: (r: React.ReactNode) => void;
  }): Promise<void>;
}

export default function ChangePasswordPage({ onSubmit, ...rest }: Props) {
  const [currentPasswordError, setCurrentPasswordError] = React.useState("");
  const [newPasswordError, setNewPasswordError] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<React.ReactNode>();
  const [successfullyChanged, setSuccessfullyChanged] = React.useState(false);

  return (
    <Paper.Group {...rest}>
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
              setSubmitError(undefined);
              const currentPassword = (e.target as HTMLFormElement)
                .currentPassword.value;
              const newPassword = (e.target as HTMLFormElement).newPassword
                .value;
              const currentPasswordErrorMessage =
                validatePasswordField(currentPassword);
              const newPasswordErrorMessage =
                validatePasswordField(newPassword);
              if (currentPasswordErrorMessage || newPasswordErrorMessage) {
                setCurrentPasswordError(currentPasswordErrorMessage || "");
                setNewPasswordError(newPasswordErrorMessage || "");
                return;
              }
              if (currentPasswordError) setCurrentPasswordError("");
              if (newPasswordError) setNewPasswordError("");
              setIsSubmitting(true);
              try {
                await onSubmit({
                  currentPassword,
                  newPassword,
                  setSubmitError,
                });
                setSuccessfullyChanged(true);
              } finally {
                setIsSubmitting(false);
              }
            }}
          >
            <TextField
              autoComplete="current-password"
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
              error={currentPasswordError}
              label="Current password"
              name="currentPassword"
              type="password"
            />
            <TextField
              autoComplete="new-password"
              error={newPasswordError}
              label="New password"
              name="newPassword"
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
