import "./style.css";
import * as React from "react";
import Field from "../../privateComponents/Field";
import FieldError from "../../privateComponents/FieldError";
import FieldLabel from "../../privateComponents/FieldLabel";
import SupportiveText from "../../privateComponents/SupportiveText";

export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: React.ReactNode;
  integer?: boolean;
  label: React.ReactNode;
  optional?: boolean;
  supportiveText?: React.ReactNode;
}

export default function CurrencyField({
  error,
  integer,
  label,
  optional = false,
  supportiveText,
  ...rest
}: IProps) {
  return (
    <Field>
      <label className="e-currency-field__label">
        <FieldLabel optional={optional}>{label}</FieldLabel>
        <SupportiveText>{supportiveText}</SupportiveText>
        <span className="e-currency-field__input-container">
          <input
            autoComplete="off"
            {...rest}
            aria-invalid={Boolean(error)}
            className="e-currency-field__input"
            inputMode={integer ? "numeric" : "decimal"}
            required={!optional}
            pattern={integer ? "[0-9]*" : "[0-9]*"}
          />
        </span>
      </label>
      <FieldError>{error}</FieldError>
    </Field>
  );
}
