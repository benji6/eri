import { RouteComponentProps, Link } from '@reach/router'
import * as React from 'react'
import { Paper, PaperGroup, Header, MenuButton } from '../../../src'
import ConfigurableExample, { PropControlString } from './_ConfigurableExample'

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
