import * as React from "react";
import { Menu } from "../../../src";
import { RouteComponentProps } from "@reach/router";

export default function PageLinks(
  props: RouteComponentProps & React.HTMLAttributes<HTMLAnchorElement>
) {
  return (
    <ul>
      <li>
        <Menu.Link {...props} to="/pages/resend-verification">
          Resend Verification
        </Menu.Link>
      </li>
      <li>
        <Menu.Link {...props} to="/pages/sign-in">
          Sign in
        </Menu.Link>
      </li>
      <li>
        <Menu.Link {...props} to="/pages/sign-up">
          Sign up
        </Menu.Link>
      </li>
      <li>
        <Menu.Link {...props} to="/pages/verify">
          Verify
        </Menu.Link>
      </li>
    </ul>
  );
}
