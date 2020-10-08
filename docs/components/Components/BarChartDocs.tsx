import * as React from "react";
import { BarChart, Paper } from "../../../src";
import ConfigurableExample, { PropControlString } from "./_ConfigurableExample";
import { IProps } from "../../../src/components/BarChart";
import { RouteComponentProps } from "@reach/router";

const DATA_COUNT = 8;

export default function BarChartDocs(_: RouteComponentProps) {
  const [props, setProps] = React.useState<
    Pick<IProps, "data" | "xAxisLabel" | "yAxisLabel">
  >({
    data: Array.from({ length: DATA_COUNT }, () => Math.random()),
    xAxisLabel: "X axis label",
    yAxisLabel: "Y axis label",
  });

  const xLabels = Array.from({ length: DATA_COUNT }, (_, n): string =>
    String(n)
  );
  const yLabels = Array.from({ length: 5 }, (_, n): [number, string] => [
    n / 4,
    String((n / 4) * 100),
  ]);

  return (
    <Paper.Group>
      <Paper>
        <h2>BarChart</h2>
      </Paper>
      <ConfigurableExample
        example={
          <BarChart
            domain={[0, 1]}
            range={[0, 1]}
            xLabels={xLabels}
            yLabels={yLabels}
            {...props}
          />
        }
      >
        <PropControlString
          name="xAxisLabel"
          props={props}
          setProps={setProps}
        />
        <PropControlString
          name="yAxisLabel"
          props={props}
          setProps={setProps}
        />
      </ConfigurableExample>
    </Paper.Group>
  );
}
