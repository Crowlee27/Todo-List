import TaskDescription from "./TaskDescription";
import TaskTitle from "./TaskTitle";
import { Box, LinearProgress, Alert, AlertTitle } from "@mui/material";
import TaskDate from "./TaskDate";
import { Stack } from "@mui/material";
import TaskSelect from "./TaskSelect";
import { Status } from "../TaskFormEnum/Status";
import { Priority } from "../TaskFormEnum/Priority";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { sendAPIRequest } from "../../../../src/helpers/SendAPIRequests";

export default function TaskForm() {
  // declare component state variables
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | null>(new Date());
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(Priority.normal
  );
  
  const createTaskMutation = useMutation((data: CreateTask) =>
    sendAPIRequest("http://localhost:5432/tasks", "POST", data)
  );

  const createTaskHandler = () => {
    if (!title || !description || !date) {
      return;
    }
    const task = {
      title,
      description,
      date: date.toString(),
      status,
      priority,
    };
    createTaskMutation.mutate(task);
  };

  

  return (
    <Box>
      <Stack>
        <Stack marginBottom="25px">
          <TaskTitle
            onChange={(e: any) => setTitle(e.target.value)}
            id={"Task Title"}
            name={"Task Title"}
            label={"Task Title"}
          />
          <TaskDescription
            onChange={(e: any) => setDescription(e.target.value)}
            id={"Description"}
            name={"Description"}
            label={"Description"}
          />
        </Stack>

        <TaskDate
          //value={date} //this is givving error for some reason. need to look into
          onChange={(date) => setDate(date)}
        />
        <Stack direction="row" spacing={5}>
          <TaskSelect
            name={"Status"}
            label={"Status"}
            value={status}
            onChange={(e) => setStatus(e.target.value as string)}
            items={[
              { value: Status.todo, label: Status.todo },
              {
                value: Status.inProgress,
                label: Status.inProgress,
              },
            ]}
          />
          <TaskSelect
            name={"Priority"}
            label={"Priority"}
            value={priority}
            onChange={(e) => setPriority(e.target.value as string)}
            items={[
              { value: Priority.low, label: Priority.low },
              {
                value: Priority.normal,
                label: Priority.normal,
              },
              { value: Priority.high, label: Priority.high },
            ]}
          />
        </Stack>
        <LinearProgress />
      </Stack>
    </Box>
  );
}
