import * as React from "react";
import { MARGIN_TOP } from "../../privateComponents/Chart/constants";

interface Props {
  aspectRatio: number;
  colorFromX?(x: number): string;
  colorFromY?(y: number): string;
  data: number[];
  height: number;
  marginLeft: number;
  plotWidth: number;
  range: [number, number];
}

export default function PlotArea({
  aspectRatio,
  colorFromX,
  colorFromY,
  data,
  height,
  marginLeft,
  plotWidth,
  range,
}: Props) {
  const bars = data.map(
    (height: number): number => (height - range[0]) / (range[1] - range[0])
  );

  return (
    <svg
      height={height}
      viewBox={`0 0 ${aspectRatio} 1`}
      width={plotWidth}
      x={marginLeft}
      y={MARGIN_TOP - (height - height)}
    >
      {bars.map((height, i) => {
        const width = aspectRatio / (2 * bars.length);
        const x = (i / bars.length) * aspectRatio + width / 2;

        return (
          <rect
            className="e-bar-chart__bar"
            key={i}
            x={x}
            y={1 - height}
            fill={
              colorFromX
                ? colorFromX(bars.length > 1 ? i / (bars.length - 1) : 0.5)
                : colorFromY
                ? colorFromY(height)
                : "var(--e-color-theme)"
            }
            height={height}
            style={{ "--bar-number": i } as React.CSSProperties}
            width={width}
          />
        );
      })}
    </svg>
  );
}
