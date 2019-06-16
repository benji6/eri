import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Button, ButtonGroup, Select, TextField, Toggle } from '../../../src'
import { IProps } from '../../../src/components/Button'

const PropControlBoolean = ({
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

const PropControlEnum = ({
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

const PropControlString = ({
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

export default function ButtonDocs(_: RouteComponentProps) {
  const [props, setProps] = React.useState<IProps>({
    children: 'Click me!',
    danger: false,
    disabled: false,
    variant: 'primary',
  })

  return (
    <div e-util="slide-children-in">
      <section>
        <h2>Button</h2>
        <p>
          Buttons are cute little things you press. Remember to always wrap them
          up in a <code>ButtonGroup</code>.
        </p>
        <ButtonGroup>
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <a href="#">Link</a>
        </ButtonGroup>
        <ButtonGroup>
          <Button danger>Danger</Button>
          <Button danger variant="secondary">
            Danger secondary
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button disabled>Primary disabled</Button>
          <Button disabled variant="secondary">
            Secondary disabled
          </Button>
        </ButtonGroup>
      </section>
      <hr />
      <section>
        <h3>Configurable example</h3>
        <ButtonGroup>
          <Button {...props} />
        </ButtonGroup>
        <form noValidate>
          <PropControlString
            name="children"
            props={props}
            setProps={setProps}
          />
          <PropControlBoolean name="danger" props={props} setProps={setProps} />
          <PropControlBoolean
            props={props}
            setProps={setProps}
            name="disabled"
          />
          <PropControlEnum
            name="variant"
            options={['primary', 'secondary']}
            props={props}
            setProps={setProps}
          />
        </form>
      </section>
    </div>
  )
}
