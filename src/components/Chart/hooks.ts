import { CHART_ASPECT_RATIO, MARGIN_RIGHT, MARGIN_TOP } from "./constants";
import {
  DomainContext,
  RangeContext,
  XAxisTitleContext,
  YAxisTitleContext,
} from "./contexts";
import { computeMarginBottom, computeMarginLeft } from "./utils";
import { TPoint } from "./LineChart/types";
import { useContext } from "react";

export const useMarginBottom = (): number => {
  const xAxisTitle = useContext(XAxisTitleContext);
  return computeMarginBottom(xAxisTitle);
};

export const useMarginLeft = (): number => {
  const yAxisTitle = useContext(YAxisTitleContext);
  return computeMarginLeft(yAxisTitle);
};

export const usePlotAreaHeight = (): number => {
  const marginBottom = useMarginBottom();
  return 1 - marginBottom - MARGIN_TOP;
};

export const usePlotAreaWidth = (): number => {
  const marginLeft = useMarginLeft();
  return CHART_ASPECT_RATIO - marginLeft - MARGIN_RIGHT;
};

export const useTransformBarsToPlotArea = (
  data: [x: number, y: number | undefined][]
): [x: number, y: number | undefined][] => {
  const domain = useContext(DomainContext);
  const range = useContext(RangeContext);
  const marginBottom = useMarginBottom();
  const marginLeft = useMarginLeft();
  const plotAreaHeight = usePlotAreaHeight();
  const plotAreaWidth = usePlotAreaWidth();

  return data.map(([x, y]) => [
    marginLeft + ((x - domain[0]) / (domain[1] - domain[0])) * plotAreaWidth,
    y === undefined
      ? undefined
      : 1 -
        ((y - range[0]) / (range[1] - range[0])) * plotAreaHeight -
        marginBottom,
  ]);
};

export const useTransformPointsToPlotArea = (data: TPoint[]): TPoint[] =>
  useTransformBarsToPlotArea(data) as TPoint[];
