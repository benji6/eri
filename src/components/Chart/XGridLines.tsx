import * as React from "react";
import {
  CHART_ASPECT_RATIO,
  LINE_WIDTH_0,
  LINE_WIDTH_2,
  MARGIN_RIGHT,
  MARGIN_TOP,
} from "../../components/Chart/constants";
import {
  DomainContext,
  XAxisTitleContext,
  YAxisTitleContext,
} from "../../components/Chart/contexts";

interface IProps {
  lines: number[];
}

export default function XGridLines({ lines }: IProps) {
  const domain = React.useContext(DomainContext);
  const xAxisTitle = React.useContext(XAxisTitleContext);
  const yAxisTitle = React.useContext(YAxisTitleContext);

  const marginBottom = xAxisTitle ? 0.175 : 0.125;
  const marginLeft = yAxisTitle ? 0.175 : 0.125;

  return (
    <>
      {lines.map((lineX) => {
        const x =
          ((lineX - domain[0]) / (domain[1] - domain[0])) *
            CHART_ASPECT_RATIO *
            (1 - (marginLeft + MARGIN_RIGHT) / CHART_ASPECT_RATIO) +
          marginLeft;

        return (
          <line
            key={lineX}
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
