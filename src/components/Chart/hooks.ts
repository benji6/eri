import { DomainContext, RangeContext } from "./contexts";
import { CHART_ASPECT_RATIO } from "./constants";
import { TPoint } from "./LineChart/types";
import { useContext } from "react";

export const useTransformPointsToPlotArea = (data: TPoint[]): TPoint[] => {
  const domain = useContext(DomainContext);
  const range = useContext(RangeContext);

  return data.map(
    ([x, y]): TPoint => [
      ((x - domain[0]) / (domain[1] - domain[0])) * CHART_ASPECT_RATIO,
      1 - (y - range[0]) / (range[1] - range[0]),
    ],
  );
};
