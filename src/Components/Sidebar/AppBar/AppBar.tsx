import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";

export default function ThemeAppBar({ check, change }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="default" className="AppBar">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todo List
          </Typography>
          <Switch color="default" onChange={change} checked={check} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
