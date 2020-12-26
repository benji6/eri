import "./style.css";
import * as React from "react";
import Field from "../../privateComponents/Field";
import FieldError from "../../privateComponents/FieldError";
import FieldLabel from "../../privateComponents/FieldLabel";
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
      <label className="e-image-upload__label">
        <FieldLabel optional={optional}>{label}</FieldLabel>
        <SupportiveText>{supportiveText}</SupportiveText>
        {imageUrl && (
          <img
            alt={`preview of ${imageName}`}
            className="e-image-upload__img"
            onLoad={handleLoad}
            src={imageUrl}
          />
        )}
        <input
          {...rest}
          accept="image/*"
          aria-invalid={Boolean(error)}
          className="e-image-upload__input"
          onChange={handleChange}
          required={!optional}
          type="file"
        />
      </label>
      <FieldError>{error}</FieldError>
    </Field>
  );
}
