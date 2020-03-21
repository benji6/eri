import * as React from 'react'
import { Button, Dialog, Paper } from '../../../src'
import { RouteComponentProps } from '@reach/router'

export default function DialogDocs(_: RouteComponentProps) {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false)
  const handleDialogClose = () => setIsDialogOpen(false)
  const handleDialogOpen = () => setIsDialogOpen(true)

  return (
    <Paper.Group>
      <Paper>
        <h2>Dialog</h2>
        <Button.Group>
          <Button onClick={handleDialogOpen}>Open dialog</Button>
        </Button.Group>
        <Dialog
          onClose={handleDialogClose}
          open={isDialogOpen}
          title="Test dialog"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Dialog>
      </Paper>
    </Paper.Group>
  )
}
