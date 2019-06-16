import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Button, ButtonGroup } from '../../../src'
import { IProps } from '../../../src/components/Button'
import ConfigurableExample, {
  PropControlBoolean,
  PropControlEnum,
  PropControlString,
} from './_ConfigurableExample'

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
      <ConfigurableExample
        example={
          <ButtonGroup>
            <Button {...props} />
          </ButtonGroup>
        }
      >
        <PropControlString name="children" props={props} setProps={setProps} />
        <PropControlBoolean name="danger" props={props} setProps={setProps} />
        <PropControlBoolean props={props} setProps={setProps} name="disabled" />
        <PropControlEnum
          name="variant"
          options={['primary', 'secondary']}
          props={props}
          setProps={setProps}
        />
      </ConfigurableExample>
    </div>
  )
}
