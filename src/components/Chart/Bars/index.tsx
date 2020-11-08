import "./style.css";
import * as React from "react";
import {
  useMarginBottom,
  usePlotAreaWidth,
  useTransformPointsToPlotArea,
} from "../hooks";
import { RangeContext } from "../contexts";

interface IProps {
  colorFromX?(x: number): string;
  colorFromY?(y: number): string;
  data: number[];
}

export default function Bars({ colorFromX, colorFromY, data }: IProps) {
  if (colorFromX && colorFromY)
    throw Error(
      "Both `colorFromX` and `colorFromY` were provided - please only provide one"
    );

  const marginBottom = useMarginBottom();
  const range = React.useContext(RangeContext);

  const transformedPoints = useTransformPointsToPlotArea(
    data.map((height, i) => [
      (i + 0.25) / data.length,
      (height - range[0]) / (range[1] - range[0]),
    ])
  );
  const plotAreaWidth = usePlotAreaWidth();

  return (
    <g style={{ "--total-bars": data.length } as React.CSSProperties}>
      {transformedPoints.map(([x, y], i) => {
        const width = plotAreaWidth / (2 * data.length);

        return (
          <rect
            className="e-bars__bar"
            key={i}
            x={x}
            y={y}
            fill={
              colorFromX
                ? colorFromX(data.length > 1 ? i / (data.length - 1) : 0.5)
                : colorFromY
                ? colorFromY(data[i])
                : "var(--e-color-theme)"
            }
            height={1 - y - marginBottom}
            style={
              {
                "--bar-number": i,
                transformOrigin: `center ${1 - marginBottom}px`,
              } as React.CSSProperties
            }
            width={width}
          />
        );
      })}
    </g>
  );
}
