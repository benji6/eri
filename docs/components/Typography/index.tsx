import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Paper, PaperGroup, SubHeading } from '../../../src'

export default function Typography(_: RouteComponentProps) {
  return (
    <PaperGroup>
      <Paper>
        <h2>Typography</h2>
      </Paper>
      <Paper>
        <h1>
          Heading 1 <SubHeading>With a subheading</SubHeading>
        </h1>
        <h2>
          Heading 2 <SubHeading>With a subheading</SubHeading>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Example of some <strong>strong text</strong>.
        </p>
        <p>
          Example of some <small>small text</small>.
        </p>
      </Paper>
      <Paper>
        <h2>Heading 2</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <h3>Heading 3</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h4>Heading 4</h4>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </Paper>
      <Paper>
        <h3>Hr</h3>
        <hr />
      </Paper>
      <Paper>
        <h3>CSS utilities</h3>
        <p e-util="center">
          You can center any element by setting the e-util attribute to "center"
        </p>
        <p e-util="center negative">
          You can give any element a negative sentiment by setting the e-util
          attribute to "negative"
        </p>
        <p e-util="pre-line">
          {`You can set white-space to pre-line...

...by setting the e-util attribute to "pre-line"`}
        </p>
      </Paper>
    </PaperGroup>
  )
}
