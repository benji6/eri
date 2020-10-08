import * as React from "react";
import { MARGIN_TOP } from "../../privateComponents/Chart/constants";

interface Props {
  aspectRatio: number;
  colorFromY?(y: number): string;
  data: number[];
  height: number;
  marginLeft: number;
  plotWidth: number;
  range: [number, number];
}

export default function PlotArea({
  aspectRatio,
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
        return (
          <rect
            className="e-bar-chart__bar"
            key={i}
            x={(i / bars.length) * aspectRatio + width / 2}
            y={1 - height}
            fill={colorFromY ? colorFromY(height) : "var(--e-color-theme)"}
            height={height}
            style={{ "--bar-number": i } as React.CSSProperties}
            width={width}
          />
        );
      })}
    </svg>
  );
}
