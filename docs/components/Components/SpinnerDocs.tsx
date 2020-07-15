import * as React from "react";
import ConfigurableExample, {
  PropControlBoolean,
} from "./_ConfigurableExample";
import { Paper, Spinner } from "../../../src";
import { IProps } from "../../../src/components/Spinner";
import { RouteComponentProps } from "@reach/router";

export default function SpinnerDocs(_: RouteComponentProps) {
  const [exampleProps, setExampleProps] = React.useState<IProps>({
    inline: false,
  });
  const spinnerEl = <Spinner {...exampleProps} />;
  return (
    <Paper.Group>
      <Paper>
        <h2>Spinner</h2>
      </Paper>
      <ConfigurableExample
        example={
          exampleProps.inline ? (
            <p className="center">An inline example {spinnerEl}</p>
          ) : (
            spinnerEl
          )
        }
      >
        <PropControlBoolean
          name="inline"
          props={exampleProps}
          setProps={setExampleProps}
        />
      </ConfigurableExample>
    </Paper.Group>
  );
}
