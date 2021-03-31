import "./style.css";
import * as React from "react";
import { LINE_WIDTH_0, LINE_WIDTH_1, LINE_WIDTH_2 } from "../constants";
import { TPoint } from "../LineChart/types";
import { useTransformPointsToPlotArea } from "../hooks";

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

  if (transformedPoints.length < 2) return null;

  let polylinePoints = "";
  let lineLength = 0;
  let prevXY: [x: number, y: number] | undefined;

  for (let i = 0; i < transformedPoints.length; i++) {
    const [x, y] = transformedPoints[i];
    if (prevXY) lineLength += Math.hypot(x - prevXY[0], y - prevXY[1]);
    prevXY = [x, y];
    polylinePoints += `${x},${y} `;
  }

  // TODO - change to `trimEnd` when target is ES2019
  polylinePoints = polylinePoints.trim();

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
