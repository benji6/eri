import "./style.css";
import * as React from "react";

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  stretch?: boolean;
}

export default function Label({ stretch, ...rest }: Props) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label {...rest} className={`label${stretch ? " label--stretch" : ""}`} />
  );
}
