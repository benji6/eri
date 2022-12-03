import {
  AXIS_MARKER_LENGTH,
  CHART_ASPECT_RATIO,
  FONT_SIZE,
  LINE_WIDTH_2,
  MARGIN_RIGHT,
} from "./constants";
import { useMarginBottom, useMarginLeft } from "./hooks";
import { DomainContext } from "./contexts";
import { TLabel } from "./types";
import { useContext } from "react";

const transformX = (
  domain: [number, number],
  marginLeft: number,
  providedX: number
): number =>
  ((providedX - domain[0]) / (domain[1] - domain[0])) *
    CHART_ASPECT_RATIO *
    (1 - (marginLeft + MARGIN_RIGHT) / CHART_ASPECT_RATIO) +
  marginLeft;

interface IProps {
  labels: TLabel[];
  markers?: true | number[];
}

export default function XAxis({ labels, markers }: IProps) {
  const domain = useContext(DomainContext);
  const marginBottom = useMarginBottom();
  const marginLeft = useMarginLeft();
  const markerCoordinates =
    markers === true ? labels.map(([labelY]) => labelY) : markers;

  return (
    <>
      {markerCoordinates?.map((markerX) => {
        const x = transformX(domain, marginLeft, markerX);

        return (
          <line
            key={x}
            stroke="currentColor"
            strokeWidth={LINE_WIDTH_2}
            x1={x}
            x2={x}
            y1={1 - marginBottom - LINE_WIDTH_2 / 2}
            y2={1 - marginBottom + AXIS_MARKER_LENGTH}
          />
        );
      })}

      {labels.map(([labelX, labelText]) => {
        const x = transformX(domain, marginLeft, labelX);

        return (
          <text
            key={x}
            dy={FONT_SIZE * 0.8}
            fill="currentColor"
            textAnchor="middle"
            x={x}
            y={1 - marginBottom + 2 * AXIS_MARKER_LENGTH}
          >
            {labelText}
          </text>
        );
      })}
    </>
  );
}
