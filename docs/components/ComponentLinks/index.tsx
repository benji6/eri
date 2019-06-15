import { Link, RouteComponentProps } from '@reach/router'
import * as React from 'react'

export default function ComponentLinks(
  props: RouteComponentProps & React.HTMLAttributes<HTMLDivElement>,
) {
  return (
    <nav {...props}>
      <ul>
        <li>
          <Link to="/components/button">Button</Link>
        </li>
        <li>
          <Link to="/components/card">Card</Link>
        </li>
        <li>
          <Link to="/components/dialog">Dialog</Link>
        </li>
        <li>
          <Link to="/components/fab">Fab</Link>
        </li>
        <li>
          <Link to="/components/form">Form</Link>
        </li>
        <li>
          <Link to="/components/icon">Icon</Link>
        </li>
        <li>
          <Link to="/components/link">Link</Link>
        </li>
        <li>
          <Link to="/components/pagination">Pagination</Link>
        </li>
        <li>
          <Link to="/components/spinner">Spinner</Link>
        </li>
      </ul>
    </nav>
  )
}
