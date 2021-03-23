import "./style.css";
import * as React from "react";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  noSlide?: boolean;
}

export default function PaperGroup({ noSlide, ...rest }: IProps) {
  return (
    <div
      {...rest}
      // padding used because margin cuts off the paper box-shadow
      className={`e-paper-group grid p-3${noSlide ? "" : " slide-children-in"}`}
    />
  );
}

PaperGroup.displayName = "Paper.Group";
