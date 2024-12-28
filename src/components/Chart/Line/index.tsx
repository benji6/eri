import "./style.css";
import * as React from "react";
import {
  CHART_ASPECT_RATIO,
  LINE_WIDTH_0,
  LINE_WIDTH_1,
  LINE_WIDTH_2,
} from "../constants";
import { DomainContext, RangeContext } from "../contexts";
import { TPoint } from "../LineChart/types";
import { use } from "react";

const useTransformPointsToPlotArea = (data: TPoint[]): TPoint[] => {
  const domain = use(DomainContext);
  const range = use(RangeContext);

  return data.map(
    ([x, y]): TPoint => [
      ((x - domain[0]) / (domain[1] - domain[0])) * CHART_ASPECT_RATIO,
      1 - (y - range[0]) / (range[1] - range[0]),
    ],
  );
};

interface Props {
  color?: string;
  data: TPoint[];
  thickness?: 0 | 1 | 2;
}

const thicknessToLineWidth = [
  LINE_WIDTH_0,
  LINE_WIDTH_1,
  LINE_WIDTH_2,
] as const;

export default function Line({
  color = "var(--color-theme)",
  data,
  thickness = 1,
}: Props) {
  const transformedPoints = useTransformPointsToPlotArea(data);

  if (transformedPoints.length < 2) return;

  let polylinePoints = "";
  let lineLength = 0;
  let prevXY: [x: number, y: number] | undefined;

  for (const [x, y] of transformedPoints) {
    if (prevXY) lineLength += Math.hypot(x - prevXY[0], y - prevXY[1]);
    prevXY = [x, y];
    polylinePoints += `${x},${y} `;
  }

  polylinePoints = polylinePoints.trimEnd();

  return (
    <polyline
      className="line"
      fill="none"
      points={polylinePoints}
      stroke={color}
      strokeWidth={thicknessToLineWidth[thickness]}
      style={{ "--length": lineLength } as React.CSSProperties}
    />
  );
}
