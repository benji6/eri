import * as React from "react";
import { MARGIN_LEFT, MARGIN_TOP } from "./constants";
import { usePlotAreaHeight, usePlotAreaWidth } from "./hooks";

interface Props {
  children: React.ReactNode;
}

export default function PlotArea({ children }: Props) {
  const height = usePlotAreaHeight();
  const width = usePlotAreaWidth();

  return (
    <>
      <defs>
        <clipPath id="plot-area-clip-path">
          <rect x={MARGIN_LEFT} y={MARGIN_TOP} height={height} width={width} />
        </clipPath>
      </defs>
      <g clipPath="url(#plot-area-clip-path)">{children}</g>
    </>
  );
}
