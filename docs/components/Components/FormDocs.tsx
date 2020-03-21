import * as React from 'react'
import {
  Button,
  Checkbox,
  CurrencyField,
  ImageUpload,
  Paper,
  RadioButton,
  Select,
  TextArea,
  TextField,
  Toggle,
} from '../../../src'
import { RouteComponentProps } from '@reach/router'

export default function FormDocs(_: RouteComponentProps) {
  return (
    <Paper.Group>
      <Paper>
        <form noValidate>
          <h2>Form</h2>
          <p>This is a form.</p>
          <TextField label="Text field" supportiveText="Some supportive text" />
          <TextField error="Oops!" label="Text field error" />
          <TextArea label="Text area" supportiveText="Some supportive text" />
          <TextArea error="Oops!" label="Text area error" />
          <RadioButton.Group label="Radio group">
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
          </RadioButton.Group>
          <RadioButton.Group error="Oops!" label="Radio group error">
            <RadioButton name="error-state-selector" value="one">
              One
            </RadioButton>
            <RadioButton name="error-state-selector" value="two">
              Two
            </RadioButton>
            <RadioButton name="error-state-selector" value="three">
              Three
            </RadioButton>
          </RadioButton.Group>
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
          <Button.Group>
            <Button type="button">Submit</Button>
          </Button.Group>
        </form>
      </Paper>
    </Paper.Group>
  )
}
