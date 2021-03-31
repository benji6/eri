import "./style.css";
import * as React from "react";
import Field from "../../privateComponents/Field";
import FieldError from "../../privateComponents/FieldError";

export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label: React.ReactNode;
}

export default function Toggle({ error, disabled, label, ...rest }: IProps) {
  return (
    <Field className="toggle">
      <label
        className={`toggle__label grid${
          disabled ? " toggle__label--disabled" : ""
        }`}
      >
        <input
          {...rest}
          aria-invalid={!!error}
          className="toggle__input br-max"
          disabled={disabled}
          type="checkbox"
        />
        <span className="toggle__appearance br-max bw-2" />
        <span className="toggle__label-copy flex">{label}</span>
        <FieldError indent>{error}</FieldError>
      </label>
    </Field>
  );
}
