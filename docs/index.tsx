import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Page } from '../src'
import Color from './components/Color'
import Space from './components/Space'
import Time from './components/Time'
import Transition from './components/Transition'
import '../src/vars.css' // DELETEME
import './style.css'

class App extends React.PureComponent {
  render() {
    return (
      <Page>
        <h1>Eri</h1>
        <p>A minimal design system</p>
        <h2>Principles</h2>
        <ul>
          <li>Minimal - nothing superfluous, less is more.</li>
          <li>Simple - small and intuitive API surface.</li>
          <li>
            Performant - no bloat, no unnecessary dependencies, fast render
            performance.
          </li>
          <li>
            Accessible - semantic markup, aria attributes, sensible contrast,
            resolution agnostic.
          </li>
        </ul>
        <h2>Space</h2>
        <p>
          Space is the final frontier, but this is where our journey begins -
          how can we move anywhere if we don't first have space to move in?
        </p>
        <Space varName="--e-space-0" />
        <Space varName="--e-space-1" />
        <Space varName="--e-space-2" />
        <Space varName="--e-space-3" />
        <Space varName="--e-space-4" />
        <Space varName="--e-space-5" />
        <Space varName="--e-space-6" />
        <Space varName="--e-space-7" />
        <h2>Time</h2>
        <p>Space is fine, but we'll also get nowhere without time.</p>
        <Time varName="--e-time-0" />
        <Time varName="--e-time-1" />
        <h2>Transition</h2>
        <p>
          Now we have space and time we need to define how we're going to move
          through it. Transitions contribute a lot to how movement through
          space-time feels.
        </p>
        <Transition varName="--e-transition" />
        <h2>Color</h2>
        <p>
          &quot;Black then white are all I see In my infancy. Red and yellow
          then came to be, Reaching out to me, Lets me see.&quot; - Tool
        </p>
        <h3>Ground</h3>
        <div>
          <Color varName="--e-color-ground-light" />
          <Color varName="--e-color-ground" />
          <Color varName="--e-color-ground-dark" />
        </div>
        <h3>Figure</h3>
        <Color varName="--e-color-figure" />
        <h3>Balance</h3>
        <Color varName="--e-color-balance-light" />
        <Color varName="--e-color-balance" />
        <Color varName="--e-color-balance-dark" />
        <h3>Accent</h3>
        <Color varName="--e-color-accent-light" />
        <Color varName="--e-color-accent" />
        <Color varName="--e-color-accent-dark" />
        <h3>Negative</h3>
        <Color varName="--e-color-negative" />
        <h2>Typography</h2>
        <p>
          No fonts &amp; no extra page weight. Eri is uses system fonts so it
          becomes part of its environment.
        </p>
      </Page>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root') as HTMLDivElement)
