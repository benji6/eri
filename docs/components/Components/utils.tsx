import * as React from 'react'
import { Select, TextField, Toggle } from '../../../src'

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
