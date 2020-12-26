import * as React from "react";
import ConfigurableExample, {
  PropControlBoolean,
  PropControlString,
} from "./_ConfigurableExample";
import { CurrencyField, Paper } from "../../../src";
import { IProps } from "../../../src/components/CurrencyField";
import { RouteComponentProps } from "@reach/router";

export default function CurrencyFieldDocs(_: RouteComponentProps) {
  const [props, setProps] = React.useState<IProps>({
    error: "",
    integer: false,
    label: "Field label",
    optional: false,
    supportiveText: "Some supportive text",
  });

  return (
    <Paper.Group>
      <Paper>
        <h2>CurrencyField</h2>
        <p>
          By default the field is marked as required unless you pass the{" "}
          <code>optional</code> prop. The <code>integer</code> prop configures
          the input mode for mobile devices.
        </p>
      </Paper>
      <ConfigurableExample example={<CurrencyField {...props} />}>
        <PropControlString name="error" props={props} setProps={setProps} />
        <PropControlBoolean name="integer" props={props} setProps={setProps} />
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
