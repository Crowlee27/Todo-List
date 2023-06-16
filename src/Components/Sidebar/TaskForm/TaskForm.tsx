import TaskDescription from "./TaskDescription";
import TaskTitle from "./TaskTitle";
import { Box } from "@mui/material";
import TaskDate from "./TaskDate";
import { Stack } from "@mui/material";
import TaskSelect from "./TaskSelect";
import { Status } from "../TaskFormEnum/Status";
import { Priority } from "../TaskFormEnum/Priority";

export default function TaskForm() {
  return (
    <Box>
      <Stack>
        <Stack marginBottom="25px">
          <TaskTitle id={"Task Title"} name={"Task Title"} label={"Task Title"}  />
          <TaskDescription id={"Description"} name={"Description"} label={"Description"} />
        </Stack>

        <TaskDate />
        <Stack direction="row" spacing={5}>
          <TaskSelect name={"Status"} label={"Status"} value={""} items={[
            {value: Status.todo,
            label: Status.todo},
            {
              value: Status.inProgress,
              label: Status.inProgress
            }
          ]} />
          <TaskSelect name={"Priority"} label={"Priority"} value={""} items={[
            {value: Priority.low,
              label: Priority.low},
              {
                value:Priority.normal,
                label: Priority.normal
              },
              {value: Priority.high,
                label: Priority.high}
          ]} />
        </Stack>
      </Stack>
    </Box>
  );
}
