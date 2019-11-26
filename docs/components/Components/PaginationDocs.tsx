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
        <p>
          Page buttons have a <code>data-page</code> attribute which specifies
          which page they navigate to. You can use this to add click handlers if
          you are not using React client side.
        </p>
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
