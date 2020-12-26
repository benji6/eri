import * as React from "react";
import ConfigurableExample, {
  PropControlBoolean,
  PropControlString,
} from "./_ConfigurableExample";
import { Paper, Select } from "../../../src";
import { IProps } from "../../../src/components/Select";
import { RouteComponentProps } from "@reach/router";

export default function SelectDocs(_: RouteComponentProps) {
  const [props, setProps] = React.useState<IProps>({
    error: "",
    label: "Field label",
    optional: false,
    supportiveText: "Some supportive text",
  });

  return (
    <Paper.Group>
      <Paper>
        <h2>Select</h2>
        <p>
          By default the field is marked as required unless you pass the{" "}
          <code>optional</code> prop.
        </p>
      </Paper>
      <ConfigurableExample
        example={
          <Select {...props}>
            <option hidden>Please select</option>
            <option>An option</option>
            <option>
              A very very very long option to see what happens when the option
              is very very very long
            </option>
          </Select>
        }
      >
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
