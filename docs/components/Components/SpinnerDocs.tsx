import ConfigurableExample, {
  PropControlBoolean,
  PropControlEnum,
} from "./_ConfigurableExample";
import { Paper, Spinner } from "../../../src";
import { IProps } from "../../../src/components/Spinner";
import { useState } from "react";

export default function SpinnerDocs() {
  const [demoProps, setDemoProps] = useState<IProps>({
    inline: false,
    margin: undefined,
  });
  const spinnerEl = <Spinner {...demoProps} />;
  return (
    <Paper.Group>
      <Paper>
        <h2>Spinner</h2>
      </Paper>
      <ConfigurableExample
        example={
          demoProps.inline ? (
            <p className="center">
              {demoProps.margin === "end" ? (
                <>{spinnerEl}An inline example</>
              ) : (
                <>An inline example{spinnerEl}</>
              )}
            </p>
          ) : (
            spinnerEl
          )
        }
      >
        <PropControlBoolean
          name="inline"
          props={demoProps}
          setProps={setDemoProps}
        />
        <PropControlEnum
          name="margin"
          options={[undefined, "start", "end"]}
          props={demoProps}
          setProps={setDemoProps}
        />
      </ConfigurableExample>
    </Paper.Group>
  );
}
