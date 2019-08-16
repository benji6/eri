import * as React from 'react'

export default function Header(
  props: React.HtmlHTMLAttributes<HTMLDivElement>,
) {
  return (
    <header>
      <div {...props} />
    </header>
  )
}
