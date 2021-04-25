import "./style.css";
import * as React from "react";
import {
  useMarginBottom,
  usePlotAreaWidth,
  useTransformBarsToPlotArea,
} from "../hooks";

interface IProps {
  colorFromX?(x: number): string;
  colorFromY?(y: number): string;
  data: (number | undefined)[];
  onClick?(xIndex: number, y: number): void;
}

export default function Bars({
  colorFromX,
  colorFromY,
  data,
  onClick,
}: IProps) {
  if (colorFromX && colorFromY)
    throw Error(
      "Both `colorFromX` and `colorFromY` were provided - please only provide one"
    );

  const marginBottom = useMarginBottom();

  const transformedBars = useTransformBarsToPlotArea(
    data.map((height, i) => [(i + 0.25) / data.length, height])
  );
  const plotAreaWidth = usePlotAreaWidth();

  return (
    <g style={{ "--total-bars": data.length } as React.CSSProperties}>
      {transformedBars.map(([x, y], i) => {
        if (y === undefined) return;
        const originalY = data[i]!;

        const width = plotAreaWidth / (2 * data.length);

        return (
          <rect
            className={`bars__bar${onClick ? " bars__bar--clickable" : ""}`}
            key={i}
            x={x}
            y={y}
            fill={
              colorFromX
                ? colorFromX(data.length > 1 ? i / (data.length - 1) : 0.5)
                : colorFromY
                ? colorFromY(originalY)
                : "var(--color-theme)"
            }
            height={1 - y - marginBottom}
            onClick={onClick ? () => onClick(i, originalY) : undefined}
            style={
              {
                "--bar-number": i,
                transformOrigin: `center ${1 - marginBottom}px`,
              } as React.CSSProperties
            }
            width={width}
          >
            <title>{originalY.toFixed(1)}</title>
          </rect>
        );
      })}
    </g>
  );
}
