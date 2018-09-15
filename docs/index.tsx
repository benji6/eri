import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import {
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  CurrencyField,
  Dialog,
  Icon,
  Pagination,
  RadioButton,
  RadioGroup,
  Select,
  Spinner,
  TextField,
} from '../src'
import Color from './components/Color'
import ColorGroup from './components/ColorGroup'
import SpaceGroup from './components/SpaceGroup'
import Space from './components/Space'
import Time from './components/Time'
import Transition from './components/Transition'
import getStylePropValue from './utils/getStylePropValue'
import './style.css'

const metaThemeColor = document.querySelector('meta[name=theme-color]')

interface IState {
  isDialogOpen: boolean
  page3: number
  page4: number
  page10: number
  page1000: number
}

class App extends React.PureComponent {
  state: IState = {
    isDialogOpen: false,
    page3: 0,
    page4: 0,
    page10: 4,
    page1000: 999,
  }

  handleDialogClose = () => this.setState({ isDialogOpen: false })

  handleDialogOpen = () => this.setState({ isDialogOpen: true })

  handlePageChange3 = (page3: number) => this.setState({ page3 })
  handlePageChange4 = (page4: number) => this.setState({ page4 })
  handlePageChange10 = (page10: number) => this.setState({ page10 })
  handlePageChange1000 = (page1000: number) => this.setState({ page1000 })

  switchToDarkTheme = () => {
    document.documentElement.classList.add('e-theme-dark')
    metaThemeColor.setAttribute(
      'content',
      getStylePropValue('--e-color-figure'),
    )
    this.forceUpdate()
  }

  switchToLightTheme = () => {
    document.documentElement.classList.remove('e-theme-dark')
    metaThemeColor.setAttribute(
      'content',
      getStylePropValue('--e-color-figure'),
    )
    this.forceUpdate()
  }

  render() {
    const { isDialogOpen, page3, page4, page10, page1000 } = this.state

    return (
      <Router>
        <>
          <header>
            <h1>
              <a href="/">Eri</a>
            </h1>
          </header>
          <main>
            <h2>Principles</h2>
            <ul>
              <li>Minimal - Eri feels simple, clean and intuitive.</li>
              <li>Snappy - Eri is fast and feels slick on all devices.</li>
              <li>Accessible - Eri is an experience for everyone.</li>
            </ul>
            <h2>Space</h2>
            <p>
              Space, the final frontier... This is how our journey begins.
              Without space there is nowhere.
            </p>
            <p>
              Most of these values are computed using rems, but for the sake of
              simplicity the values are given in px.
            </p>
            <h3>Font size</h3>
            <p>
              Fonts are sized based on a responsive modular scale which keeps
              things simple and conveys a sense of harmony.
            </p>
            <SpaceGroup>
              <Space varName="--e-font-size-0" />
              <Space varName="--e-font-size-1" />
              <Space varName="--e-font-size-2" />
              <Space varName="--e-font-size-3" />
              <Space varName="--e-font-size-4" />
            </SpaceGroup>
            <h3>Borders</h3>
            <SpaceGroup>
              <Space varName="--e-border-width" />
              <Space varName="--e-border-radius" />
            </SpaceGroup>
            <h3>Space</h3>
            <p>
              Space is also based on a responsive modular scale, but with a
              different ratio.
            </p>
            <SpaceGroup>
              <Space varName="--e-space-0" />
              <Space varName="--e-space-1" />
              <Space varName="--e-space-2" />
              <Space varName="--e-space-3" />
              <Space varName="--e-space-4" />
              <Space varName="--e-space-5" />
            </SpaceGroup>
            <h2>Time</h2>
            <p>Space is fine, but we'll also get nowhere without time.</p>
            <Time varName="--e-time-0" />
            <Time varName="--e-time-1" />
            <h2>Transition</h2>
            <p>
              Now we have space and time we need to define how we're going to
              move through it. Transitions contribute a lot to how movement
              through space-time feels.
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
            <ButtonGroup>
              <Button onClick={this.switchToLightTheme}>Light</Button>
              <Button onClick={this.switchToDarkTheme}>Dark</Button>
            </ButtonGroup>
            <ColorGroup name="Figure">
              <Color varName="--e-color-figure-more" />
              <Color varName="--e-color-figure" />
              <Color varName="--e-color-figure-less" />
            </ColorGroup>
            <ColorGroup name="Balance">
              <Color varName="--e-color-balance-more" />
              <Color varName="--e-color-balance" />
              <Color varName="--e-color-balance-less" />
            </ColorGroup>
            <ColorGroup name="Ground">
              <Color varName="--e-color-ground-more" />
              <Color varName="--e-color-ground" />
            </ColorGroup>
            <ColorGroup name="Accent">
              <Color varName="--e-color-accent-more" />
              <Color varName="--e-color-accent" />
              <Color varName="--e-color-accent-less" />
              <Color varName="--e-color-accent-analagous" />
            </ColorGroup>
            <ColorGroup name="Negative">
              <Color varName="--e-color-negative-more" />
              <Color varName="--e-color-negative" />
              <Color varName="--e-color-negative-less" />
              <Color varName="--e-color-negative-analagous" />
            </ColorGroup>
            <h2>Typography</h2>
            <p>
              No downloaded fonts means no extra page weight. Eri uses system
              fonts and fits into a person's environment.
            </p>
            <h3>Examples</h3>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <h3>Heading 3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <h3>CSS utilities</h3>
            <p e-util="center">
              You can center any element by setting the e-util attribute to
              "center"
            </p>
            <p e-util="center negative">
              You can give any element a negative sentiment by setting the
              e-util attribute to "negative"
            </p>
            <h2>Components</h2>
            <h3>Button</h3>
            <p>
              Buttons are cute little things you press. Remember to always wrap
              them up in a ButtonGroup.
            </p>
            <p>
              This button will only ever be disabled while the app is waiting
              for something to happen and will display a little spinner to let
              the user know it's thinking.
            </p>
            <ButtonGroup>
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <a href="#">Link</a>
            </ButtonGroup>
            <ButtonGroup>
              <Button>Button</Button>
              <Button to="#">Link</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button sentiment="negative">Negative</Button>
              <Button sentiment="negative" variant="secondary">
                Negative secondary
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button disabled>Primary disabled</Button>
              <Button disabled variant="secondary">
                Secondary disabled
              </Button>
            </ButtonGroup>
            <h3>Card</h3>
            <Card>
              <h3>Card one</h3>
              <p>This is card one.</p>
            </Card>
            <Card>
              <h3>Card two</h3>
              <p>This is card two.</p>
            </Card>
            <Card>
              <h3>Card three</h3>
              <p>This is card three.</p>
            </Card>
            <h3>Dialog</h3>
            <ButtonGroup>
              <Button onClick={this.handleDialogOpen}>Open dialog</Button>
            </ButtonGroup>
            <Dialog
              onClose={this.handleDialogClose}
              open={isDialogOpen}
              title="Test dialog"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Dialog>
            <form>
              <h3>Form</h3>
              <p>This is a form.</p>
              <TextField
                label="Text field"
                supportiveText="Some supportive text"
              />
              <TextField error="Oops!" label="Text field error" />
              <RadioGroup label="Radio group">
                <RadioButton name="selector" value="one">
                  One
                </RadioButton>
                <RadioButton name="selector" value="two">
                  Two
                </RadioButton>
                <RadioButton name="selector" value="three">
                  Three
                </RadioButton>
                <RadioButton name="selector" value="four">
                  Four
                </RadioButton>
              </RadioGroup>
              <RadioGroup error="Oops!" label="Radio group error">
                <RadioButton name="error-state-selector" value="one">
                  One
                </RadioButton>
                <RadioButton name="error-state-selector" value="two">
                  Two
                </RadioButton>
                <RadioButton name="error-state-selector" value="three">
                  Three
                </RadioButton>
              </RadioGroup>
              <Select label="Select">
                <option hidden>Please select</option>
                <option>An option</option>
                <option>
                  A very very very very long option to see what happens when the
                  option is super long
                </option>
              </Select>
              <Select error="Oops!" label="Select error">
                <option hidden>Please select</option>
                <option>An option</option>
              </Select>
              <Checkbox label="Checkbox" />
              <Checkbox
                error="Oops!"
                label="Checkbox with a long label so we can see how it overflows"
              />
              <CurrencyField label="Currency field" />
              <CurrencyField integer label="Integer currency field" />
              <CurrencyField error="Oops!" label="Currency field error" />
              <ButtonGroup>
                <Button type="button">Submit</Button>
              </ButtonGroup>
            </form>
            <h3>Icons</h3>
            <Icon name="check" />
            <Icon name="cross" />
            <Icon name="down" />
            <Icon name="left" />
            <Icon name="right" />
            <h3>Link</h3>
            <p>Links take you places.</p>
            <a href="#">Click me!</a>
            <h3>Pagination</h3>
            <p>Renders nothing when there are no pages</p>
            <Pagination onChange={console.log} page={0} pageCount={0} />
            <p>Page {page3 + 1} of 3 pages</p>
            <Pagination
              onChange={this.handlePageChange3}
              page={page3}
              pageCount={3}
            />
            <p>Page {page4 + 1} of 4 pages</p>
            <Pagination
              onChange={this.handlePageChange4}
              page={page4}
              pageCount={4}
            />
            <p>Page {page10 + 1} of 10 pages</p>
            <Pagination
              onChange={this.handlePageChange10}
              page={page10}
              pageCount={10}
            />
            <p>Page {page1000 + 1} of 1000 pages</p>
            <Pagination
              onChange={this.handlePageChange1000}
              page={page1000}
              pageCount={1e3}
            />
            <h3>Spinner</h3>
            <Spinner />
            <Spinner variation="ground" />
            <Spinner variation="page" />
          </main>
        </>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root') as HTMLDivElement)
