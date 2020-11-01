import * as React from "react";
import BaseChart from "./BaseChart";
import Chart from ".";
import { TLabel } from "./types";

interface IProps {
  children: React.ReactNode;
  domain: [number, number];
  range: [number, number];
  xAxisTitle?: string;
  xLabels: string[];
  yAxisTitle?: string;
}

export default function BarChart({
  children,
  domain,
  range,
  xAxisTitle,
  xLabels,
  yAxisTitle,
}: IProps) {
  const transformedLabels: TLabel[] = xLabels.map((labelText, i) => [
    ((i + 0.5) / xLabels.length) * (domain[1] - domain[0]) + domain[0],
    labelText,
  ]);

  return (
    <BaseChart
      domain={domain}
      range={range}
      xAxisTitle={xAxisTitle}
      yAxisTitle={yAxisTitle}
    >
      <Chart.XAxis
        labels={transformedLabels}
        markers={transformedLabels.map(([x]) => x)}
      />
      <Chart.XGridLines
        lines={xLabels.map(
          (_, i) => (i / xLabels.length) * (domain[1] - domain[0]) + domain[0]
        )}
      />
      {children}
    </BaseChart>
  );
}
