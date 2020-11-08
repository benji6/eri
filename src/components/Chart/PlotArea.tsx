import * as React from "react";
import { useMarginLeft, usePlotAreaHeight, usePlotAreaWidth } from "./hooks";
import { MARGIN_TOP } from "./constants";

interface Props {
  children: React.ReactNode;
}

export default function PlotArea({ children }: Props) {
  const marginLeft = useMarginLeft();
  const height = usePlotAreaHeight();
  const width = usePlotAreaWidth();

  return (
    <>
      <defs>
        <clipPath id="plot-area-clip-path">
          <rect x={marginLeft} y={MARGIN_TOP} height={height} width={width} />
        </clipPath>
      </defs>
      <g clipPath="url(#plot-area-clip-path)">{children}</g>
    </>
  );
}
