import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Button, Select, Spinner, TextField } from '../src'
import Color from './components/Color'
import ColorGroup from './components/ColorGroup'
import Space from './components/Space'
import Time from './components/Time'
import Transition from './components/Transition'
import './style.css'

class App extends React.PureComponent {
  switchToDarkTheme = () => {
    document.documentElement.classList.add('e-theme-dark')
    this.forceUpdate()
  }

  switchToLightTheme = () => {
    document.documentElement.classList.remove('e-theme-dark')
    this.forceUpdate()
  }

  render() {
    return (
      <>
        <header>
          <h1>Eri</h1>
        </header>
        <main>
          <p e-util="center">A minimal design system.</p>
          <h2>Principles</h2>
          <ul>
            <li>
              Simple - nothing superfluous, small and intuitive API, less is
              more.
            </li>
            <li>
              Performant - no bloat, no unnecessary dependencies, fast render.
            </li>
            <li>
              Accessible - semantic markup, aria attributes, sensible contrast,
              Eri should look and feel great for everyone on all devices.
            </li>
            <li>
              Bespoke - Eri was created for my personal projects so she's got
              free reign on breaking design system best practices and doesn't
              have to worry about legacy browsers.
            </li>
          </ul>
          <h2>Space</h2>
          <p>
            Space, the final frontier... This is how our journey begins. Without
            there is nowhere.
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
          <h3>Light &amp; dark</h3>
          <p>
            For the dark theme just add the class <code>e-theme-dark</code>.
          </p>
          <Button onClick={this.switchToDarkTheme}>Dark</Button>
          <Button onClick={this.switchToLightTheme}>Light</Button>
          <ColorGroup name="Figure &amp; ground">
            <Color varName="--e-color-figure" />
            <Color varName="--e-color-ground" />
          </ColorGroup>
          <ColorGroup name="Balance">
            <Color varName="--e-color-balance-less" />
            <Color varName="--e-color-balance" />
            <Color varName="--e-color-balance-more" />
          </ColorGroup>
          <ColorGroup name="Accent">
            <Color varName="--e-color-accent-less" />
            <Color varName="--e-color-accent" />
            <Color varName="--e-color-accent-more" />
          </ColorGroup>
          <ColorGroup name="Negative">
            <Color varName="--e-color-negative" />
          </ColorGroup>
          <h2>Typography</h2>
          <p>
            No downloaded fonts means no extra page weight. Eri uses system
            fonts and fits into a person's environment.
          </p>
          <h1>{'<h1>Test</h1>'}</h1>
          <h2>{'<h2>Test</h2>'}</h2>
          <h3>{'<h3>Test</h3>'}</h3>
          <p>{'<p>Test</p>'}</p>
          <p e-util="center">
            You can center any text by setting the e-util attribute to "center"
          </p>
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
          <Button>Click me!</Button>
          <Button disabled>Click me!</Button>
          <h3>Link</h3>
          <p>Links take you places.</p>
          <a href="#">Click me!</a>
          <br />
          <br />
          <form>
            <h3>Form</h3>
            <p>This is a form.</p>
            <TextField label="Text field" />
            <TextField error="Oops!" label="Text field error" />
            <Select label="Select">
              <option hidden>Please select</option>
              <option>An option</option>
            </Select>
            <Select error="Oops!" label="Select">
              <option hidden>Please select</option>
              <option>An option</option>
            </Select>
            <Button type="button">Submit</Button>
          </form>
        </main>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root') as HTMLDivElement)
