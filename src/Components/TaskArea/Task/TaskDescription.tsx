import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function TaskDescription(props: ITaskDescription) {
  const { description = "Default Description" } = props;

  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
}
