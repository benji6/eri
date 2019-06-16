import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Icon } from '../../../src'
import { iconNameMap, IProps } from '../../../src/components/Icon'
import { PropControlEnum } from './utils'

const iconNames = Object.keys(iconNameMap)

export default function IconDocs(_: RouteComponentProps) {
  const [props, setProps] = React.useState<IProps>({
    name: 'check',
    size: '4',
  })

  return (
    <div e-util="slide-children-in">
      <section>
        <h2>Icon</h2>
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
      </section>
      <hr />
      <section>
        <h3>Configurable example</h3>
        <Icon {...props} />
        <form noValidate>
          <PropControlEnum
            name="name"
            options={iconNames}
            props={props}
            setProps={setProps}
          />
          <PropControlEnum
            name="size"
            options={['2', '3', '4']}
            props={props}
            setProps={setProps}
          />
        </form>
      </section>
    </div>
  )
}
