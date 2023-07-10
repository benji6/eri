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
}

export default function ComboBox({
  label,
  error,
  optional = false,
  options,
  supportiveText,
  ...rest
}: IProps) {
  const dataListIdRef = React.useRef<string>(
    `combo-box-auto-generated-id-${Math.random().toString(36)}`,
  );

  return (
    <Field>
      <Label>
        <FieldLabelText optional={optional}>{label}</FieldLabelText>
        <SupportiveText>{supportiveText}</SupportiveText>
        <input
          // When fields aren't in forms they should not be required
          // and do not need to be marked explicitly as optional,
          // hence the user can override this attribute
          required={!optional}
          {...rest}
          aria-invalid={Boolean(error)}
          list={dataListIdRef.current}
        />
        <datalist id={dataListIdRef.current}>
          {options.map((option) => (
            <option key={option} value={option} />
          ))}
        </datalist>
      </Label>
      <FieldError>{error}</FieldError>
    </Field>
  );
}
