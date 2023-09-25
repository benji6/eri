import "./style.css";
import { CHART_ASPECT_RATIO, LINE_WIDTH_0, LINE_WIDTH_2 } from "../constants";
import { CSSProperties, HTMLAttributes } from "react";
import { DomainContext, RangeContext } from "../contexts";

const AXIS_LABEL_COUNT = 6;

interface IProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  domain: [number, number];
  range: [number, number];
  xAxisTitle?: string;
  xAxisLabels?: string[];
  yAxisTitle?: string;
  yAxisLabels?: string[];
}

export default function LineChart({
  children,
  domain,
  range,
  xAxisLabels = [...Array(AXIS_LABEL_COUNT).keys()].map((n) =>
    String(
      Math.round(
        (n / (AXIS_LABEL_COUNT - 1)) * (domain[1] - domain[0]) + domain[0],
      ),
    ),
  ),
  xAxisTitle,
  yAxisLabels = [...Array(AXIS_LABEL_COUNT).keys()].map((n) =>
    String(
      Math.round(
        (n / (AXIS_LABEL_COUNT - 1)) * (range[1] - range[0]) + range[0],
      ),
    ),
  ),
  yAxisTitle,
  ...rest
}: IProps) {
  return (
    <div {...rest} className="line-chart">
      <div className="line-chart__y-title fade-in nowrap">{yAxisTitle}</div>

      {/* y axis */}
      <div
        className="line-chart__y-axis"
        style={{ "--label-count": yAxisLabels.length } as CSSProperties}
      >
        {yAxisLabels.map((yLabel, i) => (
          <div
            className="line-chart__y-label fade-in"
            key={yLabel}
            style={{ "--label-number": i } as CSSProperties}
          >
            {yLabel}
          </div>
        ))}
      </div>
      <svg
        className="line-chart__plot-area"
        viewBox={`0 0 ${CHART_ASPECT_RATIO} 1`}
      >
        {/* x axis grid lines */}
        {xAxisLabels
          .map((_, i) => (i * CHART_ASPECT_RATIO) / (xAxisLabels.length - 1))
          .map((x) => (
            <line
              key={x}
              stroke="var(--color-balance)"
              strokeDasharray={LINE_WIDTH_2}
              strokeWidth={LINE_WIDTH_0}
              x1={x}
              x2={x}
              y1={0}
              y2={1}
            />
          ))}

        {/* y axis grid lines */}
        {yAxisLabels
          .map((_, i) => i / (yAxisLabels.length - 1))
          .map((y) => (
            <line
              key={y}
              stroke="var(--color-balance)"
              strokeDasharray={LINE_WIDTH_2}
              strokeWidth={LINE_WIDTH_0}
              x1={0}
              x2={CHART_ASPECT_RATIO}
              y1={y}
              y2={y}
            />
          ))}
        <DomainContext.Provider value={domain}>
          <RangeContext.Provider value={range}>
            <defs>
              <clipPath id="plot-area-clip-path">
                <rect x={0} y={0} height={1} width={CHART_ASPECT_RATIO} />
              </clipPath>
            </defs>
            <g clipPath="url(#plot-area-clip-path)">{children}</g>
          </RangeContext.Provider>
        </DomainContext.Provider>
      </svg>

      {/* x axis */}
      <div
        className="line-chart__x-axis"
        style={{ "--label-count": xAxisLabels.length } as CSSProperties}
      >
        {xAxisLabels.map((xLabel, i) => (
          <div
            className="line-chart__x-label fade-in"
            key={xLabel}
            style={{ "--label-number": i } as CSSProperties}
          >
            {xLabel}
          </div>
        ))}
      </div>
      <div className="line-chart__x-title fade-in nowrap">{xAxisTitle}</div>
    </div>
  );
}
