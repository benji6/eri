import * as React from "react";
import {
  CHART_ASPECT_RATIO,
  LINE_WIDTH_0,
  LINE_WIDTH_2,
  MARGIN_RIGHT,
  MARGIN_TOP,
} from "./constants";

export interface IProps {
  domain: [number, number];
  gridLines: number[];
  xAxisLabel?: string;
  yAxisLabel?: string;
}

export default function XLabels({
  domain,
  gridLines,
  xAxisLabel,
  yAxisLabel,
}: IProps) {
  const marginBottom = xAxisLabel ? 0.175 : 0.125;
  const marginLeft = yAxisLabel ? 0.175 : 0.125;

  return (
    <>
      {gridLines.map((gridLineX) => {
        const x =
          ((gridLineX - domain[0]) / (domain[1] - domain[0])) *
            CHART_ASPECT_RATIO *
            (1 - (marginLeft + MARGIN_RIGHT) / CHART_ASPECT_RATIO) +
          marginLeft;

        return (
          <line
            key={gridLineX}
            stroke="var(--e-color-balance)"
            strokeDasharray={LINE_WIDTH_2}
            strokeWidth={LINE_WIDTH_0}
            x1={x}
            x2={x}
            y1={MARGIN_TOP}
            y2={1 - marginBottom}
          />
        );
      })}
    </>
  );
}
