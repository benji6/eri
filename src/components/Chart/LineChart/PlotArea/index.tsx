import * as React from "react";
import { LINE_WIDTH_2, MARGIN_TOP } from "../../constants";
import { DomainContext } from "../../contexts";
import Line from "./Line";
import { POINT_RADIUS } from "../constants";
import Point from "./Point";
import { TPoint } from "../types";

// this is a hack to ensure points aren't clipped
// when they extend to the top and right of the
// plot area
const SCALE_RATIO = 1 + POINT_RADIUS;

interface Props {
  aspectRatio: number;
  colorFromY?(y: number): string;
  data: TPoint[];
  height: number;
  marginLeft: number;
  plotWidth: number;
  range: [number, number];
  trendlinePoints?: TPoint[];
}

export default function PlotArea({
  aspectRatio,
  colorFromY,
  data,
  height,
  marginLeft,
  plotWidth,
  range,
  trendlinePoints,
}: Props) {
  const domain = React.useContext(DomainContext);
  const tranformPoint = ([x, y]: TPoint): TPoint => [
    (x - domain[0]) / (domain[1] - domain[0]) / SCALE_RATIO,
    (y - range[0]) / (range[1] - range[0]) / SCALE_RATIO,
  ];

  const points = data.map(tranformPoint);

  return (
    <svg
      height={height * SCALE_RATIO}
      viewBox={`0 0 ${aspectRatio} 1`}
      width={plotWidth * SCALE_RATIO}
      x={marginLeft}
      y={MARGIN_TOP - (height * SCALE_RATIO - height)}
    >
      {/* trendline */}
      {trendlinePoints && (
        <Line
          aspectRatio={aspectRatio}
          color="var(--e-color-balance-less)"
          points={trendlinePoints.map(tranformPoint)}
          thickness={LINE_WIDTH_2}
        />
      )}

      {/* chart line */}
      <Line aspectRatio={aspectRatio} points={points} />

      {/* chart points */}
      {points.map((point, i) => (
        <Point
          aspectRatio={aspectRatio}
          color={colorFromY ? colorFromY(data[i][1]) : "var(--e-color-theme)"}
          key={point[0]}
          x={point[0]}
          y={point[1]}
        />
      ))}
    </svg>
  );
}
