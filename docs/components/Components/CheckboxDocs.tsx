import * as React from "react";
import { Checkbox, Paper } from "../../../src";
import ConfigurableExample, {
  PropControlBoolean,
  PropControlString,
} from "./_ConfigurableExample";
import { IProps } from "../../../src/components/Checkbox";
import { RouteComponentProps } from "@reach/router";

export default function CheckboxDocs(_: RouteComponentProps) {
  const [props, setProps] = React.useState<IProps>({
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
