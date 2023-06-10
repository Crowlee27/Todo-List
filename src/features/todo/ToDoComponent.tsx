import { List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function ToDoComponent() {
    return (
        <div>
            <h2>
                To Do List
            </h2>
            <div aria-label='create-to-do-section'>
                <Typography variant='h6'>Create New Todo</Typography>
                <div>
                    <TextField label={'New To Do Description'}/>
                </div>
            </div>
            <List>
                <ListItem>
                        Test todo
                </ListItem>
            </List>
        </div>
    )
}