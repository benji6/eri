import * as React from "react";
import { ComboBox, Paper } from "../../../src";
import ConfigurableExample, {
  PropControlBoolean,
  PropControlString,
} from "./_ConfigurableExample";
import { IProps } from "../../../src/components/ComboBox";
import { POKEMON_NAMES } from "../../constants";
import { RouteComponentProps } from "@reach/router";

export default function ComboBoxDocs(_: RouteComponentProps) {
  const [props, setProps] = React.useState<IProps>({
    error: "",
    label: "Field label",
    optional: false,
    options: POKEMON_NAMES,
    supportiveText: "Some supportive text",
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
        <PropControlString
          name="supportiveText"
          props={props}
          setProps={setProps}
        />
      </ConfigurableExample>
    </Paper.Group>
  );
}
