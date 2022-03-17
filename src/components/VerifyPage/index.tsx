import * as React from "react";
import { Link } from "react-router-dom";
import { Paper } from "../..";
import { PaperGroupProps } from "../Paper/PaperGroup";

interface Props extends Omit<PaperGroupProps, "onSubmit"> {
  appName: React.ReactNode;
}

export default function VerifyPage({ appName, ...rest }: Props) {
  return (
    <Paper.Group {...rest}>
      <Paper>
        <h2>Verification email sent!</h2>
        <p>
          Check your email and click the link to confirm your email address.
        </p>
        <p>
          When you&apos;re finished come back to {appName} to{" "}
          <Link to="/sign-in">sign in</Link> and get started!
        </p>
        <p className="center">
          <small>
            Can&apos;t find our email? Check your junk folder or{" "}
            <Link to="/resend-verification">resend the verification email</Link>
            .
          </small>
        </p>
      </Paper>
    </Paper.Group>
  );
}
