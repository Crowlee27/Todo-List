import { SelectChangeEvent } from '@mui/material/Select';
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
    onChange?: (e: SelectChangeEvent)=> void;

}
}