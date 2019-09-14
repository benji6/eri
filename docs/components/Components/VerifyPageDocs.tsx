import { RouteComponentProps, Link } from '@reach/router'
import * as React from 'react'
import { VerifyPage } from '../../../src'

export default function VerifyPageDocs(_: RouteComponentProps) {
  return (
    <VerifyPage
      resendVerificationLink={
        <Link to="/pages/resend-verification">
          resend the verification email
        </Link>
      }
    />
  )
}
