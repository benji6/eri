import "./style.css";
import * as React from "react";
import Field from "../../privateComponents/Field";
import FieldError from "../../privateComponents/FieldError";
import FieldLabelText from "../../privateComponents/FieldLabelText";
import Icon from "../Icon";
import Label from "../../privateComponents/Label";
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
      <Label>
        <FieldLabelText optional={optional}>{label}</FieldLabelText>
        <SupportiveText>{supportiveText}</SupportiveText>
        <span className="e-select__select-container">
          <select
            // When fields aren't in forms they should not be required
            // and do not need to be marked explicitly as optional,
            // hence the user can override this attribute
            required={!optional}
            {...rest}
            aria-invalid={Boolean(error)}
            className="e-select__select"
          />
          <span className="e-select__icon">
            <Icon name="down" size="2" />
          </span>
        </span>
      </Label>
      <FieldError>{error}</FieldError>
    </Field>
  );
}
