import {
  CHART_ASPECT_RATIO,
  LINE_WIDTH_0,
  LINE_WIDTH_2,
  MARGIN_LEFT,
  MARGIN_RIGHT,
  MARGIN_TOP,
} from "./constants";
import { RangeContext } from "./contexts";
import { useContext } from "react";
import { usePlotAreaHeight } from "./hooks";

interface IProps {
  lines: number[];
}

export default function YGridLines({ lines }: IProps) {
  const range = useContext(RangeContext);
  const plotAreaHeight = usePlotAreaHeight();

  return (
    <>
      {lines.map((lineY) => {
        const y =
          MARGIN_TOP +
          plotAreaHeight * (1 - (lineY - range[0]) / (range[1] - range[0]));

        return (
          <line
            key={lineY}
            stroke="var(--color-balance)"
            strokeDasharray={LINE_WIDTH_2}
            strokeWidth={LINE_WIDTH_0}
            x1={MARGIN_LEFT}
            x2={CHART_ASPECT_RATIO - MARGIN_RIGHT}
            y1={y}
            y2={y}
          />
        );
      })}
    </>
  );
}
