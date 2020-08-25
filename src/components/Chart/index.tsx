import * as React from "react";
import {
  AXIS_MARKER_LENGTH,
  CHART_ASPECT_RATIO,
  LINE_WIDTH_0,
  LINE_WIDTH_2,
  MARGIN_BOTTOM,
  MARGIN_LEFT,
  MARGIN_RIGHT,
  MARGIN_TOP,
  PLOT_HEIGHT,
} from "./constants";
import PlotArea from "./PlotArea";
import { TPoint } from "./types";

type TLabel = [number, string]; // [x/y position, label text]

interface Props {
  colorFromY?(y: number): string;
  data: TPoint[];
  domain: [number, number];
  range: [number, number];
  trendlinePoints?: TPoint[];
  xLabels: TLabel[];
  yLabels: TLabel[];
}

export default function Chart({
  colorFromY,
  data,
  domain,
  range,
  trendlinePoints,
  xLabels,
  yLabels,
}: Props) {
  return (
    <svg
      viewBox={`0 0 ${CHART_ASPECT_RATIO} 1`}
      style={{ background: "var(--e-color-ground-more)" }}
      width="100%"
    >
      {xLabels.map(([labelX, labelText]) => {
        const x =
          ((labelX - domain[0]) / (domain[1] - domain[0])) *
            CHART_ASPECT_RATIO *
            (1 - (MARGIN_LEFT + MARGIN_RIGHT) / CHART_ASPECT_RATIO) +
          MARGIN_LEFT;

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
              y2={1 - MARGIN_BOTTOM}
            />

            {/* x-axis-marker */}
            <line
              stroke="currentColor"
              strokeWidth={LINE_WIDTH_2}
              x1={x}
              x2={x}
              y1={1 - MARGIN_BOTTOM - LINE_WIDTH_2 / 2}
              y2={1 - MARGIN_BOTTOM + AXIS_MARKER_LENGTH}
            />

            {/* x-label */}
            <text
              dominantBaseline="central"
              fill="currentColor"
              style={{ fontSize: 0.055 }}
              textAnchor="middle"
              x={x}
              y={1 - (MARGIN_BOTTOM - AXIS_MARKER_LENGTH) / 2}
            >
              {labelText}
            </text>
          </React.Fragment>
        );
      })}
      {yLabels.map(([labelY, labelText]) => {
        const y =
          PLOT_HEIGHT * (1 - (labelY - range[0]) / (range[1] - range[0])) +
          MARGIN_TOP;

        return (
          <React.Fragment key={labelY}>
            {/* y-grid-line */}
            <line
              stroke="var(--e-color-balance)"
              strokeDasharray={LINE_WIDTH_2}
              strokeWidth={LINE_WIDTH_0}
              x1={MARGIN_LEFT}
              x2={CHART_ASPECT_RATIO - MARGIN_RIGHT}
              y1={y}
              y2={y}
            />

            {/* y-axis-marker */}
            <line
              stroke="currentColor"
              strokeWidth={LINE_WIDTH_2}
              x1={MARGIN_LEFT - AXIS_MARKER_LENGTH}
              x2={MARGIN_LEFT + LINE_WIDTH_2 / 2}
              y1={y}
              y2={y}
            />

            {/* y-label */}
            <text
              dominantBaseline="central"
              fill="currentColor"
              style={{ fontSize: 0.055 }}
              textAnchor="middle"
              x={(MARGIN_LEFT - AXIS_MARKER_LENGTH) / 2}
              y={y}
            >
              {labelText}
            </text>
          </React.Fragment>
        );
      })}

      <PlotArea
        colorFromY={colorFromY}
        data={data}
        domain={domain}
        range={range}
        trendlinePoints={trendlinePoints}
      />

      {/* x-axis */}
      <line
        x1={MARGIN_LEFT}
        x2={CHART_ASPECT_RATIO - MARGIN_RIGHT}
        y1={1 - MARGIN_BOTTOM}
        y2={1 - MARGIN_BOTTOM}
        stroke="currentColor"
        strokeWidth={LINE_WIDTH_2}
      />

      {/* y-axis */}
      <line
        x1={MARGIN_LEFT}
        x2={MARGIN_LEFT}
        y1={MARGIN_TOP}
        y2={1 - MARGIN_BOTTOM}
        stroke="currentColor"
        strokeWidth={LINE_WIDTH_2}
      />
    </svg>
  );
}
