import "./style.css";
import * as React from "react";
import { LINE_WIDTH_0, LINE_WIDTH_1, LINE_WIDTH_2 } from "../constants";
import { AspectRatioContext } from "../contexts";
import { TPoint } from "../LineChart/types";
import { useTransformedPoints } from "../hooks";

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
  color = "var(--e-color-theme)",
  data,
  thickness = 1,
}: Props) {
  const aspectRatio = React.useContext(AspectRatioContext);
  const points = useTransformedPoints(data);

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
      strokeWidth={thicknessToLineWidth[thickness]}
      style={{ "--length": lineLength } as React.CSSProperties}
    />
  );
}
