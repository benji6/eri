import * as React from "react";
import Field from "../../privateComponents/Field";
import FieldError from "../../privateComponents/FieldError";
import FieldLabelText from "../../privateComponents/FieldLabelText";
import Label from "../../privateComponents/Label";
import SupportiveText from "../../privateComponents/SupportiveText";

export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: React.ReactNode;
  label: React.ReactNode;
  optional?: boolean;
  options: string[];
  supportiveText?: React.ReactNode;
  stretch?: boolean;
}

export default function ComboBox({
  label,
  error,
  optional = false,
  options,
  supportiveText,
  stretch,
  ...rest
}: IProps) {
  const dataListId = React.useId();

  return (
    <Field>
      <Label stretch={stretch}>
        <FieldLabelText optional={optional}>{label}</FieldLabelText>
        <SupportiveText>{supportiveText}</SupportiveText>
        <input
          // When fields aren't in forms they should not be required
          // and do not need to be marked explicitly as optional,
          // hence the user can override this attribute
          required={!optional}
          {...rest}
          aria-invalid={Boolean(error)}
          list={dataListId}
        />
        <datalist id={dataListId}>
          {options.map((option) => (
            <option key={option} value={option} />
          ))}
        </datalist>
      </Label>
      <FieldError>{error}</FieldError>
    </Field>
  );
}
