import * as React from "react";
import { Chart, Paper } from "../../../src";
import ConfigurableExample, { PropControlString } from "./_ConfigurableExample";
import { RouteComponentProps } from "@reach/router";
import { TPoint } from "../../../src/components/Chart/LineChart/types";

const POINTS_COUNT = 8;
const TRENDLINE_POINTS_COUNT = POINTS_COUNT / 2;

export default function LineChartDocs(_: RouteComponentProps) {
  const labels = Array.from({ length: 5 }, (_, n): [number, string] => [
    n / 4,
    String((n / 4) * 100),
  ]);

  const [props, setProps] = React.useState<{
    data: TPoint[];
    trendlinePoints: TPoint[];
    xAxisTitle?: string;
    yAxisTitle?: string;
  }>({
    data: Array.from({ length: POINTS_COUNT }, (_, n) => [
      n / (POINTS_COUNT - 1),
      Math.random(),
    ]),
    trendlinePoints: Array.from({ length: TRENDLINE_POINTS_COUNT }, (_, n) => [
      n / (TRENDLINE_POINTS_COUNT - 1),
      Math.random() / 2 + 0.25,
    ]),
    xAxisTitle: "X axis title",
    yAxisTitle: "Y axis title",
  });

  return (
    <Paper.Group>
      <Paper>
        <h2>Chart.LineChart</h2>
      </Paper>
      <ConfigurableExample
        example={
          <Chart.LineChart
            domain={[0, 1]}
            range={[0, 1]}
            xAxisTitle={props.xAxisTitle}
            yAxisTitle={props.yAxisTitle}
          >
            <Chart.PlotArea>
              <Chart.Line
                color="var(--e-color-balance-less)"
                data={props.trendlinePoints}
                thickness={2}
              />
              <Chart.Line data={props.data} />
              <Chart.Points data={props.data} />
            </Chart.PlotArea>
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
