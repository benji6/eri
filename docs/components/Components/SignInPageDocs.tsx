import { RouteComponentProps, Link } from '@reach/router'
import * as React from 'react'
import { SignInPage } from '../../../src'

export default function SignInPageDocs(_: RouteComponentProps) {
  return (
    <SignInPage
      onSubmit={async ({ email, password }) =>
        console.table({ email, password })
      }
      signUpLink={<Link to="/pages/sign-up">Sign up</Link>}
    />
  )
}
