import * as React from "react";
import { Button, Paper, TextField } from "../..";
import { Link, useLocation } from "@reach/router";
import {
  validateEmailField,
  validatePasswordField,
} from "../../utils/validators";

interface IFormElement extends HTMLFormElement {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

interface IProps {
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

export default function SignInPage({ onSubmit }: IProps) {
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<React.ReactNode>();
  const location = useLocation();

  const defaultEmailAddress = new URLSearchParams(location.search).get("email");
  const hasDefaultEmailAddress = Boolean(defaultEmailAddress);
  const passwordWasReset = new URLSearchParams(location.search).has(
    "password-reset"
  );

  return (
    <Paper.Group>
      <Paper>
        <h2>Sign in</h2>
        {passwordWasReset && (
          <p>
            <small className="positive">
              Password successfully reset, sign in with your new password!
            </small>
          </p>
        )}
        <form
          noValidate
          onSubmit={async (e) => {
            e.preventDefault();
            const email = (e.target as IFormElement).email.value;
            const password = (e.target as IFormElement).password.value;
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
            autoFocus={!hasDefaultEmailAddress}
            defaultValue={defaultEmailAddress || undefined}
            error={emailError}
            label="Email"
            name="email"
            type="email"
          />
          <TextField
            autoComplete="current-password"
            autoFocus={hasDefaultEmailAddress}
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
            <Button disabled={isSubmitting}>Sign in</Button>
          </Button.Group>
          <p className="center">
            <small>
              Don&apos;t have an account? <Link to="/sign-up">Sign up</Link>!
            </small>
            <br />
            <small>
              <Link to="/forgot-password">Forgotten your password</Link>?
            </small>
          </p>
        </form>
      </Paper>
    </Paper.Group>
  );
}
