import Profile from "./Profile/Profile";
import { Grid } from "@mui/material";

export default function Sidebar() {
  return (
    <Grid
      item
      md={1}
      sx={{
        backgroundColor: "background.paper",
        height: "100vh",
        position: "fixed",
        left: 1,
        top: 64,
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Profile />
    </Grid>
  );
}
