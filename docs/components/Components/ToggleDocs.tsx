import * as React from "react";
import ConfigurableExample, {
  PropControlBoolean,
  PropControlString,
} from "./_ConfigurableExample";
import { Paper, Toggle } from "../../../src";
import { IProps } from "../../../src/components/Toggle";
import { RouteComponentProps } from "@reach/router";

export default function ToggleDocs(_: RouteComponentProps) {
  const [props, setProps] = React.useState<IProps>({
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
        {/* <PropControlString
          name="supportiveText"
          props={props}
          setProps={setProps}
        /> */}
      </ConfigurableExample>
    </Paper.Group>
  );
}
