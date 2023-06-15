import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function TaskSelect() {
    return (
        <FormControl fullWidth variant='standard' size='small'>
            <InputLabel id='statusLabel'>Status</InputLabel>
            <Select>
                <MenuItem >To Do 1</MenuItem>
                <MenuItem >To Do 2</MenuItem>
                <MenuItem >To Do 3</MenuItem>
            </Select>
        </FormControl>
    )
}