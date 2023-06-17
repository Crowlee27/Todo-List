import { useState } from "react";
import ThemeAppBar from "./Components/Sidebar/AppBar/AppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Dashboard from "./Dashboard/Dashboard";
import { CssBaseline } from "@mui/material";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper style={{ height: "100vh", padding: 10, margin: 0 }}>
        <ThemeAppBar check={darkMode} change={() => setDarkMode(!darkMode)} />

        <Dashboard />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
