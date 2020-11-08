import * as React from "react";
import { CHART_ASPECT_RATIO, MARGIN_RIGHT, MARGIN_TOP } from "./constants";
import {
  DomainContext,
  RangeContext,
  XAxisTitleContext,
  YAxisTitleContext,
} from "./contexts";
import { computeMarginBottom, computeMarginTop } from "./utils";
import { TPoint } from "./LineChart/types";

export const useMarginBottom = (): number => {
  const xAxisTitle = React.useContext(XAxisTitleContext);
  return computeMarginBottom(xAxisTitle);
};

export const useMarginLeft = (): number => {
  const yAxisTitle = React.useContext(YAxisTitleContext);
  return computeMarginTop(yAxisTitle);
};

export const usePlotAreaHeight = (): number => {
  const marginBottom = useMarginBottom();
  return 1 - marginBottom - MARGIN_TOP;
};

export const usePlotAreaWidth = (): number => {
  const marginLeft = useMarginLeft();
  return CHART_ASPECT_RATIO - marginLeft - MARGIN_RIGHT;
};

export const useTransformPointsToPlotArea = (data: TPoint[]): TPoint[] => {
  const domain = React.useContext(DomainContext);
  const range = React.useContext(RangeContext);
  const marginBottom = useMarginBottom();
  const marginLeft = useMarginLeft();
  const plotAreaWidth = usePlotAreaWidth();

  const plotAreaHeight = 1 - MARGIN_TOP - marginBottom;

  return data.map(([x, y]) => [
    marginLeft + ((x - domain[0]) / (domain[1] - domain[0])) * plotAreaWidth,
    1 -
      ((y - range[0]) / (range[1] - range[0])) * plotAreaHeight -
      marginBottom,
  ]);
};
