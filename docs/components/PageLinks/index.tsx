import * as React from 'react'
import { Link, RouteComponentProps } from '@reach/router'

export default function PageLinks(
  props: RouteComponentProps & React.HTMLAttributes<HTMLAnchorElement>,
) {
  return (
    <nav>
      <ul>
        <li>
          <Link {...props} to="/pages/resend-verification">
            Resend Verification
          </Link>
        </li>
        <li>
          <Link {...props} to="/pages/sign-in">
            Sign in
          </Link>
        </li>
        <li>
          <Link {...props} to="/pages/sign-up">
            Sign up
          </Link>
        </li>
        <li>
          <Link {...props} to="/pages/verify">
            Verify
          </Link>
        </li>
      </ul>
    </nav>
  )
}
