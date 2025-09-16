import * as React from "react";
import { Button, Paper, TextField } from "../..";
import { Link, useLocation, useNavigate } from "react-router";
import {
  requiredValidator,
  validateEmailField,
  validatePasswordField,
} from "../../utils/validators";
import { PaperGroupProps } from "../Paper/PaperGroup";

interface Props extends Omit<PaperGroupProps, "onSubmit"> {
  onSubmit({
    code,
    email,
    password,
    setSubmitError,
  }: {
    code: string;
    email: string;
    password: string;
    setSubmitError: (r: React.ReactNode) => void;
  }): Promise<void>;
}

export default function ResetPasswordPage({ onSubmit, ...rest }: Props) {
  const navigate = useNavigate();
  const [codeError, setCodeError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<React.ReactNode>();
  const location = useLocation();

  const defaultEmailAddress = new URLSearchParams(location.search).get("email");
  const hasDefaultEmailAddress = Boolean(defaultEmailAddress);

  return (
    <Paper.Group {...rest}>
      <Paper>
        <h2>Reset password</h2>
        <p>
          Check your email for your verification code (it may be in your junk
          folder). If you don&apos;t have an account you will need to{" "}
          <Link to="/sign-up">sign up</Link>.
        </p>
        <form
          noValidate
          onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setSubmitError(undefined);
            const code = (e.target as HTMLFormElement).code.value;
            const email = (e.target as HTMLFormElement).email.value;
            const password = (e.target as HTMLFormElement).password.value;
            const codeErrorMessage = requiredValidator(code);
            const emailErrorMessage = validateEmailField(email);
            const passwordErrorMessage = validatePasswordField(password);
            if (codeErrorMessage || emailErrorMessage || passwordErrorMessage) {
              setCodeError(codeErrorMessage || "");
              setEmailError(emailErrorMessage || "");
              setPasswordError(passwordErrorMessage || "");
              return;
            }
            if (codeError) setCodeError("");
            if (emailError) setEmailError("");
            if (passwordError) setPasswordError("");
            setIsSubmitting(true);
            try {
              await onSubmit({ code, email, password, setSubmitError });
              const searchParams = new URLSearchParams();
              searchParams.set("password-reset", "true");
              searchParams.set("email", email);
              navigate(`/sign-in?${searchParams}`);
            } finally {
              setIsSubmitting(false);
            }
          }}
        >
          <TextField
            autoComplete="email"
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus={!hasDefaultEmailAddress}
            defaultValue={defaultEmailAddress || undefined}
            error={emailError}
            label="Email"
            name="email"
            stretch
            supportiveText="Take care to type your address correctly"
            type="email"
          />
          <TextField
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus={hasDefaultEmailAddress}
            error={codeError}
            label="Verification code"
            name="code"
            type="code"
          />
          <TextField
            autoComplete="new-password"
            error={passwordError}
            label="Password"
            name="password"
            stretch
            type="password"
          />
          {submitError && (
            <p className="center">
              <small className="negative">{submitError}</small>
            </p>
          )}
          <Button.Group>
            <Button disabled={isSubmitting}>Reset password</Button>
          </Button.Group>
          <p className="center">
            <small>
              Haven&apos;t received a verification code?{" "}
              <Link to="/forgot-password">Try again</Link>.
            </small>
          </p>
        </form>
      </Paper>
    </Paper.Group>
  );
}
