import * as React from "react";
import { Menu } from "../../../src";
import { RouteComponentProps } from "@reach/router";

export default function PageLinks(
  props: RouteComponentProps & React.HTMLAttributes<HTMLAnchorElement>
) {
  return (
    <Menu.SubList>
      <Menu.Link {...props} to="/pages/forgot-password">
        ForgotPassword
      </Menu.Link>
      <Menu.Link {...props} to="/pages/resend-verification">
        ResendVerification
      </Menu.Link>
      <Menu.Link {...props} to="/pages/reset-password">
        ResetPassword
      </Menu.Link>
      <Menu.Link {...props} to="/pages/sign-in">
        SignIn
      </Menu.Link>
      <Menu.Link {...props} to="/pages/sign-up">
        SignUp
      </Menu.Link>
      <Menu.Link {...props} to="/pages/verify">
        Verify
      </Menu.Link>
    </Menu.SubList>
  );
}
