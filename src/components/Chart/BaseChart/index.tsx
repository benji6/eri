import "./style.css";
import * as React from "react";
import {
  CHART_ASPECT_RATIO,
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
import { computeMarginBottom, computeMarginTop } from "../utils";
import { usePlotAreaHeight, usePlotAreaWidth } from "../hooks";

interface IProps {
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
}: IProps) {
  const marginBottom = computeMarginBottom(xAxisTitle);
  const marginLeft = computeMarginTop(yAxisTitle);
  const plotAreaHeight = usePlotAreaHeight();
  const plotAreaWidth = usePlotAreaWidth();

  return (
    <svg
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
              dominantBaseline="text-after-edge"
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
              dominantBaseline="text-before-edge"
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
