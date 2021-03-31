import "./style.css";
import * as React from "react";

export interface PaperGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  noSlide?: boolean;
}

export default function PaperGroup({ noSlide, ...rest }: PaperGroupProps) {
  return (
    <div
      {...rest}
      // padding used because margin cuts off the paper box-shadow
      className={`paper-group p-3${noSlide ? "" : " slide-children-in"}`}
    />
  );
}

PaperGroup.displayName = "Paper.Group";
