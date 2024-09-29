import "./style.css";
import * as React from "react";
import PaperGroup from "./PaperGroup";

export default function Paper(
  props: React.HTMLAttributes<HTMLButtonElement | HTMLDivElement>,
) {
  /* eslint-disable-next-line react/prop-types */
  return props.onClick ? (
    <button {...props} className="paper bs-0 p-3 ripple" type="button" />
  ) : (
    <div {...props} className="paper bs-0 p-3" />
  );
}

Paper.Group = PaperGroup;
