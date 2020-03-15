import { Link, RouteComponentProps } from '@reach/router'
import * as React from 'react'

export default function ComponentLinks(
  props: RouteComponentProps & React.HTMLAttributes<HTMLAnchorElement>,
) {
  return (
    <nav>
      <ul>
        <li>
          <Link {...props} to="/components/button">
            Button
          </Link>
        </li>
        <li>
          <Link {...props} to="/components/card">
            Card
          </Link>
        </li>
        <li>
          <Link {...props} to="/components/dialog">
            Dialog
          </Link>
        </li>
        <li>
          <Link {...props} to="/components/fab">
            Fab
          </Link>
        </li>
        <li>
          <Link {...props} to="/components/form">
            Form
          </Link>
        </li>
        <li>
          <Link {...props} to="/components/header">
            Header
          </Link>
        </li>
        <li>
          <Link {...props} to="/components/icon">
            Icon
          </Link>
        </li>
        <li>
          <Link {...props} to="/components/link">
            Link
          </Link>
        </li>
        <li>
          <Link {...props} to="/components/main">
            Main
          </Link>
        </li>
        <li>
          <Link {...props} to="/components/pagination">
            Pagination
          </Link>
        </li>
        <li>
          <Link {...props} to="/components/paper">
            Paper
          </Link>
        </li>
        <li>
          <Link {...props} to="/components/share-button">
            ShareButton
          </Link>
        </li>
        <li>
          <Link {...props} to="/components/spinner">
            Spinner
          </Link>
        </li>
      </ul>
    </nav>
  )
}
