import "./style.css";
import * as React from "react";
import {
  CHART_ASPECT_RATIO,
  LINE_WIDTH_2,
  MARGIN_BOTTOM,
  MARGIN_LEFT,
  MARGIN_RIGHT,
  MARGIN_TOP,
} from "../constants";
import { DomainContext, RangeContext } from "../contexts";

interface IProps extends React.SVGProps<SVGSVGElement> {
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
  ...rest
}: IProps) {
  return (
    <div className="line-chart">
      <svg
        {...rest}
        className="base-chart"
        viewBox={`0 0 ${CHART_ASPECT_RATIO} 1`}
      >
        <DomainContext.Provider value={domain}>
          <RangeContext.Provider value={range}>
            {children}

            {/* x-axis */}
            <line
              x1={MARGIN_LEFT}
              x2={CHART_ASPECT_RATIO - MARGIN_RIGHT}
              y1={1 - MARGIN_BOTTOM}
              y2={1 - MARGIN_BOTTOM}
              stroke="currentColor"
              strokeWidth={LINE_WIDTH_2}
            />

            {/* y-axis */}
            <line
              x1={MARGIN_LEFT}
              x2={MARGIN_LEFT}
              y1={MARGIN_TOP}
              y2={1 - MARGIN_BOTTOM}
              stroke="currentColor"
              strokeWidth={LINE_WIDTH_2}
            />
          </RangeContext.Provider>
        </DomainContext.Provider>
      </svg>
      <div className="line-chart__y-title fade-in nowrap">{yAxisTitle}</div>
      <div className="line-chart__x-title fade-in nowrap">{xAxisTitle}</div>
    </div>
  );
}
