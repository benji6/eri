import * as React from 'react'
import './style.css'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

export default class FieldError extends React.PureComponent<IProps> {
  public render() {
    const { children, ...rest } = this.props

    return children ? (
      <div {...rest} aria-live="polite" className="e-field-error">
        {children}
      </div>
    ) : null
  }
}
