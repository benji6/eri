import "./style.css";
import { CSSProperties, Fragment, HTMLAttributes, Key, ReactNode } from "react";

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

interface ColumnWithdata {
  y: number;
  color?: string;
  label: ReactNode;
  key: Key;
  onClick?(): void;
  title?: string;
}

type ColumnWithoutData = Optional<ColumnWithdata, "y">;

interface Props extends HTMLAttributes<HTMLDivElement> {
  data: (ColumnWithoutData | ColumnWithdata)[];
  maxRange?: number;
  rotateXLabels?: boolean;
  xAxisTitle: string;
  yAxisTitle: string;
}

export default function ColumnChart({
  data,
  maxRange,
  rotateXLabels = false,
  xAxisTitle,
  yAxisTitle,
  ...rest
}: Props) {
  if (!data.length) return;

  let range: [number, number];
  if (maxRange === undefined) {
    const maxY = Math.max(
      ...(data.map(({ y }) => y).filter((y) => y !== undefined) as number[]),
    );
    range = [0, maxY <= 7 ? Math.ceil(maxY + 1) : Math.ceil(maxY / 10) * 10];
  } else range = [0, maxRange];
  const yLabels: number[] =
    range[1] <= 10
      ? [...Array(range[1] + 1).keys()]
      : [...Array(11).keys()].map((n) => Math.round((n / 10) * range[1]));

  return (
    <div
      {...rest}
      className="column-chart"
      style={{ "--column-count": data.length } as CSSProperties}
    >
      <div className="column-chart__grid-lines">
        {yLabels.slice(1).map((x) => (
          <div key={x} />
        ))}
      </div>
      <div className="column-chart__y-title fade-in nowrap">{yAxisTitle}</div>
      <div className="column-chart__x-title fade-in nowrap">{xAxisTitle}</div>
      <div className="column-chart__x-label" />
      <div
        className="column-chart__y-axis"
        style={{ "--y-label-count": yLabels.length } as CSSProperties}
      >
        {yLabels.map((yLabel, i) => (
          <div
            className="column-chart__y-label fade-in"
            key={yLabel}
            style={{ "--y-label-number": i } as CSSProperties}
          >
            {yLabel}
          </div>
        ))}
      </div>
      <div className="column-chart__x-label" />
      {data.map(({ color, key, label, onClick, title, y }, i) => {
        return (
          <Fragment key={key}>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions*/}
            <div
              className={`column-chart__column${
                onClick ? " column-chart__column--clickable" : ""
              }`}
              onClick={onClick}
              title={title}
              style={
                {
                  "--column-height": `${(100 * (y ?? 0)) / range[1]}%`,
                  "--column-number": i,
                  color:
                    // This is a hack to fix a bug that seems specific to Chrome
                    // where the bar appears visible during the rendering animation
                    y === undefined
                      ? "transparent"
                      : color ?? "var(--color-theme)",
                } as CSSProperties
              }
            />
            <div
              className={`column-chart__x-label fade-in${
                rotateXLabels ? " column-chart__x-label--rotate" : ""
              }`}
              style={
                {
                  "--x-label-number": i,
                } as CSSProperties
              }
              title={title}
            >
              {label}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
