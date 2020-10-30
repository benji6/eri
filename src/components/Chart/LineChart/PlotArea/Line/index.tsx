import "./style.css";
import * as React from "react";
import { LINE_WIDTH_1 } from "../../../constants";
import { TPoint } from "../../types";

interface Props {
  aspectRatio: number;
  color?: string;
  points: TPoint[];
  thickness?: number;
}

export default function Line({
  aspectRatio,
  color = "var(--e-color-theme)",
  points,
  thickness = LINE_WIDTH_1,
}: Props) {
  if (points.length < 2) return null;

  let polylinePoints = "";
  let lineLength = 0;
  let prevXY: [x: number, y: number] | undefined;

  for (const point of points) {
    const x = point[0] * aspectRatio;
    const y = 1 - point[1];
    if (prevXY) lineLength += Math.hypot(x - prevXY[0], y - prevXY[1]);
    prevXY = [x, y];
    polylinePoints += `${x},${y} `;
  }

  polylinePoints = polylinePoints.trimRight();

  return (
    <polyline
      className="e-line"
      fill="none"
      points={polylinePoints}
      stroke={color}
      strokeWidth={thickness}
      style={{ "--length": lineLength } as React.CSSProperties}
    />
  );
}
