import * as React from 'react'
import { Select, TextField, Toggle } from '../../../src'

export default function ConfigurableExample({
  example,
  children,
}: {
  example: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <>
      <section>
        <h3>Configurable example</h3>
        {example}
        <form noValidate>{children}</form>
      </section>
    </>
  )
}

export const PropControlBoolean = ({
  name,
  props,
  setProps,
}: {
  name: string
  props: object
  setProps: React.Dispatch<React.SetStateAction<typeof props>>
}) => (
  <Toggle
    checked={props[name]}
    label={name}
    onChange={e => setProps({ ...props, [name]: e.target.checked })}
  />
)

export const PropControlEnum = ({
  name,
  options,
  props,
  setProps,
}: {
  name: string
  options: Array<string | undefined>
  props: object
  setProps: React.Dispatch<React.SetStateAction<typeof props>>
}) => (
  <Select
    label={name}
    onChange={e =>
      setProps({
        ...props,
        [name]: e.target.value ? e.target.value : undefined,
      })
    }
    value={props[name]}
  >
    {options.map((option, i) => (
      <option key={i} value={option}>
        {option}
      </option>
    ))}
  </Select>
)

export const PropControlNumber = ({
  max = Infinity,
  name,
  props,
  setProps,
}: {
  max?: number
  name: string
  props: object
  setProps: React.Dispatch<React.SetStateAction<typeof props>>
}) => (
  <TextField
    label={name}
    onChange={({ target: { value } }) => {
      const n = Number(value)
      if (!Number.isNaN(n) && n <= max) setProps({ ...props, [name]: n })
    }}
    value={props[name]}
  />
)

export const PropControlString = ({
  name,
  props,
  setProps,
}: {
  name: string
  props: object
  setProps: React.Dispatch<React.SetStateAction<typeof props>>
}) => (
  <TextField
    label={name}
    onChange={e => setProps({ ...props, [name]: e.target.value })}
    value={props[name]}
  />
)
