import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { SubHeading } from '../../../src'
import Color from './Color'
import DisplayGroup from './DisplayGroup'
import Easing from './Easing'
import Space from './Space'
import Time from './Time'

export default function Home(_: RouteComponentProps) {
  return (
    <>
      <h2>Principles</h2>
      <ul>
        <li>
          🧘‍♀️ <strong>Simple</strong> - Eri aims to be minimal and should feel
          clean and intuitive.
        </li>
        <li>
          🚀 <strong>Lightweight</strong> - Eri is performance focussed and will
          not bloat or slow down your app. Components are lightweight and
          tree-shaking is supported out the box.
        </li>
        <li>
          😌 <strong>Easy</strong> - Eri should be straightforward and easy to
          use.
        </li>
      </ul>
      <h2>Design elements</h2>
      <h3>Font size</h3>
      <p>
        Fonts are sized based on a fluid modular scale which keeps things simple
        and conveys a sense of harmony.
      </p>
      <DisplayGroup>
        <Space varName="--e-font-size-0" />
        <Space varName="--e-font-size-1" />
        <Space varName="--e-font-size-2" />
        <Space varName="--e-font-size-3" />
        <Space varName="--e-font-size-4" />
      </DisplayGroup>
      <h3>Space</h3>
      <p>Space is based on a fluid modular scale and is linked to font-size.</p>
      <DisplayGroup>
        <Space varName="--e-space-0" />
        <Space varName="--e-space-1" />
        <Space varName="--e-space-2" />
        <Space varName="--e-space-3" />
        <Space varName="--e-space-4" />
      </DisplayGroup>
      <h3>Border radius</h3>
      <p>Border radius is responsive and linked to space.</p>
      <DisplayGroup>
        <Space varName="--e-border-radius-0" />
        <Space varName="--e-border-radius-1" />
      </DisplayGroup>
      <h3>Border width</h3>
      <p>Border width is fixed for all devices.</p>
      <DisplayGroup>
        <Space varName="--e-border-width-0" />
        <Space varName="--e-border-width-1" />
      </DisplayGroup>
      <h3>Time</h3>
      <p>
        Time is responsive, things take more time on larger screens so velocity
        feels more constant.
      </p>
      <DisplayGroup>
        <Time varName="--e-time-0" />
        <Time varName="--e-time-1" />
        <Time varName="--e-time-2" />
      </DisplayGroup>
      <h3>Easing</h3>
      <p>
        Now we have space and time we need to define how we're going to move
        through it. Easings define how movement through space-time feels.
      </p>
      <DisplayGroup>
        <Easing varName="--e-easing-accelerate" />
        <Easing varName="--e-easing-decelerate" />
        <Easing varName="--e-easing-standard" />
      </DisplayGroup>
      <h3>Animation</h3>
      <p>Here are the custom properties you can use for animation:</p>
      <ul>
        <li>
          <code>--e-animation-fade-in</code>
        </li>
        <li>
          <code>--e-animation-spin</code>
        </li>
      </ul>
      <h3>Color</h3>
      <h4>Figure</h4>
      <DisplayGroup>
        <Color varName="--e-color-figure-more" />
        <Color varName="--e-color-figure" />
        <Color varName="--e-color-figure-less" />
      </DisplayGroup>
      <h4>Balance</h4>
      <DisplayGroup>
        <Color varName="--e-color-balance-more" />
        <Color varName="--e-color-balance" />
        <Color varName="--e-color-balance-less" />
      </DisplayGroup>
      <h4>Ground</h4>
      <DisplayGroup>
        <Color varName="--e-color-ground-more" />
        <Color varName="--e-color-ground" />
        <Color varName="--e-color-ground-less" />
      </DisplayGroup>
      <h4>Theme</h4>
      <p>
        Use <code>--e-color-theme-app</code> for web app manifest or{' '}
        <code>theme_color</code> meta tag
      </p>
      <DisplayGroup>
        <Color varName="--e-color-theme-app" />
        <Color varName="--e-color-theme-more" />
        <Color varName="--e-color-theme" />
        <Color varName="--e-color-theme-less" />
      </DisplayGroup>
      <h4>Negative</h4>
      <DisplayGroup>
        <Color varName="--e-color-negative-more" />
        <Color varName="--e-color-negative" />
        <Color varName="--e-color-negative-less" />
      </DisplayGroup>
      <h4>Positive</h4>
      <DisplayGroup>
        <Color varName="--e-color-positive" />
        <Color varName="--e-color-positive-less" />
      </DisplayGroup>
      <h4>Highlight</h4>
      <DisplayGroup>
        <Color varName="--e-color-highlight-0" />
        <Color varName="--e-color-highlight-1" />
        <Color varName="--e-color-highlight-2" />
        <Color varName="--e-color-highlight-3" />
        <Color varName="--e-color-highlight-4" />
        <Color varName="--e-color-highlight-5" />
      </DisplayGroup>
      <h3>Typography</h3>
      <h1>
        Heading 1 <SubHeading>With a subheading</SubHeading>
      </h1>
      <h2>
        Heading 2 <SubHeading>With a subheading</SubHeading>
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p>
        Example of some <strong>strong text</strong>.
      </p>
      <p>
        Example of some <small>small text</small>.
      </p>
      <h2>Heading 2</h2>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <h3>Heading 3</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Heading 4</h4>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
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
    </>
  )
}
