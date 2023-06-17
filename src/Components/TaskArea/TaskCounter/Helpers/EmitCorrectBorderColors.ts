import { Status } from "../../../Sidebar/TaskFormEnum/Status";

export default function EmitCorrectBorderColors(status: TaskCounterStatusType) {
  switch (status) {
    case Status.todo:
      return "error.light";
    case Status.inProgress:
      return "warning.light";
    case Status.done:
      return "success.light";
  }
}
