import * as React from "react";
import {
  AXIS_MARKER_LENGTH,
  CHART_ASPECT_RATIO,
  LINE_WIDTH_2,
  MARGIN_RIGHT,
} from "./constants";
import { TLabel } from "./types";

export interface IProps {
  domain: [number, number];
  xAxisLabel?: string;
  xLabels: TLabel[];
  yAxisLabel?: string;
}

export default function XLabels({
  domain,
  xAxisLabel,
  xLabels,
  yAxisLabel,
}: IProps) {
  const marginBottom = xAxisLabel ? 0.175 : 0.125;
  const marginLeft = yAxisLabel ? 0.175 : 0.125;

  return (
    <>
      {xLabels.map(([labelX, labelText]) => {
        const x =
          ((labelX - domain[0]) / (domain[1] - domain[0])) *
            CHART_ASPECT_RATIO *
            (1 - (marginLeft + MARGIN_RIGHT) / CHART_ASPECT_RATIO) +
          marginLeft;

        return (
          <React.Fragment key={labelX}>
            {/* x-axis-marker */}
            <line
              stroke="currentColor"
              strokeWidth={LINE_WIDTH_2}
              x1={x}
              x2={x}
              y1={1 - marginBottom - LINE_WIDTH_2 / 2}
              y2={1 - marginBottom + AXIS_MARKER_LENGTH}
            />

            {/* x-label */}
            <text
              dominantBaseline="text-before-edge"
              fill="currentColor"
              textAnchor="middle"
              x={x}
              y={1 - marginBottom + 2 * AXIS_MARKER_LENGTH}
            >
              {labelText}
            </text>
          </React.Fragment>
        );
      })}
    </>
  );
}
