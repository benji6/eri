import "./style.css";
import * as React from "react";
import {
  AXIS_MARKER_LENGTH,
  CHART_ASPECT_RATIO,
  LINE_WIDTH_0,
  LINE_WIDTH_2,
  MARGIN_RIGHT,
  MARGIN_TOP,
} from "./constants";
import PlotArea from "./PlotArea";
import { TPoint } from "./types";

type TLabel = [xyPosition: number, labelText: string];

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

export default function Chart({
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
    <svg
      className="e-chart"
      viewBox={`0 0 ${CHART_ASPECT_RATIO} 1`}
      width="100%"
    >
      {xLabels.map(([labelX, labelText]) => {
        const x =
          ((labelX - domain[0]) / (domain[1] - domain[0])) *
            CHART_ASPECT_RATIO *
            (1 - (marginLeft + MARGIN_RIGHT) / CHART_ASPECT_RATIO) +
          marginLeft;

        return (
          <React.Fragment key={labelX}>
            {/* x-grid-line */}
            <line
              stroke="var(--e-color-balance)"
              strokeDasharray={LINE_WIDTH_2}
              strokeWidth={LINE_WIDTH_0}
              x1={x}
              x2={x}
              y1={MARGIN_TOP}
              y2={1 - marginBottom}
            />

            {/* x-axis-marker */}
            <line
              stroke="currentColor"
              strokeWidth={LINE_WIDTH_2}
              x1={x}
              x2={x}
              y1={1 - marginBottom - LINE_WIDTH_2 / 2}
              y2={1 - marginBottom + AXIS_MARKER_LENGTH}
            />

            {/* x-label */}
            <text
              dominantBaseline="text-before-edge"
              fill="currentColor"
              textAnchor="middle"
              x={x}
              y={1 - marginBottom + 2 * AXIS_MARKER_LENGTH}
            >
              {labelText}
            </text>
          </React.Fragment>
        );
      })}
      {yLabels.map(([labelY, labelText]) => {
        const y =
          plotHeight * (1 - (labelY - range[0]) / (range[1] - range[0])) +
          MARGIN_TOP;

        return (
          <React.Fragment key={labelY}>
            {/* y-grid-line */}
            <line
              stroke="var(--e-color-balance)"
              strokeDasharray={LINE_WIDTH_2}
              strokeWidth={LINE_WIDTH_0}
              x1={marginLeft}
              x2={CHART_ASPECT_RATIO - MARGIN_RIGHT}
              y1={y}
              y2={y}
            />

            {/* y-axis-marker */}
            <line
              stroke="currentColor"
              strokeWidth={LINE_WIDTH_2}
              x1={marginLeft - AXIS_MARKER_LENGTH}
              x2={marginLeft + LINE_WIDTH_2 / 2}
              y1={y}
              y2={y}
            />

            {/* y-label */}
            <text
              dominantBaseline="central"
              fill="currentColor"
              textAnchor="end"
              x={marginLeft - 2 * AXIS_MARKER_LENGTH}
              y={y}
            >
              {labelText}
            </text>
          </React.Fragment>
        );
      })}

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

      {/* x-axis */}
      <line
        x1={marginLeft}
        x2={CHART_ASPECT_RATIO - MARGIN_RIGHT}
        y1={1 - marginBottom}
        y2={1 - marginBottom}
        stroke="currentColor"
        strokeWidth={LINE_WIDTH_2}
      />

      {/* x-axis-label */}
      {xAxisLabel && (
        <text
          className="e-chart__axis-label"
          dominantBaseline="text-after-edge"
          fill="currentColor"
          textAnchor="middle"
          x={marginLeft + (CHART_ASPECT_RATIO - marginLeft - MARGIN_RIGHT) / 2}
          y={1}
        >
          {xAxisLabel}
        </text>
      )}

      {/* y-axis */}
      <line
        x1={marginLeft}
        x2={marginLeft}
        y1={MARGIN_TOP}
        y2={1 - marginBottom}
        stroke="currentColor"
        strokeWidth={LINE_WIDTH_2}
      />

      {/* y-axis-label */}
      {yAxisLabel && (
        <text
          className="e-chart__axis-label"
          dominantBaseline="text-before-edge"
          fill="currentColor"
          textAnchor="middle"
          transform={`rotate(270, 0, ${
            MARGIN_TOP + (1 - MARGIN_TOP - marginBottom) / 2
          })`}
          x={0}
          y={MARGIN_TOP + (1 - MARGIN_TOP - marginBottom) / 2}
        >
          {yAxisLabel}
        </text>
      )}
    </svg>
  );
}
