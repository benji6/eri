import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Fab, Icon, Paper, PaperGroup, Toggle } from '../../../src'

export default function FabDocs(_: RouteComponentProps) {
  const [isFabVisible, setIsFabVisible] = React.useState(false)

  return (
    <PaperGroup>
      <Paper>
        <h2>Fab</h2>
        <p>The floating action button.</p>
        <Toggle
          checked={isFabVisible}
          label={isFabVisible ? 'Fab visible' : 'Fab hidden'}
          onChange={({ target }) =>
            target.checked ? setIsFabVisible(true) : setIsFabVisible(false)
          }
        />
        <Fab aria-label="example FAB" hide={!isFabVisible}>
          <Icon name="plus" size="4" />
        </Fab>
      </Paper>
    </PaperGroup>
  )
}
