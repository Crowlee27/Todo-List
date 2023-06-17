import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function TaskSelect(props: ISelectField) {
  const {
    name = "StatusBox",
    label = "StatusBox",
    value = "",
    items = [{ value: "", label: "Add Items" }],
    onChange = (e: SelectChangeEvent) => console.log(e),
  } = props;

  return (
    <FormControl fullWidth variant="standard" size="small">
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
      <Select
        labelId={`${name}-id`}
        id={`${name}-id-select`}
        value={value}
        label={label}
        name={name}
        onChange={onChange}
      >
        {items.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
        )
      </Select>
    </FormControl>
  );
}
