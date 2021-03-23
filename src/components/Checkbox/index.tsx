import "./style.css";
import * as React from "react";
import Field from "../../privateComponents/Field";
import FieldError from "../../privateComponents/FieldError";
import Icon from "../Icon";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: React.ReactNode;
  label: React.ReactNode;
}

export default function Checkbox({ label, error, ...rest }: IProps) {
  return (
    <Field className="e-checkbox relative">
      <label className="e-checkbox__label grid">
        <input
          {...rest}
          aria-invalid={!!error}
          className="e-checkbox__input absolute m-0"
          type="checkbox"
        />
        <span className="e-checkbox__appearance br-1 bw-2 inline-flex">
          <Icon name="check" size="2" />
        </span>
        <span className="e-checkbox__label-copy flex">{label}</span>
        <FieldError indent>{error}</FieldError>
      </label>
    </Field>
  );
}
