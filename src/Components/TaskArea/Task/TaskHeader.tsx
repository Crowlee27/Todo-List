import { Chip, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function TaskHeader(props: ITaskHeader) {
  const { title = "Default Title", date = new Date() } = props;

  return (
    <Box display="flex" width="100%" justifyContent="space-between" mb={3}>
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip variant="outlined" label={new Date().toDateString()}></Chip>
      </Box>
    </Box>
  );
}
