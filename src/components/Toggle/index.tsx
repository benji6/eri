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
    <Field className="e-toggle relative">
      <label
        className={`e-toggle__label grid${
          disabled ? " e-toggle__label--disabled" : ""
        }`}
      >
        <input
          {...rest}
          aria-invalid={!!error}
          className="e-toggle__input absolute br-max"
          disabled={disabled}
          type="checkbox"
        />
        <span className="e-toggle__appearance br-max bw-2" />
        <span className="e-toggle__label-copy flex">{label}</span>
        <FieldError indent>{error}</FieldError>
      </label>
    </Field>
  );
}
