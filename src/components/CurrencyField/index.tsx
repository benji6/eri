import "./style.css";
import * as React from "react";
import Field from "../../privateComponents/Field";
import FieldError from "../../privateComponents/FieldError";
import FieldLabelText from "../../privateComponents/FieldLabelText";
import Label from "../../privateComponents/Label";
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
      <Label>
        <FieldLabelText optional={optional}>{label}</FieldLabelText>
        <SupportiveText>{supportiveText}</SupportiveText>
        <span className="currency-field__input-container relative">
          <input
            autoComplete="off"
            // When fields aren't in forms they should not be required
            // and do not need to be marked explicitly as optional,
            // hence the user can override this attribute
            required={!optional}
            {...rest}
            aria-invalid={Boolean(error)}
            className="currency-field__input"
            inputMode={integer ? "numeric" : "decimal"}
            pattern={integer ? "[0-9]*" : "[0-9]*"}
          />
        </span>
      </Label>
      <FieldError>{error}</FieldError>
    </Field>
  );
}
