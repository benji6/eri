import * as React from 'react'
import { Paper } from '../..'

interface IProps {
  appName: React.ReactNode
  resendVerificationLink: React.ReactNode
  signInLink: React.ReactNode
}

export default function VerifyPage({
  appName,
  resendVerificationLink,
  signInLink,
}: IProps) {
  return (
    <Paper.Group>
      <Paper>
        <h2>Verification email sent!</h2>
        <p>
          Check your email and click the link to confirm your email address.
        </p>
        <p>
          When you&apos;re finished come back to {appName} to {signInLink} and
          get started!
        </p>
        <p e-util="center">
          <small>
            Can&apos;t find our email? Check your junk folder or{' '}
            {resendVerificationLink}.
          </small>
        </p>
      </Paper>
    </Paper.Group>
  )
}
