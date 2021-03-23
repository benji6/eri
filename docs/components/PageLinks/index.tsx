import * as React from "react";
import { Nav } from "../../../src";
import { RouteComponentProps } from "@reach/router";

export default function PageLinks(
  props: RouteComponentProps & React.HTMLAttributes<HTMLAnchorElement>
) {
  return (
    <Nav.SubList>
      <Nav.Link {...props} to="/pages/change-password">
        ChangePassword
      </Nav.Link>
      <Nav.Link {...props} to="/pages/forgot-password">
        ForgotPassword
      </Nav.Link>
      <Nav.Link {...props} to="/pages/resend-verification">
        ResendVerification
      </Nav.Link>
      <Nav.Link {...props} to="/pages/reset-password">
        ResetPassword
      </Nav.Link>
      <Nav.Link {...props} to="/pages/sign-in">
        SignIn
      </Nav.Link>
      <Nav.Link {...props} to="/pages/sign-up">
        SignUp
      </Nav.Link>
      <Nav.Link {...props} to="/pages/verify">
        Verify
      </Nav.Link>
    </Nav.SubList>
  );
}
