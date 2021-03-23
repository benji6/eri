import * as React from "react";
import Field from "../../../privateComponents/Field";
import FieldError from "../../../privateComponents/FieldError";
import FieldLabelText from "../../../privateComponents/FieldLabelText";
import RadioButton from "..";

export interface IProps
  extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  children: Array<React.ReactElement<typeof RadioButton>>;
  disabled?: boolean;
  error?: React.ReactNode;
  label: React.ReactNode;
}

export default function RadioButtonGroup({
  error,
  label,
  children,
  ...rest
}: IProps) {
  return (
    <Field>
      <fieldset
        {...rest}
        aria-invalid={!!error}
        className="e-radio-button-group p-0"
      >
        <legend className="p-0">
          <FieldLabelText optional={false}>{label}</FieldLabelText>
        </legend>
        <div className="flex">{children}</div>
        <FieldError>{error}</FieldError>
      </fieldset>
    </Field>
  );
}

RadioButtonGroup.displayName = "RadioButton.Group";
