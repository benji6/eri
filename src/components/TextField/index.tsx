import "./style.css";
import * as React from "react";
import Field from "../../privateComponents/Field";
import FieldError from "../../privateComponents/FieldError";
import FieldLabel from "../../privateComponents/FieldLabel";
import SupportiveText from "../../privateComponents/SupportiveText";

export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: React.ReactNode;
  label: React.ReactNode;
  optional?: boolean;
  supportiveText?: React.ReactNode;
}

export default function TextField({
  label,
  error,
  optional = false,
  supportiveText,
  ...rest
}: IProps) {
  return (
    <Field>
      <label className="e-text-field__label">
        <FieldLabel optional={optional}>{label}</FieldLabel>
        <SupportiveText>{supportiveText}</SupportiveText>
        <input {...rest} aria-invalid={Boolean(error)} required={!optional} />
      </label>
      <FieldError>{error}</FieldError>
    </Field>
  );
}
