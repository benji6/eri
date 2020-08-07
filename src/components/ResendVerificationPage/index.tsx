import * as React from "react";
import { Button, Paper, TextField } from "../..";
import {
  composeValidators,
  emailValidator,
  requiredValidator,
} from "../../utils/validators";
import { Link } from "@reach/router";

const validateEmail = composeValidators(requiredValidator, emailValidator);

interface IFormElement extends HTMLFormElement {
  email: HTMLInputElement;
}

interface IProps {
  onSubmit({
    email,
    setSubmitError,
  }: {
    email: string;
    setSubmitError: (r: React.ReactNode) => void;
  }): Promise<void>;
}

export default function ResendVerificationPage({ onSubmit }: IProps) {
  const [emailError, setEmailError] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<React.ReactNode>();

  return (
    <Paper.Group>
      <Paper>
        <h2>Resend verification email</h2>
        <form
          noValidate
          onSubmit={async (e: React.FormEvent<IFormElement>) => {
            e.preventDefault();
            const email = (e.target as IFormElement).email.value;
            const emailErrorMessage = validateEmail(email);
            if (emailErrorMessage) return setEmailError(emailErrorMessage);
            if (emailError) setEmailError("");
            setIsSubmitting(true);
            try {
              await onSubmit({ email, setSubmitError });
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
            supportiveText="Take care to type your address correctly"
            type="email"
          />
          {submitError && (
            <p className="center">
              <small className="negative">{submitError}</small>
            </p>
          )}
          <Button.Group>
            <Button disabled={isSubmitting}>Resend</Button>
          </Button.Group>
          <p className="center">
            <small>
              Looking for the <Link to="/sign-in">sign in</Link> or{" "}
              <Link to="/sign-up">sign up</Link> pages?
            </small>
          </p>
        </form>
      </Paper>
    </Paper.Group>
  );
}
