import { Link, RouteComponentProps } from '@reach/router'
import * as React from 'react'

export default function ComponentsHome(_: RouteComponentProps) {
  return (
    <>
      <ul>
        <li>
          <Link to="button">Button</Link>
        </li>
        <li>
          <Link to="card">Card</Link>
        </li>
        <li>
          <Link to="dialog">Dialog</Link>
        </li>
        <li>
          <Link to="fab">Fab</Link>
        </li>
        <li>
          <Link to="form">Form</Link>
        </li>
        <li>
          <Link to="icon">Icon</Link>
        </li>
        <li>
          <Link to="link">Link</Link>
        </li>
        <li>
          <Link to="pagination">Pagination</Link>
        </li>
        <li>
          <Link to="spinner">Spinner</Link>
        </li>
      </ul>
    </>
  )
}
