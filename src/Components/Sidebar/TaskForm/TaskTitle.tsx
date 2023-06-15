import { TextField } from "@mui/material";

export default function TaskTitle() {
    return (
        <TextField
        autoFocus
          id="Title"
          label="Task Title"
          type="string"
          fullWidth
          variant="standard"/>
    )
}