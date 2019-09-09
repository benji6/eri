import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Paper, PaperGroup } from '../../../src'
import Banner from './Banner'

export default function Home(_: RouteComponentProps) {
  return (
    <PaperGroup>
      <Paper>
        <Banner />
      </Paper>
      <Paper>
        <h2>Principles</h2>
        <ul>
          <li>
            <span aria-label="Yoga" role="img">
              🧘‍♀️
            </span>{' '}
            <strong>Simple</strong> - Eri aims to be minimal and should feel
            clean and intuitive.
          </li>
          <li>
            <span aria-label="Rocket" role="img">
              🚀
            </span>{' '}
            <strong>Lightweight</strong> - Eri is performance focussed and will
            not bloat or slow down your app. Components are lightweight and
            tree-shaking is supported out the box.
          </li>
          <li>
            <span aria-label="Smile" role="img">
              😌
            </span>{' '}
            <strong>Easy</strong> - Eri should be straightforward and easy to
            use.
          </li>
        </ul>
      </Paper>
      <Paper>
        <h2>Getting Started</h2>
        <p>
          The <code>eri</code> package is published on npm so you can install it
          with your favorite package manager. Tree-shaking and TypeScript are
          supported out the box!
        </p>
        <p>
          To get the styles working you will need to include the CSS in your app
          which can be found at <code>eri/dist/index.css</code>.
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
      </Paper>
      <Paper>
        <h2>About</h2>
        <p>
          Eri is a design system that I created for my personal projects, but it
          is free and open source and the{' '}
          <a href="https://github.com/benji6/eri">
            code is available on GitHub
          </a>
          .
        </p>
        <p>
          Documentation is a little sparse because to my knowledge I&apos;m the
          only person who uses this, but it should be fairly straightforward to
          use, especially if you&apos;re using TypeScript.
        </p>
        <p>
          If you want to see one of my projects that uses Eri check out{' '}
          <a href="https://github.com/benji6/webnotes">Webnotes</a>.
        </p>
      </Paper>
    </PaperGroup>
  )
}
