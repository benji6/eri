import * as React from "react";
import { DomainContext, RangeContext } from "./contexts";
import { TPoint } from "./LineChart/types";

export const useTransformedPoints = (data: TPoint[]): TPoint[] => {
  const domain = React.useContext(DomainContext);
  const range = React.useContext(RangeContext);

  const tranformPoint = ([x, y]: TPoint): TPoint => [
    (x - domain[0]) / (domain[1] - domain[0]),
    (y - range[0]) / (range[1] - range[0]),
  ];

  return data.map(tranformPoint);
};
