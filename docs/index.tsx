import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Button, Spinner, TextField } from '../src'
import Color from './components/Color'
import Space from './components/Space'
import Time from './components/Time'
import Transition from './components/Transition'
import './style.css'

class App extends React.PureComponent {
  render() {
    return (
      <>
        <header>
          <h1>Eri</h1>
        </header>
        <main>
          <p>A minimal design system.</p>
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
            <li>
              Thoughtless - Eri doesn't care about changing global styles
              because she doesn't have to.
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
            No downloaded fonts means no extra page weight. Eri uses system
            fonts and fits into a person's environment.
          </p>
          <h1>{'<h1>Test</h1>'}</h1>
          <h2>{'<h2>Test</h2>'}</h2>
          <h3>{'<h3>Test</h3>'}</h3>
          <p>{'<p>Test</p>'}</p>
          <h2>Components</h2>
          <h3>Spinner</h3>
          <p>Round and round and round we go.</p>
          <Spinner />
          <Spinner variation="ground" />
          <Spinner variation="page" />
          <h3>Button</h3>
          <p>Buttons are cute little things you press.</p>
          <p>
            This button will only ever be disabled while the app is waiting for
            something to happen and will display a little spinner to let the
            user know it's thinking.
          </p>
          <p>
            Remember to wrap your buttons in ButtonGroup - even if there's only
            one! Buttons feel cozy in ButtonGroup and fit nicely in the right
            place!
          </p>
          <Button>Click me!</Button>
          <Button disabled>Click me!</Button>
          <h3>Link</h3>
          <p>Links take you places.</p>
          <a href="#">Click me!</a>
          <h3>TextField</h3>
          <p>Type in me!</p>
          <TextField label="Say something" />
          <TextField error="Oops!" label="Say something" />
        </main>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root') as HTMLDivElement)
