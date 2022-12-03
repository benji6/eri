import ConfigurableExample, {
  PropControlBoolean,
  PropControlString,
} from "./_ConfigurableExample";
import { Paper, RadioButton } from "../../../src";
import { IProps } from "../../../src/components/RadioButton/RadioButtonGroup";
import { useState } from "react";

export default function RadioButtonDocs() {
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
        }
      >
        <PropControlBoolean name="disabled" props={props} setProps={setProps} />
        <PropControlString name="error" props={props} setProps={setProps} />
        <PropControlString name="label" props={props} setProps={setProps} />
      </ConfigurableExample>
    </Paper.Group>
  );
}
