import { Checkbox, Paper, RadioButton } from "../../../src";
import ConfigurableExample, {
  PropControlBoolean,
  PropControlString,
} from "./_ConfigurableExample";
import { IProps } from "../../../src/components/RadioButton/RadioButtonGroup";
import { useState } from "react";

export default function RadioButtonDocs() {
  const [useColorProperty, setUseColorProperty] = useState(false);
  const [props, setProps] = useState<Omit<IProps, "children">>({
    disabled: false,
    error: "",
    label: "Field label",
  });

  return (
    <Paper.Group>
      <Paper>
        <h2>RadioButton</h2>
      </Paper>
      <ConfigurableExample
        example={
          <RadioButton.Group {...props}>
            <RadioButton
              color={useColorProperty ? "red" : undefined}
              name="selector"
              value="one"
            >
              {useColorProperty ? "Red" : "One"}
            </RadioButton>
            <RadioButton
              color={useColorProperty ? "blue" : undefined}
              name="selector"
              value="two"
            >
              {useColorProperty ? "Blue" : "Two"}
            </RadioButton>
            <RadioButton
              color={useColorProperty ? "green" : undefined}
              name="selector"
              value="three"
            >
              {useColorProperty ? "Green" : "Three"}
            </RadioButton>
            <RadioButton
              color={useColorProperty ? "orange" : undefined}
              name="selector"
              value="four"
            >
              {useColorProperty ? "Orange" : "Four"}
            </RadioButton>
          </RadioButton.Group>
        }
      >
        <Checkbox
          checked={useColorProperty}
          label="Use color property"
          onChange={() => setUseColorProperty(!useColorProperty)}
        />
        <PropControlBoolean name="disabled" props={props} setProps={setProps} />
        <PropControlString name="error" props={props} setProps={setProps} />
        <PropControlString name="label" props={props} setProps={setProps} />
      </ConfigurableExample>
    </Paper.Group>
  );
}
