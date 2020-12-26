import "./style.css";
import * as React from "react";
import Field from "../../../privateComponents/Field";
import FieldError from "../../../privateComponents/FieldError";
import FieldLabel from "../../../privateComponents/FieldLabel";
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
        className="e-radio-button-group"
      >
        <legend className="e-radio-button-group__legend">
          <FieldLabel optional={false}>{label}</FieldLabel>
        </legend>
        <div className="e-radio-button-group__container">{children}</div>
        <FieldError>{error}</FieldError>
      </fieldset>
    </Field>
  );
}

RadioButtonGroup.displayName = "RadioButton.Group";
