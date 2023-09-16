import {
  CHART_ASPECT_RATIO,
  MARGIN_BOTTOM,
  MARGIN_LEFT,
  MARGIN_RIGHT,
  MARGIN_TOP,
} from "./constants";
import { DomainContext, RangeContext } from "./contexts";
import { TPoint } from "./LineChart/types";
import { useContext } from "react";

export const usePlotAreaHeight = (): number => 1 - MARGIN_BOTTOM - MARGIN_TOP;

export const usePlotAreaWidth = (): number =>
  CHART_ASPECT_RATIO - MARGIN_LEFT - MARGIN_RIGHT;

export const useTransformPointsToPlotArea = (data: TPoint[]): TPoint[] => {
  const domain = useContext(DomainContext);
  const range = useContext(RangeContext);
  const plotAreaHeight = usePlotAreaHeight();
  const plotAreaWidth = usePlotAreaWidth();

  return data.map(
    ([x, y]): TPoint => [
      MARGIN_LEFT + ((x - domain[0]) / (domain[1] - domain[0])) * plotAreaWidth,
      1 -
        ((y - range[0]) / (range[1] - range[0])) * plotAreaHeight -
        MARGIN_BOTTOM,
    ],
  );
};
