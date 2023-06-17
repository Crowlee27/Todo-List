import { Box } from "@mui/material";
import TaskHeader from "./TaskHeader";
import { Priority } from "../../Sidebar/TaskFormEnum/Priority";
import { Status } from "../../Sidebar/TaskFormEnum/Status";
import RenderPriorityBorderColor from "./Helpers/RenderPriorityBorderColor";
import TaskDescription from "./TaskDescription";
import TaskFooter from "./TaskFooter";

export default function Task(props: ITask) {
  const {
    title = "Test Title",
    date = new Date(),
    description = "Lorem ipsum dolor sit amet",
    priority = Priority.normal,
    status = Status.done,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={4}
      p={2}
      sx={{
        width: "100%",
        backgroundColor: "background.paper",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: RenderPriorityBorderColor(priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter onClick={onClick} onStatusChange={onStatusChange} />
    </Box>
  );
}
