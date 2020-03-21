import * as React from 'react'
import { Button, Paper, PaperGroup, TextField } from '../..'
import {
  composeValidators,
  emailValidator,
  requiredValidator,
} from '../../utils/validators'

const validateEmail = composeValidators(requiredValidator, emailValidator)

interface IFormElement extends HTMLFormElement {
  email: HTMLInputElement
}

interface IProps {
  onSubmit({
    email,
    setSubmitError,
  }: {
    email: string
    setSubmitError: (r: React.ReactNode) => void
  }): Promise<void>
  signInLink: React.ReactNode
  signUpLink: React.ReactNode
}

export default function ResendVerificationPage({
  onSubmit,
  signInLink,
  signUpLink,
}: IProps) {
  const [emailError, setEmailError] = React.useState('')
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitError, setSubmitError] = React.useState<React.ReactNode>()

  return (
    <PaperGroup>
      <Paper>
        <h2>Resend verification email</h2>
        <form
          noValidate
          onSubmit={async (e: React.FormEvent<IFormElement>) => {
            e.preventDefault()
            const email = (e.target as IFormElement).email.value
            const emailErrorMessage = validateEmail(email)
            if (emailErrorMessage) return setEmailError(emailErrorMessage)
            if (emailError) setEmailError('')
            setIsSubmitting(true)
            try {
              await onSubmit({ email, setSubmitError })
            } finally {
              setIsSubmitting(false)
            }
          }}
        >
          <TextField
            autoComplete="email"
            autoFocus
            error={emailError}
            label="Email"
            name="email"
            type="email"
          />
          {submitError && (
            <p e-util="center">
              <small e-util="negative">{submitError}</small>
            </p>
          )}
          <Button.Group>
            <Button disabled={isSubmitting}>Resend</Button>
          </Button.Group>
          <p e-util="center">
            <small>
              Looking for the {signInLink} or {signUpLink} pages?
            </small>
          </p>
        </form>
      </Paper>
    </PaperGroup>
  )
}
