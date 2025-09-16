import * as React from "react";
import Field from "../../privateComponents/Field";
import FieldError from "../../privateComponents/FieldError";
import FieldLabelText from "../../privateComponents/FieldLabelText";
import Label from "../../privateComponents/Label";
import SupportiveText from "../../privateComponents/SupportiveText";

export interface IProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: React.ReactNode;
  label: React.ReactNode;
  optional?: boolean;
  supportiveText?: React.ReactNode;
  stretch?: boolean;
}

export default function TextArea({
  label,
  error,
  optional = false,
  supportiveText,
  stretch,
  ...rest
}: IProps) {
  return (
    <Field>
      <Label stretch={stretch}>
        <FieldLabelText optional={optional}>{label}</FieldLabelText>
        <SupportiveText>{supportiveText}</SupportiveText>
        <textarea
          // When fields aren't in forms they should not be required
          // and do not need to be marked explicitly as optional,
          // hence the user can override this attribute
          required={!optional}
          {...rest}
          aria-invalid={Boolean(error)}
        />
      </Label>
      <FieldError>{error}</FieldError>
    </Field>
  );
}
