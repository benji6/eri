import "./style.css";
import * as React from "react";
import CardGroup from "./CardGroup";

type Props = { color?: string } & (
  | React.ButtonHTMLAttributes<HTMLButtonElement>
  | React.HTMLAttributes<HTMLDivElement>
);

export default function Card({ color, ...rest }: Props) {
  const props = color
    ? Object.assign(rest, { style: { "--color": color } })
    : rest;

  if (!props.onClick)
    return (
      <div
        {...(props as React.HTMLAttributes<HTMLDivElement>)}
        className="card br-1 bw-1 p-3"
      />
    );

  return (
    <button
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      aria-label="View card"
      className="card br-1 bw-1 p-3 ripple"
      type="button"
    />
  );
}

Card.Group = CardGroup;
