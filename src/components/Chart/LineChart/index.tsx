import * as React from "react";
import { CHART_ASPECT_RATIO, MARGIN_RIGHT, MARGIN_TOP } from "../constants";
import BaseChart from "../BaseChart";
import PlotArea from "./PlotArea";
import { TLabel } from "../types";
import { TPoint } from "./types";

export interface IProps {
  colorFromY?(y: number): string;
  children?: React.ReactNode;
  data: TPoint[];
  domain: [number, number];
  range: [number, number];
  trendlinePoints?: TPoint[];
  xAxisTitle?: string;
  yAxisTitle?: string;
  yLabels: TLabel[];
}

export default function LineChart({
  children,
  colorFromY,
  data,
  domain,
  range,
  trendlinePoints,
  xAxisTitle,
  yAxisTitle,
}: IProps) {
  const marginBottom = xAxisTitle ? 0.175 : 0.125;
  const marginLeft = yAxisTitle ? 0.175 : 0.125;
  const plotHeight = 1 - marginBottom - MARGIN_TOP;
  const plotWidth = CHART_ASPECT_RATIO - marginLeft - MARGIN_RIGHT;
  const plotAspectRatio = plotWidth / plotHeight;

  return (
    <BaseChart
      domain={domain}
      range={range}
      xAxisTitle={xAxisTitle}
      yAxisTitle={yAxisTitle}
    >
      {children}
      <PlotArea
        aspectRatio={plotAspectRatio}
        colorFromY={colorFromY}
        data={data}
        height={plotHeight}
        marginLeft={marginLeft}
        plotWidth={plotWidth}
        range={range}
        trendlinePoints={trendlinePoints}
      />
    </BaseChart>
  );
}
