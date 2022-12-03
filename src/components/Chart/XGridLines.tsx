import {
  LINE_WIDTH_0,
  LINE_WIDTH_2,
  MARGIN_TOP,
} from "../../components/Chart/constants";
import { useMarginBottom, useMarginLeft, usePlotAreaWidth } from "./hooks";
import { DomainContext } from "../../components/Chart/contexts";
import { useContext } from "react";

interface IProps {
  lines: number[];
}

export default function XGridLines({ lines }: IProps) {
  const domain = useContext(DomainContext);
  const marginBottom = useMarginBottom();
  const marginLeft = useMarginLeft();
  const plotAreaWidth = usePlotAreaWidth();

  return (
    <>
      {lines.map((lineX) => {
        const x =
          marginLeft +
          ((lineX - domain[0]) / (domain[1] - domain[0])) * plotAreaWidth;

        return (
          <line
            key={lineX}
            stroke="var(--color-balance)"
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
