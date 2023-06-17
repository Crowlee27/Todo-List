import { Priority } from "../../../Sidebar/TaskFormEnum/Priority";

export default function RenderPriorityBorderColor(priority: string) {
  switch (priority) {
    case Priority.low:
      return "warning.light";
    case Priority.normal:
      return "error.light";
    case Priority.high:
      return "error";
  }
}
