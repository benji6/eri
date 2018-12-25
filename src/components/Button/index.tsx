import classnames from 'classnames'
import { History, LocationDescriptorObject, Path } from 'history' // tslint:disable-line no-implicit-dependencies
import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import './style.css'

type Props = RouteComponentProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    history: History
    sentiment?: 'negative'
    to?: LocationDescriptorObject | Path
    variant?: 'primary' | 'secondary'
  }

class Button extends React.Component<Props> {
  public render() {
    const {
      history,
      location,
      match,
      onClick,
      sentiment,
      staticContext,
      to,
      variant = 'primary',
      type = 'submit', // Formik gets grumpy if you don't specify this
      ...rest
    } = this.props
    const className = classnames(`e-button e-button--${variant}`, {
      'e-button--negative': sentiment === 'negative',
    })

    return (
      <button
        {...rest}
        className={className}
        onClick={e => {
          if (onClick) onClick(e)
          if (to) history.push(to as Path)
        }}
        type={type}
      />
    )
  }
}

export default withRouter(Button)
