import { Grid } from "@mui/material";

import Sidebar from "../Components/Sidebar/SideBar";
import TaskArea from "../Components/TaskArea/TaskArea";

export default function Dashboard() {
  return (
    <Grid container minHeight="100vh" p={0} m={0}>
      <Sidebar />
      <TaskArea />
    </Grid>
  );
}
