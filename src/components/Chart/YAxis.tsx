import * as React from "react";
import { AXIS_MARKER_LENGTH, LINE_WIDTH_2, MARGIN_TOP } from "./constants";
import { RangeContext, XAxisTitleContext, YAxisTitleContext } from "./contexts";
import { TLabel } from "./types";

const transformY = (
  range: [number, number],
  plotHeight: number,
  providedY: number
): number =>
  plotHeight * (1 - (providedY - range[0]) / (range[1] - range[0])) +
  MARGIN_TOP;

interface IProps {
  labels: TLabel[];
  markers?: number[];
}

export default function YAxis({ labels, markers }: IProps) {
  const range = React.useContext(RangeContext);
  const title = React.useContext(XAxisTitleContext);
  const yAxisLabel = React.useContext(YAxisTitleContext);

  const marginBottom = title ? 0.175 : 0.125;
  const marginLeft = yAxisLabel ? 0.175 : 0.125;

  const plotHeight = 1 - marginBottom - MARGIN_TOP;

  return (
    <>
      {markers?.map((markerY) => {
        const y = transformY(range, plotHeight, markerY);

        return (
          <line
            key={y}
            stroke="currentColor"
            strokeWidth={LINE_WIDTH_2}
            x1={marginLeft - AXIS_MARKER_LENGTH}
            x2={marginLeft + LINE_WIDTH_2 / 2}
            y1={y}
            y2={y}
          />
        );
      })}

      {labels.map(([labelY, labelText]) => {
        const y = transformY(range, plotHeight, labelY);

        return (
          <text
            key={y}
            dominantBaseline="central"
            fill="currentColor"
            textAnchor="end"
            x={marginLeft - 2 * AXIS_MARKER_LENGTH}
            y={y}
          >
            {labelText}
          </text>
        );
      })}
    </>
  );
}
