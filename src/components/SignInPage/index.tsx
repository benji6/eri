import * as React from 'react'
import { Button, Paper, PaperGroup, TextField } from '../..'
import {
  composeValidators,
  emailValidator,
  passwordValidator,
  requiredValidator,
} from '../../utils/validators'

const validateEmail = composeValidators(requiredValidator, emailValidator)
const validatePassword = composeValidators(requiredValidator, passwordValidator)

interface IFormElement extends HTMLFormElement {
  email: HTMLInputElement
  password: HTMLInputElement
}

interface IProps {
  onSubmit({
    email,
    password,
    setSubmitError,
  }: {
    email: string
    password: string
    setSubmitError: (r: React.ReactNode) => void
  }): Promise<void>
  signUpLink: React.ReactNode
}

export default function SignInPage({ onSubmit, signUpLink }: IProps) {
  const [emailError, setEmailError] = React.useState('')
  const [passwordError, setPasswordError] = React.useState('')
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitError, setSubmitError] = React.useState<React.ReactNode>()

  return (
    <PaperGroup>
      <Paper>
        <h2>Sign in</h2>
        <form
          noValidate
          onSubmit={async e => {
            e.preventDefault()
            const email = (e.target as IFormElement).email.value
            const password = (e.target as IFormElement).password.value
            const emailErrorMessage = validateEmail(email)
            const passwordErrorMessage = validatePassword(password)
            if (emailErrorMessage || passwordErrorMessage) {
              setEmailError(emailErrorMessage || '')
              setPasswordError(passwordErrorMessage || '')
              return
            }
            if (emailError) setEmailError('')
            if (passwordError) setPasswordError('')
            setIsSubmitting(true)
            try {
              await onSubmit({ email, password, setSubmitError })
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
          <TextField
            autoComplete="current-password"
            error={passwordError}
            label="Password"
            name="password"
            type="password"
          />
          {submitError && (
            <p e-util="center">
              <small e-util="negative">{submitError}</small>
            </p>
          )}
          <Button.Group>
            <Button disabled={isSubmitting}>Sign in</Button>
          </Button.Group>
          <p e-util="center">
            <small>Don&apos;t have an account? {signUpLink}!</small>
          </p>
        </form>
      </Paper>
    </PaperGroup>
  )
}
