import * as React from "react";
import {
  Button,
  Paper,
  TextField,
  requiredValidator,
  validateEmailField,
  validatePasswordField,
} from "../..";
import { Link, useNavigate } from "@reach/router";

interface IFormElement extends HTMLFormElement {
  email: HTMLInputElement;
}

interface IProps {
  defaultEmail?: string;
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

export default function ResetPasswordPage({ defaultEmail, onSubmit }: IProps) {
  const navigate = useNavigate();
  const [codeError, setCodeError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<React.ReactNode>();

  return (
    <Paper.Group>
      <Paper>
        <h2>Reset password</h2>
        <p>
          Check your email for your verification code (it may be in your junk
          folder). If you don&apos;t have an account you will need to{" "}
          <Link to="/sign-up">sign up</Link>.
        </p>
        <form
          noValidate
          onSubmit={async (e: React.FormEvent<IFormElement>) => {
            e.preventDefault();
            const code = (e.target as IFormElement).code.value;
            const email = (e.target as IFormElement).email.value;
            const password = (e.target as IFormElement).password.value;
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
              navigate("/sign-in?password-reset");
            } finally {
              setIsSubmitting(false);
            }
          }}
        >
          <TextField
            autoComplete="email"
            autoFocus
            defaultValue={defaultEmail}
            error={emailError}
            label="Email"
            name="email"
            supportiveText="Take care to type your address correctly"
            type="email"
          />
          <TextField
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
