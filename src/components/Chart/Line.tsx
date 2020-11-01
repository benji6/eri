import * as React from "react";
import BaseLine from "./BaseLine";
import { TPoint } from "./LineChart/types";
import { useTransformedPoints } from "./hooks";

interface IProps {
  data: TPoint[];
}

export default function Line({ data }: IProps) {
  const points = useTransformedPoints(data);

  return <BaseLine points={points} />;
}
