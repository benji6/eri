import * as React from "react";
import {
  AXIS_MARKER_LENGTH,
  FONT_SIZE,
  LINE_WIDTH_2,
  MARGIN_TOP,
} from "./constants";
import { RangeContext, YAxisTitleContext } from "./contexts";
import { TLabel } from "./types";
import { usePlotAreaHeight } from "./hooks";

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
  const yAxisLabel = React.useContext(YAxisTitleContext);
  const plotAreaHeight = usePlotAreaHeight();
  const marginLeft = yAxisLabel ? 0.175 : 0.125;

  return (
    <>
      {markers?.map((markerY) => {
        const y = transformY(range, plotAreaHeight, markerY);

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
        const y = transformY(range, plotAreaHeight, labelY);

        return (
          <text
            key={y}
            dy={FONT_SIZE * 0.3}
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
