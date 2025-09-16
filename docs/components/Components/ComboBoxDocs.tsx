import { ComboBox, Paper } from "../../../src";
import ConfigurableExample, {
  PropControlBoolean,
  PropControlString,
} from "./_ConfigurableExample";
import { IProps } from "../../../src/components/ComboBox";
import { POKEMON_NAMES } from "../../constants";
import { useState } from "react";

export default function ComboBoxDocs() {
  const [props, setProps] = useState<IProps>({
    error: "",
    label: "Field label",
    optional: false,
    options: POKEMON_NAMES,
    supportiveText: "Some supportive text",
    stretch: false,
  });

  return (
    <Paper.Group>
      <Paper>
        <h2>ComboBox</h2>
        <p>
          By default the field is marked as required unless you pass the{" "}
          <code>optional</code> prop.
        </p>
      </Paper>
      <ConfigurableExample example={<ComboBox {...props} />}>
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
