import "./style.css";
import { CHART_ASPECT_RATIO, LINE_WIDTH_0, LINE_WIDTH_2 } from "../constants";
import { DomainContext, RangeContext } from "../contexts";
import { CSSProperties } from "react";

const AXIS_LABEL_COUNT = 6;

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
  const xLabels = [...Array(AXIS_LABEL_COUNT).keys()].map((n) =>
    Math.round((n / (AXIS_LABEL_COUNT - 1)) * domain[1] + domain[0]),
  );
  const yLabels = [...Array(AXIS_LABEL_COUNT).keys()].map((n) =>
    Math.round((n / (AXIS_LABEL_COUNT - 1)) * range[1] + range[0]),
  );
  return (
    <div className="line-chart">
      <div className="line-chart__y-title fade-in nowrap">{yAxisTitle}</div>

      {/* y axis */}
      <div
        className="line-chart__y-axis"
        style={{ "--label-count": yLabels.length } as CSSProperties}
      >
        {yLabels.map((yLabel, i) => (
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
        {...rest}
        className="line-chart__plot-area"
        viewBox={`0 0 ${CHART_ASPECT_RATIO} 1`}
      >
        {/* x axis grid lines */}
        {xLabels
          .map(
            (x) =>
              ((x - domain[0]) / (domain[1] - domain[0])) * CHART_ASPECT_RATIO,
          )
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
        {yLabels
          .map((y) => 1 - (y - range[0]) / (range[1] - range[0]))
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
        style={{ "--label-count": xLabels.length } as CSSProperties}
      >
        {xLabels.map((xLabel, i) => (
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
