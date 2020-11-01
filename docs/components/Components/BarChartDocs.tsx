import * as React from "react";
import { Chart, Paper } from "../../../src";
import ConfigurableExample, { PropControlString } from "./_ConfigurableExample";
import { IProps } from "../../../src/components/Chart/BarChart";
import { RouteComponentProps } from "@reach/router";

const DATA_COUNT = 8;

export default function BarChartDocs(_: RouteComponentProps) {
  const [props, setProps] = React.useState<
    Pick<IProps, "data" | "xAxisTitle" | "yAxisTitle">
  >({
    data: Array.from({ length: DATA_COUNT }, () => Math.random()),
    xAxisTitle: "X axis title",
    yAxisTitle: "Y axis title",
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
        <h2>Chart.BarChart</h2>
      </Paper>
      <ConfigurableExample
        example={
          <Chart.BarChart
            domain={[0, 1]}
            range={[0, 1]}
            xLabels={xLabels}
            {...props}
          >
            <Chart.YGridLines lines={yLabels.map(([y]) => y)} />
            <Chart.YAxis labels={yLabels} markers={yLabels.map(([x]) => x)} />
          </Chart.BarChart>
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
