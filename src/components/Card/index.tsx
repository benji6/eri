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
        className="e-card"
      />
    );

  return (
    <button
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      aria-label="View card"
      className="e-card ripple"
      type="button"
    />
  );
}

Card.Group = CardGroup;
