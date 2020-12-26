import * as React from "react";
import ConfigurableExample, {
  PropControlBoolean,
  PropControlString,
} from "./_ConfigurableExample";
import { ImageUpload, Paper } from "../../../src";
import { IProps } from "../../../src/components/ImageUpload";
import { RouteComponentProps } from "@reach/router";

export default function ImageUploadDocs(_: RouteComponentProps) {
  const [props, setProps] = React.useState<IProps>({
    error: "",
    label: "Field label",
    optional: false,
    supportiveText: "Some supportive text",
  });

  return (
    <Paper.Group>
      <Paper>
        <h2>ImageUpload</h2>
        <p>
          By default the field is marked as required unless you pass the{" "}
          <code>optional</code> prop.
        </p>
      </Paper>
      <ConfigurableExample example={<ImageUpload {...props} />}>
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
