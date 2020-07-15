import * as React from "react";
import { Button, Paper, TextField } from "../..";
import {
  composeValidators,
  emailValidator,
  passwordValidator,
  requiredValidator,
} from "../../utils/validators";
import { Link } from "@reach/router";

const validateEmail = composeValidators(requiredValidator, emailValidator);
const validatePassword = composeValidators(
  requiredValidator,
  passwordValidator
);

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

export default function SignUpPage({ onSubmit }: IProps) {
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<React.ReactNode>();

  return (
    <Paper.Group>
      <Paper>
        <h2>Sign up</h2>
        <form
          noValidate
          onSubmit={async (e) => {
            e.preventDefault();
            const email = (e.target as IFormElement).email.value;
            const password = (e.target as IFormElement).password.value;
            const emailErrorMessage = validateEmail(email);
            const passwordErrorMessage = validatePassword(password);
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
