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
import { TLabel } from "./types";
import XGridLines from "./XGridLines";
import XLabels from "./XLabels";

interface IProps {
  children: React.ReactNode;
  range: [number, number];
  xAxisLabel?: string;
  yAxisLabel?: string;
  yLabels: TLabel[];
}

export default function Chart({
  children,
  range,
  xAxisLabel,
  yAxisLabel,
  yLabels,
}: IProps) {
  const marginBottom = xAxisLabel ? 0.175 : 0.125;
  const marginLeft = yAxisLabel ? 0.175 : 0.125;
  const plotHeight = 1 - marginBottom - MARGIN_TOP;

  return (
    <svg
      className="e-chart"
      viewBox={`0 0 ${CHART_ASPECT_RATIO} 1`}
      width="100%"
    >
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

      {children}

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

Chart.XGridLines = XGridLines;
Chart.XLabels = XLabels;
