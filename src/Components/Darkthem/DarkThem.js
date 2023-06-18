import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../Navbar/Navbar";
function ToggleColorMode() {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  const themeConfig = createTheme({
    palette: {
      mode: theme ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={themeConfig}>
      <CssBaseline />
      <Navbar toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default ToggleColorMode;
