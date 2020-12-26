import "./style.css";
import * as React from "react";
import Field from "../../privateComponents/Field";
import FieldError from "../../privateComponents/FieldError";
import FieldLabel from "../../privateComponents/FieldLabel";
import SupportiveText from "../../privateComponents/SupportiveText";

export interface IProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: React.ReactNode;
  label: React.ReactNode;
  optional?: boolean;
  supportiveText?: React.ReactNode;
}

export default function TextArea({
  label,
  error,
  optional = false,
  supportiveText,
  ...rest
}: IProps) {
  return (
    <Field>
      <label className="e-text-area__label">
        <FieldLabel optional={optional}>{label}</FieldLabel>
        <SupportiveText>{supportiveText}</SupportiveText>
        <textarea
          {...rest}
          aria-invalid={Boolean(error)}
          required={!optional}
        />
      </label>
      <FieldError>{error}</FieldError>
    </Field>
  );
}
