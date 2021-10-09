import "./style.css";
import * as React from "react";
import Field from "../../privateComponents/Field";
import FieldError from "../../privateComponents/FieldError";
import Icon from "../Icon";

export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: React.ReactNode;
  label: React.ReactNode;
}

export default function Checkbox({ label, error, ...rest }: IProps) {
  return (
    <Field className="checkbox">
      <label className="checkbox__label">
        <input
          {...rest}
          aria-invalid={!!error}
          className="checkbox__input m-0"
          type="checkbox"
        />
        <span className="checkbox__appearance br-1 bw-2">
          <Icon name="check" size="2" />
        </span>
        <span className="checkbox__label-copy">{label}</span>
        <FieldError indent>{error}</FieldError>
      </label>
    </Field>
  );
}
