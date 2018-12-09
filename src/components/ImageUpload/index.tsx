import * as React from 'react'
import Field from '../../privateComponents/Field'
import FieldError from '../../privateComponents/FieldError'
import FieldLabel from '../../privateComponents/FieldLabel'
import './style.css'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: React.ReactNode
  label: React.ReactNode
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface IState {
  imageName?: string
  imageUrl?: string
}

export default class ImageUpload extends React.PureComponent<IProps> {
  public state: IState = {
    imageName: undefined,
    imageUrl: undefined,
  }

  public render() {
    const { error, label, ...rest } = this.props
    const { imageName, imageUrl } = this.state

    return (
      <Field>
        <label className="e-image-upload__label">
          <FieldLabel>{label}</FieldLabel>
          {imageUrl && (
            <img
              alt={`preview of ${imageName}`}
              className="e-image-upload__img"
              onLoad={this.handleLoad}
              src={imageUrl}
            />
          )}
          <input
            required
            {...rest}
            accept="image/*"
            aria-invalid={Boolean(error)}
            className="e-image-upload__input"
            onChange={this.handleChange}
            type="file"
          />
        </label>
        <FieldError>{error}</FieldError>
      </Field>
    )
  }

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as FileList
    const { onChange } = this.props

    if (!files.length) {
      this.setState({ imageName: undefined, imageUrl: undefined })
    } else {
      const file = files[0]

      this.setState({
        imageName: file.name,
        imageUrl: URL.createObjectURL(file),
      })
    }

    if (onChange) onChange(e)
  }

  private handleLoad = ({
    target: { src },
  }: React.ChangeEvent<HTMLImageElement>) => URL.revokeObjectURL(src)
}
