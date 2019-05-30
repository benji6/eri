import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import {
  Button,
  ButtonGroup,
  Card,
  CardGroup,
  Checkbox,
  CurrencyField,
  Dialog,
  Fab,
  Icon,
  ImageUpload,
  Pagination,
  RadioButton,
  RadioButtonGroup,
  Select,
  Spinner,
  TextArea,
  TextField,
  Toggle,
} from '../../../src'

export default function Components(_: RouteComponentProps) {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false)
  const [isFabVisible, setIsFabVisible] = React.useState(false)
  const [page3, setPage3] = React.useState(0)
  const [page4, setPage4] = React.useState(0)
  const [page10, setPage10] = React.useState(4)

  const handleDialogClose = () => setIsDialogOpen(false)
  const handleDialogOpen = () => setIsDialogOpen(true)
  const handlePageChange3 = (page: number) => setPage3(page)
  const handlePageChange4 = (page: number) => setPage4(page)
  const handlePageChange10 = (page: number) => setPage10(page)

  return (
    <>
      <h2>Components</h2>
      <h3>Button</h3>
      <p>
        Buttons are cute little things you press. Remember to always wrap them
        up in a ButtonGroup.
      </p>
      <p>
        This button should only ever be disabled while the app is waiting for
        something to happen.
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
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
      <Pagination onChange={handlePageChange10} page={page10} pageCount={10} />
      <h3>Spinner</h3>
      <Spinner />
    </>
  )
}
