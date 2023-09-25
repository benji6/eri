import { Chart, Paper, Select } from "../../../src";
import ConfigurableExample, { PropControlString } from "./_ConfigurableExample";
import { POKEMON_NAMES } from "../../constants";
import { TPoint } from "../../../src/components/Chart/LineChart/types";
import { useState } from "react";

const POINTS_COUNT = 8;
const DOMAIN: [number, number] = [0, 10];
const RANGE: [number, number] = [0, 100];
const TRENDLINE_POINTS_COUNT = POINTS_COUNT / 2;

export default function LineChartDocs() {
  const [props, setProps] = useState<{
    data: TPoint[];
    trendlinePoints: TPoint[];
    xAxisTitle?: string;
    yAxisTitle?: string;
  }>({
    data: Array.from({ length: POINTS_COUNT }, (_, n) => [
      (n / (POINTS_COUNT - 1)) * (DOMAIN[1] - DOMAIN[0]) + DOMAIN[0],
      Math.round(Math.random() * (RANGE[1] - RANGE[0]) + RANGE[0]),
    ]),
    trendlinePoints: Array.from({ length: TRENDLINE_POINTS_COUNT }, (_, n) => [
      (n / (TRENDLINE_POINTS_COUNT - 1)) * (DOMAIN[1] - DOMAIN[0]) + DOMAIN[0],
      Math.round((Math.random() / 2 + 0.25) * (RANGE[1] - RANGE[0]) + RANGE[0]),
    ]),
    xAxisTitle: "X axis title",
    yAxisTitle: "Y axis title",
  });
  const [labelType, setLabelType] = useState("default");
  const xAxisLabels =
    labelType === "default" ? undefined : POKEMON_NAMES.slice(0, 5);

  return (
    <Paper.Group>
      <Paper>
        <h2>Chart.LineChart</h2>
      </Paper>
      <ConfigurableExample
        example={
          <Chart.LineChart
            aria-label="Example line chart"
            domain={DOMAIN}
            range={RANGE}
            xAxisLabels={xAxisLabels}
            xAxisTitle={props.xAxisTitle}
            yAxisTitle={props.yAxisTitle}
          >
            <Chart.Line
              color="var(--color-balance-less)"
              data={props.trendlinePoints}
              thickness={2}
            />
            <Chart.Line data={props.data} />
            <Chart.Points data={props.data} />
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
        <Select
          onChange={(e) => setLabelType(e.target.value)}
          label="Axis labels"
          value={labelType}
        >
          <option value="default">Default labels</option>
          <option value="custom-x-axis-labels">Custom X axis labels</option>
        </Select>
      </ConfigurableExample>
    </Paper.Group>
  );
}
