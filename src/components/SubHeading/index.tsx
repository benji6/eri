import * as React from 'react'
import './style.css'

interface IProps extends React.HTMLAttributes<HTMLSpanElement> {}

export default (props: IProps) => <span {...props} className="e-sub-heading" />
