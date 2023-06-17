import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function TaskDate(props: ITaskDate) {
  // const {
  //     onChange = (date) => console.log(date),
  // } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        label="Due Date"
        {...props}
        // onChange={onChange}
      />
    </LocalizationProvider>
  );
}
