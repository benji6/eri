import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import Color from './Color'
import DisplayGroup from './DisplayGroup'
import Easing from './Easing'
import Space from './Space'
import Time from './Time'

export default function DesignElements(_: RouteComponentProps) {
  return (
    <div e-util="slide-children-in">
      <section>
        <h2>Design elements</h2>
      </section>
      <section>
        <h3>Font size</h3>
        <p>
          Fonts are sized based on a fluid modular scale which keeps things
          simple and conveys a sense of harmony.
        </p>
        <DisplayGroup>
          <Space varName="--e-font-size-0" />
          <Space varName="--e-font-size-1" />
          <Space varName="--e-font-size-2" />
          <Space varName="--e-font-size-3" />
          <Space varName="--e-font-size-4" />
        </DisplayGroup>
      </section>
      <section>
        <h3>Space</h3>
        <p>
          Space is based on a fluid modular scale and is defined with{' '}
          <code>em</code> units to keep it responsive to font-size.
        </p>
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
      </section>
      <section>
        <h3>Time</h3>
        <p>
          Time is responsive, things take more time on larger screens so
          velocity feels more constant.
        </p>
        <DisplayGroup>
          <Time varName="--e-time-0" />
          <Time varName="--e-time-1" />
          <Time varName="--e-time-2" />
        </DisplayGroup>
        <h3>Easing</h3>
        <p>
          Inspiration taken from{' '}
          <a href="https://material.io/design/motion/speed.html#easing">
            Material Design
          </a>
          .
        </p>
        <DisplayGroup>
          <Easing varName="--e-easing-accelerate" />
          <Easing varName="--e-easing-decelerate" />
          <Easing varName="--e-easing-standard" />
        </DisplayGroup>
      </section>
      <section>
        <h3>Animation</h3>
        <h4>Fade in</h4>
        <p>
          Set the <code>e-util</code> attribute on an element to{' '}
          <code>"fade-in"</code> to get a fade in animation.
        </p>
        <h4>Slide in</h4>
        <p>
          Set the <code>e-util</code> attribute on an element to{' '}
          <code>"slide-in"</code> to get a slide in animation.
        </p>
        <p>
          If you want to slide in a group of elements one by one then set the{' '}
          <code>e-util</code> attribute on the parent element to{' '}
          <code>"slide-children-in"</code>.
        </p>
      </section>
      <section>
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
        <h4>Mask</h4>
        <DisplayGroup>
          <Color varName="--e-color-mask" />
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
      </section>
    </div>
  )
}
