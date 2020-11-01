import * as React from "react";
import {
  AspectRatioContext,
  XAxisTitleContext,
  YAxisTitleContext,
} from "./contexts";
import { CHART_ASPECT_RATIO, MARGIN_RIGHT, MARGIN_TOP } from "./constants";

interface Props {
  children: React.ReactNode;
}

export default function PlotArea({ children }: Props) {
  const xAxisTitle = React.useContext(XAxisTitleContext);
  const yAxisTitle = React.useContext(YAxisTitleContext);

  const marginBottom = xAxisTitle ? 0.175 : 0.125;
  const marginLeft = yAxisTitle ? 0.175 : 0.125;
  const height = 1 - marginBottom - MARGIN_TOP;
  const width = CHART_ASPECT_RATIO - marginLeft - MARGIN_RIGHT;
  const aspectRatio = width / height;

  return (
    <svg
      height={height}
      viewBox={`0 0 ${aspectRatio} 1`}
      width={width}
      x={marginLeft}
      y={MARGIN_TOP}
    >
      <AspectRatioContext.Provider value={aspectRatio}>
        {children}
      </AspectRatioContext.Provider>
    </svg>
  );
}
