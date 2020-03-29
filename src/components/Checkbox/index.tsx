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
    <Field className="e-checkbox">
      <label className="e-checkbox__label">
        <input
          {...rest}
          aria-invalid={!!error}
          className="e-checkbox__input"
          type="checkbox"
        />
        <span className="e-checkbox__appearance">
          <Icon name="check" size="2" />
        </span>
        <span className="e-checkbox__label-copy">{label}</span>
      </label>
      <FieldError>{error}</FieldError>
    </Field>
  );
}
