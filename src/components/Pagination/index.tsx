import * as React from 'react'
import Icon from '../Icon'
import './style.css'

interface IProps {
  onChange(page: number): void
  page: number
  pageCount: number
}

export default class Pagination extends React.PureComponent<IProps> {
  render() {
    const { page, pageCount, onChange } = this.props

    const range = []
    const pageButtonCount = Math.min(pageCount, 5)

    for (let i = 0; i < pageButtonCount; i++) range.push(i)

    return (
      pageCount > 1 && (
        <div className="e-pagination">
          {page !== 0 && (
            <button
              aria-label="navigate to previous page"
              className="pagination__button"
              onClick={() => onChange(page - 1)}
              type="button"
            >
              <Icon name="left" />
            </button>
          )}
          {range.map(i => (
            <button
              aria-label={`navigate to page ${i}`}
              className="pagination__button"
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
              onClick={() => onChange(page + 1)}
              type="button"
            >
              <Icon name="right" />
            </button>
          )}
        </div>
      )
    )
  }
}
