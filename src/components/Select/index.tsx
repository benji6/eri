import "./style.css";
import * as React from "react";
import Field from "../../privateComponents/Field";
import FieldError from "../../privateComponents/FieldError";
import FieldLabel from "../../privateComponents/FieldLabel";
import Icon from "../Icon";
import SupportiveText from "../../privateComponents/SupportiveText";

export interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: React.ReactNode;
  label: React.ReactNode;
  optional?: boolean;
  supportiveText?: React.ReactNode;
}

export default function Select({
  error,
  label,
  optional = false,
  supportiveText,
  ...rest
}: IProps) {
  return (
    <Field>
      <label className="e-select__label">
        <FieldLabel optional={optional}>{label}</FieldLabel>
        <SupportiveText>{supportiveText}</SupportiveText>
        <span className="e-select__select-container">
          <select
            {...rest}
            aria-invalid={Boolean(error)}
            className="e-select__select"
            required={!optional}
          />
          <span className="e-select__icon">
            <Icon name="down" />
          </span>
        </span>
      </label>
      <FieldError>{error}</FieldError>
    </Field>
  );
}
