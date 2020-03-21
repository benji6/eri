import * as React from 'react'
import ConfigurableExample, { PropControlNumber } from './_ConfigurableExample'
import { Pagination, Paper } from '../../../src'
import { IProps } from '../../../src/components/Pagination'
import { RouteComponentProps } from '@reach/router'

export default function PaginationDocs(_: RouteComponentProps) {
  const [childProps, setChildProps] = React.useState<IProps>({
    onChange(page) {
      setChildProps(currentProps => ({ ...currentProps, page }))
    },
    page: 4,
    pageCount: 64,
  })

  return (
    <Paper.Group>
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
    </Paper.Group>
  )
}
