import { Checkbox, Paper } from "../../../src";
import ConfigurableExample, {
  PropControlBoolean,
  PropControlString,
} from "./_ConfigurableExample";
import { IProps } from "../../../src/components/Checkbox";
import { useState } from "react";

export default function CheckboxDocs() {
  const [props, setProps] = useState<IProps>({
    disabled: false,
    error: "",
    label: "Field label",
  });

  return (
    <Paper.Group>
      <Paper>
        <h2>Checkbox</h2>
      </Paper>
      <ConfigurableExample example={<Checkbox {...props} />}>
        <PropControlString name="error" props={props} setProps={setProps} />
        <PropControlString name="label" props={props} setProps={setProps} />
        <PropControlBoolean name="disabled" props={props} setProps={setProps} />
      </ConfigurableExample>
    </Paper.Group>
  );
}
