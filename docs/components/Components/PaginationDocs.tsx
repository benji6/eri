import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Pagination, Paper, PaperGroup } from '../../../src'
import { IProps } from '../../../src/components/Pagination'
import ConfigurableExample, { PropControlNumber } from './_ConfigurableExample'

export default function PaginationDocs(_: RouteComponentProps) {
  const [childProps, setChildProps] = React.useState<IProps>({
    page: 4,
    pageCount: 64,
    onChange(page) {
      setChildProps(currentProps => ({ ...currentProps, page }))
    },
  })

  return (
    <PaperGroup>
      <Paper>
        <h2>Pagination</h2>
      </Paper>
      <ConfigurableExample example={<Pagination {...childProps} />}>
        <PropControlNumber
          max={childProps.pageCount - 1}
          name="page"
          props={childProps}
          setProps={setChildProps}
        />
        <PropControlNumber
          name="pageCount"
          props={childProps}
          setProps={setChildProps}
        />
      </ConfigurableExample>
    </PaperGroup>
  )
}
