import * as React from "react";
import ConfigurableExample, {
  PropControlBoolean,
  PropControlEnum,
} from "./_ConfigurableExample";
import { Paper, Spinner } from "../../../src";
import { IProps } from "../../../src/components/Spinner";
import { RouteComponentProps } from "@reach/router";

export default function SpinnerDocs(_: RouteComponentProps) {
  const [props, setProps] = React.useState<IProps>({
    inline: false,
    margin: undefined,
  });
  const spinnerEl = <Spinner {...props} />;
  return (
    <Paper.Group>
      <Paper>
        <h2>Spinner</h2>
      </Paper>
      <ConfigurableExample
        example={
          props.inline ? (
            <p className="center">
              {props.margin === "right" ? (
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
        <PropControlBoolean name="inline" props={props} setProps={setProps} />
        <PropControlEnum
          name="margin"
          options={[undefined, "left", "right"]}
          props={props}
          setProps={setProps}
        />
      </ConfigurableExample>
    </Paper.Group>
  );
}
