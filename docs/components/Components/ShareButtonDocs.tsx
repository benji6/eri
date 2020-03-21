import * as React from 'react'
import ConfigurableExample, { PropControlString } from './_ConfigurableExample'
import { Paper, ShareButton } from '../../../src'
import { IProps } from '../../../src/components/ShareButton'
import { RouteComponentProps } from '@reach/router'

export default function ShareButtonDocs(_: RouteComponentProps) {
  const [props, setProps] = React.useState<IProps>({
    text: 'Example text',
    title: document.title,
    url: location.origin,
  })

  return (
    <Paper.Group>
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
    </Paper.Group>
  )
}
