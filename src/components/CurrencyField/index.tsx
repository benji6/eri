import * as React from 'react'
import FieldError from '../../privateComponents/FieldError'
import FieldLabel from '../../privateComponents/FieldLabel'
import './style.css'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: React.ReactNode
  integer?: boolean
  label: React.ReactNode
  onKeyPress?: any
  onPaste?: any
}

class CurrencyField extends React.Component<IProps> {
  shouldPreventInput = (potentialNewValue: string, event: KeyboardEvent) => {
    const potentialNewNumberValue = Number(potentialNewValue)
    const wouldBeNaN = isNaN(potentialNewNumberValue)
    const isOverTwoDecimalPlaces =
      String(potentialNewValue).length >
      potentialNewNumberValue.toFixed(2).length
    const isInteger =
      String(potentialNewValue).length ===
      potentialNewNumberValue.toFixed(0).length
    if (
      wouldBeNaN ||
      isOverTwoDecimalPlaces ||
      (this.props.integer && !isInteger)
    ) {
      event.preventDefault()
    }
  }

  handleKeyPress = (event: any) => {
    const { onKeyPress } = this.props
    if (typeof onKeyPress === 'function') onKeyPress(event)
    const value = (event.target as HTMLInputElement).value
    const { key: inputChar } = event
    this.shouldPreventInput(`${value}${inputChar}`, event)
  }

  handlePaste = (event: any) => {
    const { onPaste } = this.props
    if (typeof onPaste === 'function') onPaste(event)
    this.shouldPreventInput((event as any).clipboardData.getData('Text'), event)
  }

  render() {
    const { error, integer, label, ...rest } = this.props

    return (
      <div className="e-field">
        <label className="e-currency-field__label">
          <FieldLabel>{label}</FieldLabel>
          <span className="e-currency-field__input-container">
            <input
              autoComplete="off"
              required
              {...rest}
              aria-invalid={Boolean(error)}
              className="e-currency-field__input"
              inputMode={integer ? 'numeric' : 'decimal'}
              onKeyPress={this.handleKeyPress}
              onPaste={this.handlePaste}
              pattern={integer ? '[0-9]*' : undefined}
            />
          </span>
        </label>
        <FieldError>{error}</FieldError>
      </div>
    )
  }
}

export default CurrencyField
