import * as React from 'react'
import { PaperGroup, Paper } from '../..'

interface IProps {
  resendVerificationLink: React.ReactNode
}

export default function VerifyPage({ resendVerificationLink }: IProps) {
  return (
    <PaperGroup>
      <Paper>
        <h2>Verification email sent!</h2>
        <p>
          Check your email and click the link to confirm your email address.
        </p>
        <p>
          When you&apos;re finished come back to Omniboard to sign in and get
          started!
        </p>
        <p e-util="center">
          <small>
            Can&apos;t find our email? Check your junk folder or{' '}
            {resendVerificationLink}.
          </small>
        </p>
      </Paper>
    </PaperGroup>
  )
}
