import { TextField } from "@mui/material";

export default function TaskDescription(props: ITextField) {
 

  return (
    <TextField
      {...props}
      fullWidth
      variant="standard"
      multiline
      rows={2}
    />
  );
}
