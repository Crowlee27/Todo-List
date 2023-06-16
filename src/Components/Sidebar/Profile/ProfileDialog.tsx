import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import TaskForm from "../TaskForm/TaskForm";

import { DialogProps } from "@mui/material/Dialog";

export default function ProfileDialog({ open, handleClose }) {
  const [fullWidth] = useState(true);
  const [maxWidth] = useState<DialogProps["maxWidth"]>("lg");

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
    >
      <DialogTitle>New Task</DialogTitle>
      <DialogContent>
        <TaskForm />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
