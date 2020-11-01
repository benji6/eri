import * as React from "react";
import BaseChart from "../BaseChart";

interface IProps {
  children?: React.ReactNode;
  domain: [number, number];
  range: [number, number];
  xAxisTitle?: string;
  yAxisTitle?: string;
}

export default function LineChart({
  children,
  domain,
  range,
  xAxisTitle,
  yAxisTitle,
}: IProps) {
  return (
    <BaseChart
      domain={domain}
      range={range}
      xAxisTitle={xAxisTitle}
      yAxisTitle={yAxisTitle}
    >
      {children}
    </BaseChart>
  );
}
