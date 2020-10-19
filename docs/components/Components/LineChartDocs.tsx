import * as React from "react";
import ConfigurableExample, { PropControlString } from "./_ConfigurableExample";
import { LineChart, Paper } from "../../../src";
import { IProps } from "../../../src/components/LineChart";
import { RouteComponentProps } from "@reach/router";

export default function LineChartDocs(_: RouteComponentProps) {
  const labels = Array.from({ length: 5 }, (_, n): [number, string] => [
    n / 4,
    String((n / 4) * 100),
  ]);

  const [props, setProps] = React.useState<
    Pick<IProps, "data" | "trendlinePoints" | "xAxisLabel" | "yAxisLabel">
  >({
    data: Array.from({ length: 8 }, (_, n) => [n / 7, Math.random()]),
    trendlinePoints: Array.from({ length: 4 }, (_, n) => [
      n / 3,
      Math.random() / 2 + 0.25,
    ]),
    xAxisLabel: "X axis label",
    yAxisLabel: "Y axis label",
  });

  return (
    <Paper.Group>
      <Paper>
        <h2>Chart</h2>
      </Paper>
      <ConfigurableExample
        example={
          <LineChart
            domain={[0, 1]}
            range={[0, 1]}
            xLabels={labels}
            yLabels={labels}
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