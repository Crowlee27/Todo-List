import { SelectChangeEvent } from "@mui/material/Select";
import { Status } from "./src/Components/Sidebar/TaskFormEnum/Status";
export {};

declare global {
  interface ITaskDate {
    value?: Date | null;
    onChange?: (date: Date | null) => void;
  }

  interface ITextField {
    id: string;
    name: string;
    label: string;
  }

  interface ISelectItems {
    value: string;
    label: string;
  }

  interface ISelectField {
    name: string;
    label: string;
    value: string;
    items: ISelectItems[];
    onChange?: (e: SelectChangeEvent) => void;
  }

  type TaskCounterStatusType = Status.todo | Status.inProgress | Status.done;

  interface ITaskCounter {
    count?: number;
    status?: TaskCounterStatusType;
  }
  interface ITaskHeader {
    title?: string;
    date?: Date;
  }

  interface ITaskFooter {
    onStatusChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onClick?: (
      e:
        | React.MouseEvent<HTMLButtonElement>
        | React.MouseEvent<HTMLAnchorElement>
    ) => void;
  }
  interface ITaskDescription {
    description?: string;
  }

  interface ITask extends ITaskHeader, ITaskDescription, ITaskFooter {
    id?: string;
    priority?: string;
    status?: string;
  }
}
