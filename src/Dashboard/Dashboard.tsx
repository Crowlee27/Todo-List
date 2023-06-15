import {Grid} from "@mui/material";
import ToDoComponent from "../features/todo/ToDoComponent";
import Sidebar from "../Components/Sidebar/SideBar";
import TaskArea from "../Components/TaskArea/TaskArea";
import {CssBaseline} from "@mui/material";


export default function Dashboard() {
    return (
        <Grid container minHeight="100vh" p={0} m={0}>
           
            <Sidebar/>
            <TaskArea/>
           
        </Grid>
    )
}