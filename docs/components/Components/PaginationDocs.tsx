import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Pagination } from '../../../src'
import { IProps } from '../../../src/components/Pagination'
import ConfigurableExample, { PropControlNumber } from './_ConfigurableExample'

export default function PaginationDocs(_: RouteComponentProps) {
  const [props, setProps] = React.useState<IProps>({
    page: 4,
    pageCount: 64,
    onChange(page) {
      setProps(currentProps => ({ ...currentProps, page }))
    },
  })

  return (
    <div e-util="slide-children-in">
      <section>
        <h2>Pagination</h2>
      </section>
      <ConfigurableExample example={<Pagination {...props} />}>
        <PropControlNumber
          max={props.pageCount - 1}
          name="page"
          props={props}
          setProps={setProps}
        />
        <PropControlNumber name="pageCount" props={props} setProps={setProps} />
      </ConfigurableExample>
    </div>
  )
}
