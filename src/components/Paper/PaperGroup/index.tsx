import "./style.css";
import * as React from "react";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  noSlide?: boolean;
}

export default function PaperGroup({ noSlide, ...rest }: IProps) {
  return (
    <div
      {...rest}
      className={`e-paper-group${noSlide ? "" : " slide-children-in"}`}
    />
  );
}

PaperGroup.displayName = "Paper.Group";
