import * as React from "react";
import { POINT_RADIUS } from "../constants";

interface Props {
  aspectRatio: number;
  color?: string;
  x: number;
  y: number;
}

export default function Point({
  aspectRatio,
  color = "var(--e-color-theme)",
  x,
  y,
}: Props) {
  return (
    <circle cx={x * aspectRatio} cy={1 - y} fill={color} r={POINT_RADIUS} />
  );
}
