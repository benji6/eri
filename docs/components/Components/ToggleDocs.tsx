import ConfigurableExample, {
  PropControlBoolean,
  PropControlString,
} from "./_ConfigurableExample";
import { Paper, Toggle } from "../../../src";
import { IProps } from "../../../src/components/Toggle";
import { useState } from "react";

export default function ToggleDocs() {
  const [props, setProps] = useState<IProps>({
    disabled: false,
    error: "",
    label: "Field label",
  });

  return (
    <Paper.Group>
      <Paper>
        <h2>Toggle</h2>
      </Paper>
      <ConfigurableExample example={<Toggle {...props} />}>
        <PropControlString name="error" props={props} setProps={setProps} />
        <PropControlString name="label" props={props} setProps={setProps} />
        <PropControlBoolean name="disabled" props={props} setProps={setProps} />
      </ConfigurableExample>
    </Paper.Group>
  );
}
