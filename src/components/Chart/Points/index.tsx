import "./style.css";
import * as React from "react";
import { LINE_WIDTH_1 } from "../constants";
import { useTransformPointsToPlotArea } from "../hooks";

const POINT_RADIUS = LINE_WIDTH_1 * 3;

interface IProps {
  data: { color?: string; x: number; y: number }[];
}

export default function Points({ data }: IProps) {
  const transformedPoints = useTransformPointsToPlotArea(
    data.map(({ x, y }) => [x, y]),
  );

  return (
    <g
      style={
        { "--total-points": transformedPoints.length } as React.CSSProperties
      }
    >
      {transformedPoints.map(([x, y], i) => (
        <circle
          className="points__point"
          cx={x}
          cy={y}
          fill={data[i].color ?? "var(--color-theme)"}
          key={`${x}:${y}`}
          r={POINT_RADIUS}
          style={{ "--point-number": i } as React.CSSProperties}
        />
      ))}
    </g>
  );
}
