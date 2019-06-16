import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Button, ButtonGroup } from '../../../src'

export default function ButtonDocs(_: RouteComponentProps) {
  return (
    <div e-util="slide-in">
      <h2>Button</h2>
      <p>
        Buttons are cute little things you press. Remember to always wrap them
        up in a ButtonGroup.
      </p>
      <ButtonGroup>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <a href="#">Link</a>
      </ButtonGroup>
      <ButtonGroup>
        <Button sentiment="negative">Negative</Button>
        <Button sentiment="negative" variant="secondary">
          Negative secondary
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button disabled>Primary disabled</Button>
        <Button disabled variant="secondary">
          Secondary disabled
        </Button>
      </ButtonGroup>
    </div>
  )
}
