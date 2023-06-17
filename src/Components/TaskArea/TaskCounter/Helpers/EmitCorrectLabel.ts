import { Status } from "../../../Sidebar/TaskFormEnum/Status";

export default function EmitCorrectLabel(status: TaskCounterStatusType) {
  switch (status) {
    case Status.todo:
      return "Todo";
    case Status.inProgress:
      return "In Progress";
    case Status.done:
      return "Done";
  }
}
