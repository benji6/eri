import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
  Button,
  ButtonGroup,
  Card,
  CardGroup,
  Checkbox,
  CurrencyField,
  Dialog,
  Fab,
  getCssVar,
  Header,
  Icon,
  ImageUpload,
  Menu,
  MenuButton,
  Pagination,
  RadioButton,
  RadioButtonGroup,
  Select,
  Spinner,
  SubHeading,
  TextArea,
  TextField,
  Toggle,
} from '../src'
import Color from './components/Color'
import ColorGroup from './components/ColorGroup'
import Easing from './components/Easing'
import Space from './components/Space'
import SpaceGroup from './components/SpaceGroup'
import Time from './components/Time'
import TimeGroup from './components/TimeGroup'
import './style.css'

const metaThemeColor = document.querySelector('meta[name=theme-color]')

function App() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false)
  const [isFabVisible, setIsFabVisible] = React.useState(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isLightThemeOn, setIsLightThemeOn] = React.useState(true)
  const [page3, setPage3] = React.useState(0)
  const [page4, setPage4] = React.useState(0)
  const [page10, setPage10] = React.useState(4)

  const handleDialogClose = () => setIsDialogOpen(false)
  const handleDialogOpen = () => setIsDialogOpen(true)
  const handleMenuClose = () => setIsMenuOpen(false)
  const handleMenuOpen = () => setIsMenuOpen(true)
  const handlePageChange3 = (page: number) => setPage3(page)
  const handlePageChange4 = (page: number) => setPage4(page)
  const handlePageChange10 = (page: number) => setPage10(page)

  const toggleTheme = () => {
    if (isLightThemeOn) document.documentElement.classList.add('e-theme-dark')
    else document.documentElement.classList.remove('e-theme-dark')

    metaThemeColor.setAttribute('content', getCssVar('--e-color-accent-more'))
    setIsLightThemeOn(!isLightThemeOn)
  }

  return (
    <React.StrictMode>
      <Header>
        <h1>
          <a href="/">Eri</a>
        </h1>
        <MenuButton onClick={handleMenuOpen} />
      </Header>
      <Menu onClose={handleMenuClose} open={isMenuOpen}>
        <p>
          <a onClick={handleMenuClose} href="#">
            Home
          </a>
        </p>
        <p>
          <a onClick={handleMenuClose} href="#">
            Example link
          </a>
        </p>
        <p>
          <a onClick={handleMenuClose} href="#">
            Another example link
          </a>
        </p>
      </Menu>
      <main>
        <h2>Principles</h2>
        <ul>
          <li>🧘‍♀️ Simple - Eri is minimal and feels clean and intuitive.</li>
          <li>
            🚀 Lightweight - Eri is performance focussed and will not bloat or
            slow down your app. Components are lightweight and tree-shaking is
            supported out the box.
          </li>
          <li>☺️ Joyful - Eri is simple and should feel good to use.</li>
        </ul>
        <h2>Space</h2>
        <p>
          Space, the final frontier... This is how our journey begins. Without
          space there is nowhere.
        </p>
        <h3>Font size</h3>
        <p>
          Fonts are sized based on a fluid modular scale which keeps things
          simple and conveys a sense of harmony. You can modify the base size by
          changing the <code>--e-font-size-0-min</code> custom property.
        </p>
        <SpaceGroup>
          <Space varName="--e-font-size-0" />
          <Space varName="--e-font-size-1" />
          <Space varName="--e-font-size-2" />
          <Space varName="--e-font-size-3" />
          <Space varName="--e-font-size-4" />
        </SpaceGroup>
        <h3>Space</h3>
        <p>
          Space is based on a responsive modular scale and linked to font-size
          and line-height.
        </p>
        <SpaceGroup>
          <Space varName="--e-space-0" />
          <Space varName="--e-space-1" />
          <Space varName="--e-space-2" />
          <Space varName="--e-space-3" />
          <Space varName="--e-space-4" />
          <Space varName="--e-space-5" />
        </SpaceGroup>
        <h2>Border</h2>
        <p>
          Borders define the boundary between inside and outside. Border radius
          is responsive and linked to space, but border width is fixed.
        </p>
        <h3>Border radius</h3>
        <SpaceGroup>
          <Space varName="--e-border-radius-0" />
          <Space varName="--e-border-radius-1" />
        </SpaceGroup>
        <h3>Border width</h3>
        <SpaceGroup>
          <Space varName="--e-border-width-0" />
          <Space varName="--e-border-width-1" />
        </SpaceGroup>
        <h2>Time</h2>
        <p>
          Time is responsive, things take more time on larger screens so
          velocity feels more constant.
        </p>
        <TimeGroup>
          <Time varName="--e-time-0" />
          <Time varName="--e-time-1" />
          <Time varName="--e-time-2" />
        </TimeGroup>
        <h2>Easing</h2>
        <p>
          Now we have space and time we need to define how we're going to move
          through it. Easings define how movement through space-time feels.
        </p>
        <TimeGroup>
          <Easing varName="--e-easing-accelerate" />
          <Easing varName="--e-easing-decelerate" />
          <Easing varName="--e-easing-standard" />
        </TimeGroup>
        <h2>Animation</h2>
        <p>Here are the custom properties you can use for animation:</p>
        <ul>
          <li>
            <code>--e-animation-fade-in</code>
          </li>
          <li>
            <code>--e-animation-spin</code>
          </li>
        </ul>
        <h2>Color</h2>
        <p>
          &quot;Black then white are all I see In my infancy. Red and yellow
          then came to be, Reaching out to me, Lets me see.&quot; - Tool
        </p>
        <h3>Light &amp; dark</h3>
        <p>
          For the dark theme just add the class <code>e-theme-dark</code>.
        </p>
        <Toggle
          checked={isLightThemeOn}
          label={isLightThemeOn ? 'Light theme on' : 'Dark theme on'}
          onChange={toggleTheme}
        />
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
          <Color varName="--e-color-ground-less" />
        </ColorGroup>
        <ColorGroup
          description="Useful for web app manifest or theme_color meta tag"
          name="Theme"
        >
          <Color varName="--e-color-theme" />
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
        <ColorGroup name="Positive">
          <Color varName="--e-color-positive" />
          <Color varName="--e-color-positive-less" />
        </ColorGroup>
        <ColorGroup name="Highlight">
          <Color varName="--e-color-highlight-0" />
          <Color varName="--e-color-highlight-1" />
          <Color varName="--e-color-highlight-2" />
          <Color varName="--e-color-highlight-3" />
          <Color varName="--e-color-highlight-4" />
          <Color varName="--e-color-highlight-5" />
        </ColorGroup>
        <h2>Typography</h2>
        <p>
          No downloaded fonts means no extra page weight. Eri uses system fonts
          and fits into a person's environment.
        </p>
        <h3>Examples</h3>
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
        <h2>Components</h2>
        <h3>Button</h3>
        <p>
          Buttons are cute little things you press. Remember to always wrap them
          up in a ButtonGroup.
        </p>
        <p>
          This button will only ever be disabled while the app is waiting for
          something to happen and will display a little spinner to let the user
          know it's thinking.
        </p>
        <ButtonGroup>
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <a href="#">Link</a>
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
        <p>Wrap your Cards in a CardGroup.</p>
        <CardGroup>
          <Card onClick={() => undefined}>
            <h3>Card one</h3>
            <p>This is card one.</p>
            <p>A card can also be a button like this one.</p>
          </Card>
          <Card onClick={() => undefined}>
            <h3>Card two</h3>
            <p>This is card two.</p>
            <p>A card can also be a button like this one.</p>
          </Card>
          <Card onClick={() => undefined}>
            <h3>Card three</h3>
            <p>This is card three.</p>
            <p>A card can also be a button like this one.</p>
          </Card>
          <Card onClick={() => undefined}>
            <h3>Card four</h3>
            <p>This is card four.</p>
            <p>A card can also be a button like this one.</p>
          </Card>
          <Card onClick={() => undefined}>
            <h3>Card five</h3>
            <p>This is card five.</p>
            <p>A card can also be a button like this one.</p>
          </Card>
          <Card onClick={() => undefined}>
            <h3>Card six</h3>
            <p>This is card six.</p>
            <p>A card can also be a button like this one.</p>
          </Card>
          <Card>
            <h3>Card seven</h3>
            <p>This is card seven.</p>
          </Card>
          <Card>
            <h3>Card eight</h3>
            <p>This is card eight.</p>
          </Card>
          <Card>
            <h3>Card nine</h3>
            <p>This is card nine.</p>
          </Card>
          <Card>
            <h3>Card ten</h3>
            <p>This is card ten.</p>
          </Card>
          <Card>
            <h3>Card eleven</h3>
            <p>This is card eleven.</p>
          </Card>
          <Card>
            <h3>Card twelve</h3>
            <p>This is card twelve.</p>
          </Card>
        </CardGroup>
        <h3>Dialog</h3>
        <ButtonGroup>
          <Button onClick={handleDialogOpen}>Open dialog</Button>
        </ButtonGroup>
        <Dialog
          onClose={handleDialogClose}
          open={isDialogOpen}
          title="Test dialog"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Dialog>
        <h3>Fab</h3>
        <p>The floating action button.</p>
        <Toggle
          checked={isFabVisible}
          label={isFabVisible ? 'Fab visible' : 'Fab hidden'}
          onChange={({ target }) =>
            target.checked ? setIsFabVisible(true) : setIsFabVisible(false)
          }
        />
        <Fab aria-label="example FAB" hide={!isFabVisible}>
          <Icon name="plus" size="4" />
        </Fab>
        <h3>Hr</h3>
        <hr />
        <form noValidate>
          <h3>Form</h3>
          <p>This is a form.</p>
          <TextField label="Text field" supportiveText="Some supportive text" />
          <TextField error="Oops!" label="Text field error" />
          <TextArea label="Text area" supportiveText="Some supportive text" />
          <TextArea error="Oops!" label="Text area error" />
          <RadioButtonGroup label="Radio group">
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
          </RadioButtonGroup>
          <RadioButtonGroup error="Oops!" label="Radio group error">
            <RadioButton name="error-state-selector" value="one">
              One
            </RadioButton>
            <RadioButton name="error-state-selector" value="two">
              Two
            </RadioButton>
            <RadioButton name="error-state-selector" value="three">
              Three
            </RadioButton>
          </RadioButtonGroup>
          <Select label="Select" supportiveText="Some supportive text">
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
          <fieldset>
            <legend>Fieldset and legend</legend>
            <Checkbox label="Checkbox" />
            <Checkbox
              error="Oops!"
              label="Checkbox with a long label so we can see how it overflows"
            />
            <Toggle label="Toggle" />
            <Toggle label="Toggle with a long label so we can see how it overflows" />
          </fieldset>
          <CurrencyField label="Currency field" />
          <CurrencyField integer label="Integer currency field" />
          <CurrencyField error="Oops!" label="Currency field error" />
          <ImageUpload label="Image upload" />
          <ImageUpload error="Oops!" label="Image upload error" />
          <ButtonGroup>
            <Button type="button">Submit</Button>
          </ButtonGroup>
        </form>
        <h3>Icons</h3>
        <p>
          ❤️ <a href="https://feathericons.com/">Feather</a>
        </p>
        <Icon name="check" />
        <Icon name="cross" />
        <Icon name="down" />
        <Icon name="left" />
        <Icon name="menu" />
        <Icon name="plus" />
        <Icon name="right" />
        <Icon name="save" />
        <h3>Link</h3>
        <p>Links take you places.</p>
        <a href="#">Click me!</a>
        <h3>Pagination</h3>
        <p>Renders nothing when there are no pages</p>
        <Pagination
          onChange={() => {
            // empty
          }}
          page={0}
          pageCount={0}
        />
        <p>Page {page3 + 1} of 3 pages</p>
        <Pagination onChange={handlePageChange3} page={page3} pageCount={3} />
        <p>Page {page4 + 1} of 4 pages</p>
        <Pagination onChange={handlePageChange4} page={page4} pageCount={4} />
        <p>Page {page10 + 1} of 10 pages</p>
        <Pagination
          onChange={handlePageChange10}
          page={page10}
          pageCount={10}
        />
        <h3>Spinner</h3>
        <Spinner />
        <Spinner variant="page" />
      </main>
    </React.StrictMode>
  )
}

ReactDOM.render(<App />, document.getElementById('root') as HTMLDivElement)
