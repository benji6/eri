import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Icon } from '../../../src'

export default function IconDocs(_: RouteComponentProps) {
  return (
    <div e-util="slide-in">
      <h3>Icon</h3>
      <p>
        ❤️ <a href="https://feathericons.com/">Feather</a>
      </p>
      <Icon name="check" />
      <Icon name="cross" />
      <Icon name="down" />
      <Icon name="left" />
      <Icon name="menu" />
      <Icon name="plus" />
      <Icon name="right" />
      <Icon name="save" />
    </div>
  )
}
