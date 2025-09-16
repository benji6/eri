import ConfigurableExample, {
  PropControlBoolean,
  PropControlString,
} from "./_ConfigurableExample";
import { Paper, Select } from "../../../src";
import { IProps } from "../../../src/components/Select";
import { useState } from "react";

export default function SelectDocs() {
  const [props, setProps] = useState<
    IProps & { includeVeryLongOption: boolean; width: string }
  >({
    error: "",
    includeVeryLongOption: false,
    label: "Field label",
    optional: false,
    stretch: false,
    supportiveText: "Some supportive text",
    width: "",
  });

  // eslint-disable-next-line react/prop-types
  const { includeVeryLongOption, width, ...rest } = props;

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
          <Select {...rest} style={{ width: width || undefined }}>
            <option hidden>Please select</option>
            <option>An option</option>
            <option>Another option</option>
            {includeVeryLongOption && (
              <option>
                A very very very long option to see what happens when the option
                is very very very long
              </option>
            )}
          </Select>
        }
      >
        <PropControlString name="error" props={props} setProps={setProps} />
        <PropControlBoolean
          name="includeVeryLongOption"
          props={props}
          setProps={setProps}
        />
        <PropControlString name="label" props={props} setProps={setProps} />
        <PropControlBoolean name="optional" props={props} setProps={setProps} />
        <PropControlBoolean name="stretch" props={props} setProps={setProps} />
        <PropControlString
          name="supportiveText"
          props={props}
          setProps={setProps}
        />
        <PropControlString name="width" props={props} setProps={setProps} />
      </ConfigurableExample>
    </Paper.Group>
  );
}
