import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Pagination } from '../../../src'

export default function PaginationDocs(_: RouteComponentProps) {
  const [page3, setPage3] = React.useState(0)
  const [page4, setPage4] = React.useState(0)
  const [page10, setPage10] = React.useState(4)

  const handlePageChange3 = (page: number) => setPage3(page)
  const handlePageChange4 = (page: number) => setPage4(page)
  const handlePageChange10 = (page: number) => setPage10(page)

  return (
    <div e-util="slide-in">
      <h3>Pagination</h3>
      <p>Renders nothing when there are no pages</p>
      <Pagination
        onChange={() => {
          // empty
        }}
        page={0}
        pageCount={0}
      />
      <p>Page {page3 + 1} of 3 pages</p>
      <Pagination onChange={handlePageChange3} page={page3} pageCount={3} />
      <p>Page {page4 + 1} of 4 pages</p>
      <Pagination onChange={handlePageChange4} page={page4} pageCount={4} />
      <p>Page {page10 + 1} of 10 pages</p>
      <Pagination onChange={handlePageChange10} page={page10} pageCount={10} />
    </div>
  )
}
