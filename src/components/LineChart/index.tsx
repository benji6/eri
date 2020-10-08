import * as React from "react";
import {
  CHART_ASPECT_RATIO,
  MARGIN_RIGHT,
  MARGIN_TOP,
} from "../../privateComponents/Chart/constants";
import Chart from "../../privateComponents/Chart";
import PlotArea from "./PlotArea";
import { TLabel } from "../../privateComponents/Chart/types";
import { TPoint } from "./types";

export interface IProps {
  colorFromY?(y: number): string;
  data: TPoint[];
  domain: [number, number];
  range: [number, number];
  trendlinePoints?: TPoint[];
  xAxisLabel?: string;
  xLabels: TLabel[];
  yAxisLabel?: string;
  yLabels: TLabel[];
}

export default function LineChart({
  colorFromY,
  data,
  domain,
  range,
  trendlinePoints,
  xAxisLabel,
  xLabels,
  yAxisLabel,
  yLabels,
}: IProps) {
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
        xLabels={xLabels}
        yAxisLabel={yAxisLabel}
      />
      <Chart.XGridLines
        domain={domain}
        gridLines={xLabels.map(([x]) => x)}
        xAxisLabel={xAxisLabel}
        yAxisLabel={yAxisLabel}
      />
      <PlotArea
        aspectRatio={plotAspectRatio}
        colorFromY={colorFromY}
        data={data}
        domain={domain}
        height={plotHeight}
        marginLeft={marginLeft}
        plotWidth={plotWidth}
        range={range}
        trendlinePoints={trendlinePoints}
      />
    </Chart>
  );
}
