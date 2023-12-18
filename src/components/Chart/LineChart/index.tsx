import "./style.css";
import { CHART_ASPECT_RATIO, LINE_WIDTH_0, LINE_WIDTH_2 } from "../constants";
import { CSSProperties, HTMLAttributes } from "react";
import { DomainContext, RangeContext } from "../contexts";

const AXIS_LABEL_COUNT = 6;

interface IProps extends HTMLAttributes<HTMLDivElement> {
  centerXAxisLabels?: boolean;
  children?: React.ReactNode;
  domain: [number, number];
  points?: { color?: string; x: number; y: number }[];
  range: [number, number];
  xAxisLabels?: string[];
  xAxisTitle?: string;
  yAxisLabels?: string[];
  yAxisTitle?: string;
}

export default function LineChart({
  centerXAxisLabels = false,
  children,
  domain,
  points,
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
    <div
      {...rest}
      className={`line-chart${
        centerXAxisLabels ? " line-chart--centered" : ""
      }`}
    >
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
      <div className="line-chart__plot-area">
        {points && (
          <>
            {points.map(({ color = "var(--color-theme)", x, y }, i) => (
              <div
                className="line-chart__point"
                key={[x, y].join(":")}
                style={
                  {
                    "--point-index": i,
                    "--total-points": points.length,
                    backgroundColor: color,
                    bottom: `calc(${
                      (y - range[0]) / (range[1] - range[0])
                    } * (100% - var(--border-width-1)) - var(--point-diameter) / 2 + var(--border-width-1))`,
                    left: `calc(${
                      (x - domain[0]) / (domain[1] - domain[0])
                    } * (100% - var(--border-width-1)) - var(--point-diameter) / 2 + var(--border-width-1))`,
                  } as CSSProperties
                }
              />
            ))}
          </>
        )}
        <svg
          className="line-chart__svg"
          viewBox={`0 0 ${CHART_ASPECT_RATIO} 1`}
        >
          {/* x axis grid lines */}
          {[...Array(xAxisLabels.length + Number(centerXAxisLabels)).keys()]
            .map(
              (i) =>
                (i * CHART_ASPECT_RATIO) /
                (xAxisLabels.length - Number(!centerXAxisLabels)),
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
      </div>

      {/* x axis */}
      <div
        className="line-chart__x-axis"
        style={{ "--label-count": xAxisLabels.length } as CSSProperties}
      >
        {xAxisLabels.map((xLabel, i) => (
          <div
            className={`line-chart__x-label fade-in${
              centerXAxisLabels ? " line-chart__x-label--centered" : ""
            }`}
            key={xLabel + i}
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
