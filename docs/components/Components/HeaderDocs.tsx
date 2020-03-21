import * as React from 'react'
import ConfigurableExample, { PropControlString } from './_ConfigurableExample'
import { Header, MenuButton, Paper, PaperGroup } from '../../../src'
import { Link, RouteComponentProps } from '@reach/router'

export default function HeaderDocs(_: RouteComponentProps) {
  const [exampleProps, setExampleProps] = React.useState({
    title: 'Eri',
  })

  return (
    <PaperGroup>
      <Paper>
        <h2>Header</h2>
      </Paper>
      <ConfigurableExample
        example={
          <Header>
            <h1>
              <Link to="#">{exampleProps.title}</Link>
            </h1>
            <MenuButton />
          </Header>
        }
      >
        <PropControlString
          name="title"
          props={exampleProps}
          setProps={setExampleProps}
        />
      </ConfigurableExample>
    </PaperGroup>
  )
}
