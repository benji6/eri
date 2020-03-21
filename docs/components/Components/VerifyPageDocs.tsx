import * as React from 'react'
import { Link, RouteComponentProps } from '@reach/router'
import { VerifyPage } from '../../../src'

export default function VerifyPageDocs(_: RouteComponentProps) {
  return (
    <VerifyPage
      appName="Eri"
      resendVerificationLink={
        <Link to="/pages/resend-verification">
          resend the verification email
        </Link>
      }
      signInLink={<Link to="/pages/sign-in">sign in</Link>}
    />
  )
}
