import * as React from "react";
import { AspectRatioContext } from "./contexts";
import { LINE_WIDTH_1 } from "./constants";
import { TPoint } from "./LineChart/types";
import { useTransformedPoints } from "./hooks";

const POINT_RADIUS = LINE_WIDTH_1 * 3;

interface IProps {
  colorFromY?(y: number): string;
  data: TPoint[];
}

export default function Points({ colorFromY, data }: IProps) {
  const aspectRatio = React.useContext(AspectRatioContext);
  const points = useTransformedPoints(data);

  return (
    <>
      {points.map((point, i) => (
        <circle
          cx={point[0] * aspectRatio}
          cy={1 - point[1]}
          fill={colorFromY ? colorFromY(data[i][1]) : "var(--e-color-theme)"}
          key={point[0]}
          r={POINT_RADIUS}
        />
      ))}
    </>
  );
}
