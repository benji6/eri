import "./style.css";
import * as React from "react";
import RadioButtonGroup from "./RadioButtonGroup";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  children: React.ReactNode;
}

export default function RadioButton({ children, ...rest }: IProps) {
  return (
    <label className="radio-button">
      <input {...rest} className="radio-button__input m-0" type="radio" />
      <div className="radio-button__appearance bw-2 center p-1">{children}</div>
    </label>
  );
}

RadioButton.Group = RadioButtonGroup;
