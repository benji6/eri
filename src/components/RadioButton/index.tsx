import "./style.css";
import { CSSProperties } from "react";
import RadioButtonGroup from "./RadioButtonGroup";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  children: React.ReactNode;
  color?: string;
}

export default function RadioButton({ children, color, ...rest }: IProps) {
  return (
    <label
      className="radio-button"
      style={color ? ({ "--color": color } as CSSProperties) : undefined}
    >
      <input {...rest} className="radio-button__input m-0" type="radio" />
      <div className="radio-button__appearance bw-2 center p-1">{children}</div>
    </label>
  );
}

RadioButton.Group = RadioButtonGroup;
