import * as React from "react";
import { Button, Paper, TextField } from "../..";
import {
  validateEmailField,
  validatePasswordField,
} from "../../utils/validators";
import { Link } from "react-router";
import { PaperGroupProps } from "../Paper/PaperGroup";

interface Props extends Omit<PaperGroupProps, "onSubmit"> {
  onSubmit({
    email,
    password,
    setSubmitError,
  }: {
    email: string;
    password: string;
    setSubmitError: (r: React.ReactNode) => void;
  }): Promise<void>;
}

export default function SignUpPage({ onSubmit, ...rest }: Props) {
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<React.ReactNode>();

  return (
    <Paper.Group {...rest}>
      <Paper>
        <h2>Sign up</h2>
        <form
          noValidate
          onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setSubmitError(undefined);
            const email = (e.target as HTMLFormElement).email.value;
            const password = (e.target as HTMLFormElement).password.value;
            const emailErrorMessage = validateEmailField(email);
            const passwordErrorMessage = validatePasswordField(password);
            if (emailErrorMessage || passwordErrorMessage) {
              setEmailError(emailErrorMessage || "");
              setPasswordError(passwordErrorMessage || "");
              return;
            }
            if (emailError) setEmailError("");
            if (passwordError) setPasswordError("");
            setIsSubmitting(true);
            try {
              await onSubmit({ email, password, setSubmitError });
            } finally {
              setIsSubmitting(false);
            }
          }}
        >
          <TextField
            autoComplete="email"
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            error={emailError}
            label="Email"
            name="email"
            type="email"
          />
          <TextField
            autoComplete="new-password"
            error={passwordError}
            label="Password"
            name="password"
            type="password"
          />
          {submitError && (
            <p className="center">
              <small className="negative">{submitError}</small>
            </p>
          )}
          <Button.Group>
            <Button disabled={isSubmitting}>Sign up</Button>
          </Button.Group>
          <p className="center">
            <small>
              Already have an account? <Link to="/sign-in">Sign in</Link>!
            </small>
          </p>
        </form>
      </Paper>
    </Paper.Group>
  );
}
