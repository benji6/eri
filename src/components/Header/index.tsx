import * as React from 'react'

interface IProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export default function Header(props: IProps) {
  return <header {...props} />
}
