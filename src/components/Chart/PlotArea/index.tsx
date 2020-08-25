import * as React from "react";
import {
  LINE_WIDTH_2,
  MARGIN_LEFT,
  MARGIN_TOP,
  PLOT_ASPECT_RATIO,
  PLOT_HEIGHT,
  PLOT_WIDTH,
  POINT_RADIUS,
} from "../constants";
import Line from "./Line";
import Point from "./Point";
import { TPoint } from "../types";

// this is a hack to ensure points aren't clipped
// when they extend to the top and right of the
// plot area
const SCALE_RATIO = 1 + POINT_RADIUS;

interface Props {
  colorFromY?(y: number): string;
  data: TPoint[];
  domain: [number, number];
  range: [number, number];
  trendlinePoints?: TPoint[];
}

export default function PlotArea({
  colorFromY,
  data,
  domain,
  range,
  trendlinePoints,
}: Props) {
  const tranformPoint = ([x, y]: TPoint): TPoint => [
    (x - domain[0]) / (domain[1] - domain[0]) / SCALE_RATIO,
    (y - range[0]) / (range[1] - range[0]) / SCALE_RATIO,
  ];

  const points = data.map(tranformPoint);

  return (
    <svg
      height={PLOT_HEIGHT * SCALE_RATIO}
      viewBox={`0 0 ${PLOT_ASPECT_RATIO} 1`}
      width={PLOT_WIDTH * SCALE_RATIO}
      x={MARGIN_LEFT}
      y={MARGIN_TOP - (PLOT_HEIGHT * SCALE_RATIO - PLOT_HEIGHT)}
    >
      {/* tendline */}
      {trendlinePoints && (
        <Line
          color="var(--e-color-balance-less)"
          points={trendlinePoints.map(tranformPoint)}
          thickness={LINE_WIDTH_2}
        />
      )}

      {/* chart line */}
      <Line points={points} />

      {/* chart points */}
      {points.map((point, i) => (
        <Point
          color={colorFromY ? colorFromY(data[i][1]) : "var(--e-color-theme)"}
          key={point[0]}
          x={point[0]}
          y={point[1]}
        />
      ))}
    </svg>
  );
}
