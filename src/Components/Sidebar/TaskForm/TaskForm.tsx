import TaskDescription from "./TaskDescription";
import TaskTitle from "./TaskTitle";
import { Box } from "@mui/material";
import TaskDate from "./TaskDate";
import { Stack } from "@mui/material";
import TaskSelect from "./TaskSelect";

export default function TaskForm() {
  return (
    <Box>
      <Stack>
        <Stack marginBottom="25px">
          <TaskTitle />
          <TaskDescription />
        </Stack>

        <TaskDate />
        <Stack direction="row" spacing={5}>
          <TaskSelect />
          <TaskSelect />
        </Stack>
      </Stack>
    </Box>
  );
}
