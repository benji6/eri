import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Paper, PaperGroup, Main } from '../../../src'
import { IProps } from '../../../src/components/Main'
import ConfigurableExample, { PropControlString } from './_ConfigurableExample'

export default function MainDocs(_: RouteComponentProps) {
  const [props, setProps] = React.useState<IProps>({
    children: 'Example content',
  })

  return (
    <PaperGroup>
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
    </PaperGroup>
  )
}
