import * as React from 'react'
import Icon from '../Icon'
import './style.css'

const maxPageButtons = 5
const halfMaxPageButtons = Math.floor(maxPageButtons / 2)

export interface IProps {
  page: number
  pageCount: number
  onChange(page: number): void
}

export default function Pagination({ page, pageCount, onChange }: IProps) {
  const pageNumbers = []
  const pageButtonCount = Math.min(pageCount, maxPageButtons)

  for (let i = 0; i < pageButtonCount; i++) {
    if (page <= halfMaxPageButtons) {
      pageNumbers.push(i)
    } else if (page >= pageCount - halfMaxPageButtons) {
      pageNumbers.push(i + pageCount - Math.min(maxPageButtons, pageCount))
    } else {
      pageNumbers.push(i + page - halfMaxPageButtons)
    }
  }

  return pageCount > 1 ? (
    <div className="e-pagination">
      {page !== 0 && (
        <button
          aria-label="navigate to previous page"
          className="pagination__button"
          data-page={page - 1}
          e-util="ripple"
          onClick={() => onChange(page - 1)}
          type="button"
        >
          <Icon name="left" />
        </button>
      )}
      {pageNumbers.map(i => (
        <button
          aria-label={`navigate to page ${i + 1}`}
          className="pagination__button"
          data-page={i}
          disabled={i === page}
          key={i}
          onClick={() => onChange(i)}
        >
          {i + 1}
        </button>
      ))}
      {page !== pageCount - 1 && (
        <button
          aria-label="navigate to next page"
          className="pagination__button"
          data-page={page + 1}
          e-util="ripple"
          onClick={() => onChange(page + 1)}
          type="button"
        >
          <Icon name="right" />
        </button>
      )}
    </div>
  ) : null
}
