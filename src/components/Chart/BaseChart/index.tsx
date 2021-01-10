import "./style.css";
import * as React from "react";
import {
  CHART_ASPECT_RATIO,
  FONT_SIZE,
  LINE_WIDTH_2,
  MARGIN_RIGHT,
  MARGIN_TOP,
} from "../constants";
import {
  DomainContext,
  RangeContext,
  XAxisTitleContext,
  YAxisTitleContext,
} from "../contexts";
import { computeMarginBottom, computeMarginLeft } from "../utils";
import { usePlotAreaHeight, usePlotAreaWidth } from "../hooks";

interface IProps extends React.SVGProps<SVGSVGElement> {
  children: React.ReactNode;
  domain: [number, number];
  range: [number, number];
  xAxisTitle?: string;
  yAxisTitle?: string;
}

export default function BaseChart({
  children,
  domain,
  range,
  xAxisTitle,
  yAxisTitle,
  ...rest
}: IProps) {
  const marginBottom = computeMarginBottom(xAxisTitle);
  const marginLeft = computeMarginLeft(yAxisTitle);
  const plotAreaHeight = usePlotAreaHeight();
  const plotAreaWidth = usePlotAreaWidth();

  return (
    <svg
      {...rest}
      className="e-base-chart"
      viewBox={`0 0 ${CHART_ASPECT_RATIO} 1`}
      width="100%"
    >
      <DomainContext.Provider value={domain}>
        <RangeContext.Provider value={range}>
          <XAxisTitleContext.Provider value={xAxisTitle}>
            <YAxisTitleContext.Provider value={yAxisTitle}>
              {children}
            </YAxisTitleContext.Provider>
          </XAxisTitleContext.Provider>

          {/* x-axis */}
          <line
            x1={marginLeft}
            x2={CHART_ASPECT_RATIO - MARGIN_RIGHT}
            y1={1 - marginBottom}
            y2={1 - marginBottom}
            stroke="currentColor"
            strokeWidth={LINE_WIDTH_2}
          />

          {/* x-axis-title */}
          {xAxisTitle && (
            <text
              className="e-base-chart__axis-label"
              dy={FONT_SIZE * -0.2}
              fill="currentColor"
              textAnchor="middle"
              x={marginLeft + plotAreaWidth / 2}
              y={1}
            >
              {xAxisTitle}
            </text>
          )}

          {/* y-axis */}
          <line
            x1={marginLeft}
            x2={marginLeft}
            y1={MARGIN_TOP}
            y2={1 - marginBottom}
            stroke="currentColor"
            strokeWidth={LINE_WIDTH_2}
          />

          {/* y-axis-title */}
          {yAxisTitle && (
            <text
              className="e-base-chart__axis-label"
              dy={FONT_SIZE * 0.8}
              fill="currentColor"
              textAnchor="middle"
              transform={`rotate(270, 0, ${MARGIN_TOP + plotAreaHeight / 2})`}
              x={0}
              y={MARGIN_TOP + plotAreaHeight / 2}
            >
              {yAxisTitle}
            </text>
          )}
        </RangeContext.Provider>
      </DomainContext.Provider>
    </svg>
  );
}
