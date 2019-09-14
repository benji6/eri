import { RouteComponentProps, Link } from '@reach/router'
import * as React from 'react'
import { SignUpPage } from '../../../src'

export default function SignUpPageDocs(_: RouteComponentProps) {
  return (
    <SignUpPage
      onSubmit={async ({ email, password }) =>
        console.table({ email, password })
      }
      signInLink={<Link to="/pages/sign-in">Sign in</Link>}
    />
  )
}
