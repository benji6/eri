import * as React from "react";
import { Link } from "@reach/router";
import { Paper } from "../..";

interface IProps {
  appName: React.ReactNode;
}

export default function VerifyPage({ appName }: IProps) {
  return (
    <Paper.Group>
      <Paper>
        <h2>Verification email sent!</h2>
        <p>
          Check your email and click the link to confirm your email address.
        </p>
        <p>
          When you&apos;re finished come back to {appName} to{" "}
          <Link to="/sign-in">Sign in</Link> and get started!
        </p>
        <p e-util="center">
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
