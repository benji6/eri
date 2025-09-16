import ConfigurableExample, {
  PropControlBoolean,
  PropControlString,
} from "./_ConfigurableExample";
import { Paper, TextField } from "../../../src";
import { IProps } from "../../../src/components/TextField";
import { useState } from "react";

export default function TextFieldDocs() {
  const [props, setProps] = useState<IProps>({
    error: "",
    label: "Field label",
    optional: false,
    stretch: false,
    supportiveText: "Some supportive text",
  });

  return (
    <Paper.Group>
      <Paper>
        <h2>TextField</h2>
        <p>
          By default the field is marked as required unless you pass the{" "}
          <code>optional</code> prop.
        </p>
      </Paper>
      <ConfigurableExample example={<TextField {...props} />}>
        <PropControlString name="error" props={props} setProps={setProps} />
        <PropControlString name="label" props={props} setProps={setProps} />
        <PropControlBoolean name="optional" props={props} setProps={setProps} />
        <PropControlBoolean name="stretch" props={props} setProps={setProps} />
        <PropControlString
          name="supportiveText"
          props={props}
          setProps={setProps}
        />
      </ConfigurableExample>
    </Paper.Group>
  );
}
