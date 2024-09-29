import * as React from "react";
import { Button, Paper, TextField } from "../..";
import { Link } from "react-router-dom";
import { PaperGroupProps } from "../Paper/PaperGroup";
import { validateEmailField } from "../../utils/validators";

interface Props extends Omit<PaperGroupProps, "onSubmit"> {
  onSubmit({
    email,
    setSubmitError,
  }: {
    email: string;
    setSubmitError: (r: React.ReactNode) => void;
  }): Promise<void>;
}

export default function ResendVerificationPage({ onSubmit, ...rest }: Props) {
  const [emailError, setEmailError] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<React.ReactNode>();

  return (
    <Paper.Group {...rest}>
      <Paper>
        <h2>Resend verification email</h2>
        <form
          noValidate
          onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setSubmitError(undefined);
            const email = (e.target as HTMLFormElement).email.value;
            const emailErrorMessage = validateEmailField(email);
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
            // eslint-disable-next-line jsx-a11y/no-autofocus
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
