import "./style.css";
import * as React from "react";
import { LINE_WIDTH_1 } from "../constants";
import { TPoint } from "../LineChart/types";
import { useTransformPointsToPlotArea } from "../hooks";

const POINT_RADIUS = LINE_WIDTH_1 * 3;

interface IProps {
  colorFromY?(y: number): string;
  data: TPoint[];
}

export default function Points({ colorFromY, data }: IProps) {
  const transformedPoints = useTransformPointsToPlotArea(data);

  return (
    <g
      style={
        { "--total-points": transformedPoints.length } as React.CSSProperties
      }
    >
      {transformedPoints.map(([x, y], i) => (
        <circle
          className="e-points__point"
          cx={x}
          cy={y}
          fill={colorFromY ? colorFromY(data[i][1]) : "var(--e-color-theme)"}
          key={`${x}:${y}`}
          r={POINT_RADIUS}
          style={{ "--point-number": i } as React.CSSProperties}
        />
      ))}
    </g>
  );
}
