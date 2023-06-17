import { Grid, Box } from "@mui/material";
import TaskCounter from "./TaskCounter/TaskCounter";
import Task from "./Task/Task";

export default function TaskArea() {
  const currentDate = new Date().toDateString();

  return (
    <Grid
      item
      md={11}
      px={4}
      sx={{
        backgroundColor: "background.paper",
        height: "100vh",
        position: "fixed",
        right: 0,
        top: 64,
        width: "100%",
      }}
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <h2>{"Tasks for " + currentDate}</h2>
      </Box>
      <Grid container display="flex" justifyContent="center">
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={11}
          xs={12}
          mb={8}
        >
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        <Grid item display="flex" flexDirection="column" xs={10} md={8}>
          <Task />
          <Task />
          <Task />
        </Grid>
      </Grid>
    </Grid>
  );
}
