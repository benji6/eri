import "./style.css";
import * as React from "react";
import Field from "../../privateComponents/Field";
import FieldError from "../../privateComponents/FieldError";
import FieldLabelText from "../../privateComponents/FieldLabelText";
import Label from "../../privateComponents/Label";
import SupportiveText from "../../privateComponents/SupportiveText";

export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: React.ReactNode;
  label: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  optional?: boolean;
  supportiveText?: React.ReactNode;
}

interface IState {
  imageName?: string;
  imageUrl?: string;
}

const handleLoad = ({ target: { src } }: React.ChangeEvent<HTMLImageElement>) =>
  URL.revokeObjectURL(src);

export default function ImageUpload({
  error,
  label,
  onChange,
  optional = false,
  supportiveText,
  ...rest
}: IProps) {
  const [{ imageName, imageUrl }, setState] = React.useState<IState>({
    imageName: undefined,
    imageUrl: undefined,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as FileList;

    if (!files.length) {
      setState({ imageName: undefined, imageUrl: undefined });
    } else {
      const file = files[0];

      setState({
        imageName: file.name,
        imageUrl: URL.createObjectURL(file),
      });
    }

    if (onChange) onChange(e);
  };

  return (
    <Field>
      <Label>
        <FieldLabelText optional={optional}>{label}</FieldLabelText>
        <SupportiveText>{supportiveText}</SupportiveText>
        {imageUrl && (
          <img
            alt={`preview of ${imageName}`}
            className="e-image-upload__img bw-2"
            onLoad={handleLoad}
            src={imageUrl}
          />
        )}
        <input
          // When fields aren't in forms they should not be required
          // and do not need to be marked explicitly as optional,
          // hence the user can override this attribute
          required={!optional}
          {...rest}
          accept="image/*"
          aria-invalid={Boolean(error)}
          className="inline-flex"
          onChange={handleChange}
          type="file"
        />
      </Label>
      <FieldError>{error}</FieldError>
    </Field>
  );
}
