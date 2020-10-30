import "./style.css";
import * as React from "react";
import { CHART_ASPECT_RATIO, MARGIN_RIGHT, MARGIN_TOP } from "../constants";
import BaseChart from "../BaseChart";
import Chart from "..";
import PlotArea from "./PlotArea";
import { TLabel } from "../types";

export interface IProps {
  children: React.ReactNode;
  colorFromX?(x: number): string;
  colorFromY?(y: number): string;
  data: number[];
  domain: [number, number];
  range: [number, number];
  xAxisTitle?: string;
  xLabels: string[];
  yAxisTitle?: string;
}

export default function BarChart({
  children,
  colorFromX,
  colorFromY,
  data,
  domain,
  range,
  xAxisTitle,
  xLabels,
  yAxisTitle,
}: IProps) {
  if (xLabels.length && xLabels.length !== data.length)
    throw Error("`xLabels.length` !== `data.length`");

  if (colorFromX && colorFromY)
    throw Error(
      "Both `colorFromX` and `colorFromY` were provided - please only provide one"
    );

  const marginBottom = xAxisTitle ? 0.175 : 0.125;
  const marginLeft = yAxisTitle ? 0.175 : 0.125;
  const plotHeight = 1 - marginBottom - MARGIN_TOP;
  const plotWidth = CHART_ASPECT_RATIO - marginLeft - MARGIN_RIGHT;
  const plotAspectRatio = plotWidth / plotHeight;

  const transformedLabels: TLabel[] = xLabels.map((labelText, i) => [
    ((i + 0.5) / xLabels.length) * (domain[1] - domain[0]) + domain[0],
    labelText,
  ]);

  return (
    <BaseChart
      domain={domain}
      range={range}
      xAxisTitle={xAxisTitle}
      yAxisTitle={yAxisTitle}
    >
      <Chart.XAxis
        labels={transformedLabels}
        markers={transformedLabels.map(([x]) => x)}
      />
      <Chart.XGridLines
        lines={xLabels.map(
          (_, i) => (i / xLabels.length) * (domain[1] - domain[0]) + domain[0]
        )}
      />
      {children}
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
    </BaseChart>
  );
}
