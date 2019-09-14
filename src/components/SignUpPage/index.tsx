import * as React from 'react'
import { Formik, FormikProps, Form, Field, FieldProps } from 'formik'
import {
  emailValidator,
  passwordValidator,
  composeValidators,
  requiredValidator,
} from '../../utils/validators'
import { PaperGroup, Paper, ButtonGroup, Button, TextField } from '../..'

interface IFormValues {
  email: string
  password: string
}

const initialValues = {
  email: '',
  password: '',
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
  signInLink: React.ReactNode
}

export default function SignUpPage({ onSubmit, signInLink }: IProps) {
  const [submitError, setSubmitError] = React.useState<React.ReactNode>()

  return (
    <PaperGroup>
      <Paper>
        <h2>Sign up</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={async ({ email, password }, { setSubmitting }) => {
            try {
              await onSubmit({ email, password, setSubmitError })
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
              <Field
                name="password"
                validate={composeValidators(
                  requiredValidator,
                  passwordValidator,
                )}
              >
                {({ field, form }: FieldProps<IFormValues>) => (
                  <TextField
                    {...field}
                    autoComplete="new-password"
                    error={
                      form.submitCount &&
                      form.touched.password &&
                      form.errors.password
                    }
                    label="Password"
                    type="password"
                  />
                )}
              </Field>
              {submitError && (
                <p e-util="center">
                  <small e-util="negative">{submitError}</small>
                </p>
              )}
              <ButtonGroup>
                <Button disabled={isSubmitting}>Sign up</Button>
              </ButtonGroup>
              <p e-util="center">
                <small>Already have an account? {signInLink}!</small>
              </p>
            </Form>
          )}
        </Formik>
      </Paper>
    </PaperGroup>
  )
}
