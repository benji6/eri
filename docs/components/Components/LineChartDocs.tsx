import * as React from "react";
import { Chart, Paper } from "../../../src";
import ConfigurableExample, { PropControlString } from "./_ConfigurableExample";
import { IProps } from "../../../src/components/Chart/LineChart";
import { RouteComponentProps } from "@reach/router";

export default function LineChartDocs(_: RouteComponentProps) {
  const labels = Array.from({ length: 5 }, (_, n): [number, string] => [
    n / 4,
    String((n / 4) * 100),
  ]);

  const [props, setProps] = React.useState<
    Pick<IProps, "data" | "trendlinePoints" | "xAxisTitle" | "yAxisTitle">
  >({
    data: Array.from({ length: 8 }, (_, n) => [n / 7, Math.random()]),
    trendlinePoints: Array.from({ length: 4 }, (_, n) => [
      n / 3,
      Math.random() / 2 + 0.25,
    ]),
    xAxisTitle: "X axis title",
    yAxisTitle: "Y axis title",
  });

  return (
    <Paper.Group>
      <Paper>
        <h2>Chart</h2>
      </Paper>
      <ConfigurableExample
        example={
          <Chart.LineChart domain={[0, 1]} range={[0, 1]} {...props}>
            <Chart.XGridLines lines={labels.map(([x]) => x)} />
            <Chart.YGridLines lines={labels.map(([y]) => y)} />
            <Chart.XAxis labels={labels} markers={labels.map(([x]) => x)} />
            <Chart.YAxis labels={labels} markers={labels.map(([x]) => x)} />
          </Chart.LineChart>
        }
      >
        <PropControlString
          name="xAxisTitle"
          props={props}
          setProps={setProps}
        />
        <PropControlString
          name="yAxisTitle"
          props={props}
          setProps={setProps}
        />
      </ConfigurableExample>
    </Paper.Group>
  );
}
