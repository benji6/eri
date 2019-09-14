import { Link, RouteComponentProps } from '@reach/router'
import * as React from 'react'

export default function PageLinks(
  props: RouteComponentProps & React.HTMLAttributes<HTMLAnchorElement>,
) {
  return (
    <nav>
      <ul>
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
      </ul>
    </nav>
  )
}
