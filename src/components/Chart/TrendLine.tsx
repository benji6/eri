import * as React from "react";
import BaseLine from "./BaseLine";
import { LINE_WIDTH_2 } from "./constants";
import { TPoint } from "./LineChart/types";
import { useTransformedPoints } from "./hooks";

interface IProps {
  data: TPoint[];
}

export default function TrendLine({ data }: IProps) {
  const points = useTransformedPoints(data);

  return (
    <BaseLine
      color="var(--e-color-balance-less)"
      points={points}
      thickness={LINE_WIDTH_2}
    />
  );
}
