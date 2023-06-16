import { TextField } from "@mui/material";

export default function TaskTitle(props: ITextField) {
  

  return (
    <TextField {...props}
      autoFocus
      type="string"
      fullWidth
      variant="standard"
    />
  );
}
