import * as React from "react";
import { Button, Paper, TextField } from "../..";
import { Link, useNavigate } from "@reach/router";
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

export default function ForgotPasswordPage({ onSubmit, ...rest }: Props) {
  const navigate = useNavigate();
  const [emailError, setEmailError] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<React.ReactNode>();

  return (
    <Paper.Group {...rest}>
      <Paper>
        <h2>Forgot password?</h2>
        <p>
          If you already have an account we&apos;ll send you a code for
          resetting your password.
        </p>
        <p>
          If you don&apos;t receive an email check your junk folder and the
          spelling of your address, or try <Link to="/sign-up">signing up</Link>
          .
        </p>
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
              const searchParams = new URLSearchParams();
              searchParams.set("email", email);
              navigate(`/reset-password?${searchParams}`);
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
            <Button disabled={isSubmitting}>Send code</Button>
          </Button.Group>
          <p className="center">
            <small>
              Already have a verification code?{" "}
              <Link to="/reset-password">Reset your password</Link>!
            </small>
          </p>
        </form>
      </Paper>
    </Paper.Group>
  );
}
