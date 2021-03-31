import "./style.css";
import * as React from "react";
import PaperGroup from "./PaperGroup";

export default function Paper(
  props: React.HTMLAttributes<HTMLButtonElement | HTMLDivElement>
) {
  return props.onClick ? (
    <button {...props} className="paper br-0 bs-0 p-3 ripple" type="button" />
  ) : (
    <div {...props} className="paper br-0 bs-0 p-3" />
  );
}

Paper.Group = PaperGroup;
