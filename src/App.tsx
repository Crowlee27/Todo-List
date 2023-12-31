import { useState } from "react";
import ThemeAppBar from "./Components/Sidebar/AppBar/AppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Dashboard from "./Dashboard/Dashboard";
import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


// create a client
const queryClient = new QueryClient();

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper style={{ height: "100vh", padding: 10, margin: 0 }}>
        <ThemeAppBar check={darkMode} change={() => setDarkMode(!darkMode)} />

        <Dashboard />
      </Paper>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  );
}

export default App;
