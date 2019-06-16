import { RouteComponentProps } from '@reach/router'
import * as React from 'react'

export default function Home(_: RouteComponentProps) {
  return (
    <div e-util="slide-children-in">
      <section>
        <h2>Principles</h2>
        <ul>
          <li>
            🧘‍♀️ <strong>Simple</strong> - Eri aims to be minimal and should feel
            clean and intuitive.
          </li>
          <li>
            🚀 <strong>Lightweight</strong> - Eri is performance focussed and
            will not bloat or slow down your app. Components are lightweight and
            tree-shaking is supported out the box.
          </li>
          <li>
            😌 <strong>Easy</strong> - Eri should be straightforward and easy to
            use.
          </li>
        </ul>
      </section>
      <section>
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
      </section>
      <section>
        <h2>About</h2>
        <p>
          Eri is a design system that I created for my personal projects, but it
          is free and open source and the{' '}
          <a href="https://github.com/benji6/eri">
            code is available on GitHub
          </a>
          .
        </p>
      </section>
    </div>
  )
}
