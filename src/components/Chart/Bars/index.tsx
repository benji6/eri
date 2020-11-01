import "./style.css";
import * as React from "react";
import { AspectRatioContext, RangeContext } from "../contexts";

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

  const aspectRatio = React.useContext(AspectRatioContext);
  const range = React.useContext(RangeContext);

  const bars = data.map(
    (height: number): number => (height - range[0]) / (range[1] - range[0])
  );

  return (
    <>
      {bars.map((height, i) => {
        const width = aspectRatio / (2 * bars.length);
        const x = (i / bars.length) * aspectRatio + width / 2;

        return (
          <rect
            className="e-bars__bar"
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
    </>
  );
}
