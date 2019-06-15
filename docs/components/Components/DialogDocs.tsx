import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Button, ButtonGroup, Dialog } from '../../../src'

export default function DialogDocs(_: RouteComponentProps) {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false)
  const handleDialogClose = () => setIsDialogOpen(false)
  const handleDialogOpen = () => setIsDialogOpen(true)

  return (
    <div e-util="slide-in">
      <h3>Dialog</h3>
      <ButtonGroup>
        <Button onClick={handleDialogOpen}>Open dialog</Button>
      </ButtonGroup>
      <Dialog
        onClose={handleDialogClose}
        open={isDialogOpen}
        title="Test dialog"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Dialog>
    </div>
  )
}
