import { TextField } from "@mui/material";

export default function TaskDescription() {
  return (
    <TextField
      id="Description"
      label="Description"
      type="string"
      fullWidth
      variant="standard"
      multiline
      rows={2}
    />
  );
}
