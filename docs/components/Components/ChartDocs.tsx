import * as React from "react";
import { Chart, Paper } from "../../../src";
import { RouteComponentProps } from "@reach/router";

export default function CardDocs(_: RouteComponentProps) {
  const labels = Array.from({ length: 5 }, (_, n): [number, string] => [
    n / 4,
    String(n / 4),
  ]);

  return (
    <Paper.Group>
      <Paper>
        <h2>Chart</h2>
        <Chart
          data={Array.from({ length: 8 }, (_, n) => [n / 7, Math.random()])}
          domain={[0, 1]}
          range={[0, 1]}
          trendlinePoints={Array.from({ length: 4 }, (_, n) => [
            n / 3,
            Math.random() / 2 + 0.25,
          ])}
          xLabels={labels}
          yLabels={labels}
        />
      </Paper>
    </Paper.Group>
  );
}
