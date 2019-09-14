import { RouteComponentProps, Link } from '@reach/router'
import * as React from 'react'
import { ResendVerificationPage } from '../../../src'

export default function ResendVerificationPageDocs(_: RouteComponentProps) {
  return (
    <ResendVerificationPage
      onSubmit={async ({ email }) => console.table({ email })}
      signInLink={<Link to="/pages/sign-in">Sign in</Link>}
      signUpLink={<Link to="/pages/sign-up">Sign up</Link>}
    />
  )
}
