import "./style.css";
import * as React from "react";
import {
  CHART_ASPECT_RATIO,
  MARGIN_RIGHT,
  MARGIN_TOP,
} from "../../privateComponents/Chart/constants";
import Chart from "../../privateComponents/Chart";
import PlotArea from "./PlotArea";
import { TLabel } from "../../privateComponents/Chart/types";

export interface IProps {
  colorFromX?(x: number): string;
  colorFromY?(y: number): string;
  data: number[];
  domain: [number, number];
  range: [number, number];
  xAxisLabel?: string;
  xLabels: string[];
  yAxisLabel?: string;
  yLabels: TLabel[];
}

export default function BarChart({
  colorFromX,
  colorFromY,
  data,
  domain,
  range,
  xAxisLabel,
  xLabels,
  yAxisLabel,
  yLabels,
}: IProps) {
  if (xLabels.length && xLabels.length !== data.length)
    throw Error("`xLabels.length` !== `data.length`");

  if (colorFromX && colorFromY)
    throw Error(
      "Both `colorFromX` and `colorFromY` were provided - please only provide one"
    );

  const marginBottom = xAxisLabel ? 0.175 : 0.125;
  const marginLeft = yAxisLabel ? 0.175 : 0.125;
  const plotHeight = 1 - marginBottom - MARGIN_TOP;
  const plotWidth = CHART_ASPECT_RATIO - marginLeft - MARGIN_RIGHT;
  const plotAspectRatio = plotWidth / plotHeight;

  return (
    <Chart
      range={range}
      xAxisLabel={xAxisLabel}
      yAxisLabel={yAxisLabel}
      yLabels={yLabels}
    >
      <Chart.XLabels
        domain={domain}
        xAxisLabel={xAxisLabel}
        xLabels={xLabels.map((labelText, i) => [
          ((i + 0.5) / xLabels.length) * (domain[1] - domain[0]) + domain[0],
          labelText,
        ])}
        yAxisLabel={yAxisLabel}
      />
      <Chart.XGridLines
        domain={domain}
        gridLines={xLabels.map(
          (_, i) => (i / xLabels.length) * (domain[1] - domain[0]) + domain[0]
        )}
        xAxisLabel={xAxisLabel}
        yAxisLabel={yAxisLabel}
      />
      <PlotArea
        aspectRatio={plotAspectRatio}
        colorFromX={colorFromX}
        colorFromY={colorFromY}
        data={data}
        height={plotHeight}
        marginLeft={marginLeft}
        plotWidth={plotWidth}
        range={range}
      />
    </Chart>
  );
}
