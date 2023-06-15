import { Grid, Box, Typography } from "@mui/material";
import Profile from "../Sidebar/Profile/Profile";
import { CssBaseline } from "@mui/material";


export default function TaskArea() {
  return (
    <Grid
      item
      md={11}
      sx={{
        backgroundColor: "background.paper",
        height: "100vh",
        position: "fixed",
        right: 0,
        top: 64,
        width: "100%",
      }}
    >
     
      <h2>Task Area</h2>
        
    </Grid>
  );
}
