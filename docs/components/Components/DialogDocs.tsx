import * as React from "react";
import { Button, Dialog, Paper } from "../../../src";
import { LOREM_IPSUM } from "../../constants";

export default function DialogDocs() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const handleDialogClose = () => setIsDialogOpen(false);
  const handleDialogOpen = () => setIsDialogOpen(true);

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
          {LOREM_IPSUM}
        </Dialog>
      </Paper>
    </Paper.Group>
  );
}
