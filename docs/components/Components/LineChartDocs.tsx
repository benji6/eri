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
  const [demoProps, setDemoProps] = useState<{
    pointColor: string | undefined;
    data: TPoint[];
    trendlinePoints: TPoint[];
    xAxisTitle?: string;
    yAxisTitle?: string;
  }>({
    data: Array.from({ length: POINTS_COUNT }, (_, n) => [
      (n / (POINTS_COUNT - 1)) * (DOMAIN[1] - DOMAIN[0]) + DOMAIN[0],
      // eslint-disable-next-line react-hooks/purity
      Math.round(Math.random() * (RANGE[1] - RANGE[0]) + RANGE[0]),
    ]),
    pointColor: undefined,
    trendlinePoints: Array.from({ length: TRENDLINE_POINTS_COUNT }, (_, n) => [
      (n / (TRENDLINE_POINTS_COUNT - 1)) * (DOMAIN[1] - DOMAIN[0]) + DOMAIN[0],
      // eslint-disable-next-line react-hooks/purity
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
            centerXAxisLabels={labelType === "centered-x-axis-labels"}
            domain={DOMAIN}
            points={demoProps.data.map(([x, y]) => ({
              color: demoProps.pointColor,
              x,
              y,
            }))}
            range={RANGE}
            xAxisLabels={xAxisLabels}
            xAxisTitle={demoProps.xAxisTitle}
            yAxisTitle={demoProps.yAxisTitle}
          >
            <Chart.Line
              color="var(--color-balance)"
              data={demoProps.trendlinePoints}
              thickness={2}
            />
            <Chart.Line data={demoProps.data} />
          </Chart.LineChart>
        }
      >
        <PropControlString
          name="xAxisTitle"
          props={demoProps}
          setProps={setDemoProps}
        />
        <PropControlString
          name="yAxisTitle"
          props={demoProps}
          setProps={setDemoProps}
        />
        <Select
          onChange={(e) => setLabelType(e.target.value)}
          label="Axis labels"
          value={labelType}
        >
          <option value="default">Default labels</option>
          <option value="custom-x-axis-labels">Custom X axis labels</option>
          <option value="centered-x-axis-labels">
            Centered custom X axis labels
          </option>
        </Select>
        <PropControlString
          name="pointColor"
          props={demoProps}
          setProps={setDemoProps}
        />
      </ConfigurableExample>
    </Paper.Group>
  );
}
