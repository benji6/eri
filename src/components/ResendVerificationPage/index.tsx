import * as React from 'react'
import { Formik, FormikProps, Form, Field, FieldProps } from 'formik'
import {
  composeValidators,
  emailValidator,
  requiredValidator,
} from '../../utils/validators'
import { PaperGroup, Paper, ButtonGroup, Button, TextField } from '../..'

interface IFormValues {
  email: string
}

const initialValues = {
  email: '',
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
  const [submitError, setSubmitError] = React.useState<React.ReactNode>()

  return (
    <PaperGroup>
      <Paper>
        <h2>Resend verification email</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={async ({ email }, { setSubmitting }) => {
            try {
              await onSubmit({ email, setSubmitError })
            } finally {
              setSubmitting(false)
            }
          }}
        >
          {({ isSubmitting }: FormikProps<IFormValues>) => (
            <Form noValidate>
              <Field
                name="email"
                validate={composeValidators(requiredValidator, emailValidator)}
              >
                {({ field, form }: FieldProps<IFormValues>) => (
                  <TextField
                    {...field}
                    autoComplete="email"
                    error={
                      form.submitCount &&
                      form.touched.email &&
                      form.errors.email
                    }
                    label="Email"
                    type="email"
                  />
                )}
              </Field>
              {submitError && (
                <p e-util="center">
                  <small e-util="negative">{submitError}</small>
                </p>
              )}
              <ButtonGroup>
                <Button disabled={isSubmitting}>Resend</Button>
              </ButtonGroup>
              <p e-util="center">
                <small>
                  Looking for the {signInLink} or {signUpLink} pages?
                </small>
              </p>
            </Form>
          )}
        </Formik>
      </Paper>
    </PaperGroup>
  )
}
