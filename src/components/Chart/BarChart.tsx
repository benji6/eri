import * as React from "react";
import BaseChart from "./BaseChart";
import Chart from ".";
import { TLabel } from "./types";

interface IProps extends React.SVGProps<SVGSVGElement> {
  children: React.ReactNode;
  range: [number, number];
  xAxisTitle?: string;
  xLabels: string[];
  yAxisTitle?: string;
}

export default function BarChart({
  children,
  range,
  xAxisTitle,
  xLabels,
  yAxisTitle,
  ...rest
}: IProps) {
  const transformedLabels: TLabel[] = xLabels.map((labelText, i) => [
    (i + 0.5) / xLabels.length,
    labelText,
  ]);

  return (
    <BaseChart
      {...rest}
      domain={[0, 1]}
      range={range}
      xAxisTitle={xAxisTitle}
      yAxisTitle={yAxisTitle}
    >
      <Chart.XAxis
        labels={transformedLabels}
        markers={transformedLabels.map(([x]) => x)}
      />
      <Chart.XGridLines lines={xLabels.map((_, i) => i / xLabels.length)} />
      {children}
    </BaseChart>
  );
}
