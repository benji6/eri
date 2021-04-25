import * as React from "react";
import { Chart, Paper } from "../../../src";
import ConfigurableExample, {
  PropControlBoolean,
  PropControlString,
} from "./_ConfigurableExample";
import { RouteComponentProps } from "@reach/router";

const DATA_COUNT = 8;
const RANGE: [number, number] = [0, 10];

export default function BarChartDocs(_: RouteComponentProps) {
  const [props, setProps] = React.useState<{
    data: (number | undefined)[];
    onClick: boolean;
    xAxisTitle?: string;
    yAxisTitle?: string;
  }>({
    data: Array.from({ length: DATA_COUNT }, () =>
      Math.random() < 1 / DATA_COUNT
        ? undefined
        : Math.random() * (RANGE[1] - RANGE[0]) + RANGE[0]
    ),
    onClick: false,
    xAxisTitle: "X axis title",
    yAxisTitle: "Y axis title",
  });

  const xLabels = Array.from({ length: DATA_COUNT }, (_, n): string =>
    String(n)
  );
  const yLabels = Array.from({ length: 5 }, (_, n): [number, string] => {
    const y = (n / 4) * (RANGE[1] - RANGE[0]) + RANGE[0];
    return [y, String(y)];
  });

  return (
    <Paper.Group>
      <Paper>
        <h2>Chart.BarChart</h2>
      </Paper>
      <ConfigurableExample
        example={
          <Chart.BarChart
            aria-label="Example bar chart"
            range={RANGE}
            xAxisTitle={props.xAxisTitle}
            xLabels={xLabels}
            yAxisTitle={props.yAxisTitle}
          >
            <Chart.YGridLines lines={yLabels.map(([y]) => y)} />
            <Chart.PlotArea>
              <Chart.Bars
                data={props.data}
                onClick={
                  props.onClick ? (x, y) => console.log(x, y) : undefined
                }
              />
            </Chart.PlotArea>
            <Chart.YAxis labels={yLabels} markers={yLabels.map(([x]) => x)} />
          </Chart.BarChart>
        }
      >
        <PropControlBoolean name="onClick" props={props} setProps={setProps} />
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
