import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Paper, PaperGroup, ShareButton } from '../../../src'
import { IProps } from '../../../src/components/Button'
import ConfigurableExample, { PropControlString } from './_ConfigurableExample'

export default function ShareButtonDocs(_: RouteComponentProps) {
  const [props, setProps] = React.useState<IProps>({
    children: 'Click me!',
    danger: false,
    disabled: false,
    variant: 'primary',
  })

  return (
    <PaperGroup>
      <Paper>
        <h2>ShareButton</h2>
        <p>
          If you aren&apos;t seeing the share button that&apos;s because
          it&apos;s only visible in browsers that support the{' '}
          <a href="https://caniuse.com/#feat=web-share">Web Share API</a>.
        </p>
      </Paper>
      <ConfigurableExample example={<ShareButton {...props} />}>
        <PropControlString name="text" props={props} setProps={setProps} />
        <PropControlString name="title" props={props} setProps={setProps} />
        <PropControlString name="url" props={props} setProps={setProps} />
      </ConfigurableExample>
    </PaperGroup>
  )
}
