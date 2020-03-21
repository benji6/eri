import * as React from 'react'
import ConfigurableExample, { PropControlString } from './_ConfigurableExample'
import { Main, Paper } from '../../../src'
import { IProps } from '../../../src/components/Main'
import { RouteComponentProps } from '@reach/router'

export default function MainDocs(_: RouteComponentProps) {
  const [props, setProps] = React.useState<IProps>({
    children: 'Example content',
  })

  return (
    <Paper.Group>
      <Paper>
        <h2>Main</h2>
        <p>
          Use this as your html <code>{'<main>'}</code> element, it comes with
          some built in styling.
        </p>
      </Paper>
      <ConfigurableExample example={<Main {...props} />}>
        <PropControlString name="children" props={props} setProps={setProps} />
      </ConfigurableExample>
    </Paper.Group>
  )
}
