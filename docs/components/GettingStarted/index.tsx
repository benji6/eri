import { RouteComponentProps } from '@reach/router'
import * as React from 'react'

export default function GettingStarted(_: RouteComponentProps) {
  return (
    <>
      <h2>Getting Started</h2>
      <p>
        The <code>eri</code> package is published on npm so you can install it
        with your favorite package manager. Tree-shaking and TypeScript are
        supported out the box!
      </p>
      <p>
        To get the styles working you will need to include the CSS in your app
        which can be found at <code>eri/dist/index.css</code> in your{' '}
        <code>node_modules</code>.
      </p>
      <p>
        To get the font working you should include the following tag in your
        HTML page:{' '}
        <code>
          {
            '<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,900&display=swap" rel="stylesheet">'
          }
        </code>
        .
      </p>
    </>
  )
}
