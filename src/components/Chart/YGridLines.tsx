import * as React from "react";
import {
  CHART_ASPECT_RATIO,
  LINE_WIDTH_0,
  LINE_WIDTH_2,
  MARGIN_RIGHT,
  MARGIN_TOP,
} from "./constants";
import { useMarginBottom, useMarginLeft } from "./hooks";
import { RangeContext } from "./contexts";

interface IProps {
  lines: number[];
}

export default function YGridLines({ lines }: IProps) {
  const range = React.useContext(RangeContext);
  const marginBottom = useMarginBottom();
  const marginLeft = useMarginLeft();

  const plotHeight = 1 - marginBottom - MARGIN_TOP;

  return (
    <>
      {lines.map((lineY) => {
        const y =
          plotHeight * (1 - (lineY - range[0]) / (range[1] - range[0])) +
          MARGIN_TOP;

        return (
          <line
            key={lineY}
            stroke="var(--e-color-balance)"
            strokeDasharray={LINE_WIDTH_2}
            strokeWidth={LINE_WIDTH_0}
            x1={marginLeft}
            x2={CHART_ASPECT_RATIO - MARGIN_RIGHT}
            y1={y}
            y2={y}
          />
        );
      })}
    </>
  );
}
