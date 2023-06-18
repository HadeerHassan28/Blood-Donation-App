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
<<<<<<< HEAD
      <Navbar toggleTheme={toggleTheme} />
=======
      <button onClick={toggleTheme}>Dark Mode</button>
>>>>>>> d40eaeaa120c14858d4fa0448ce0b4c8576184eb
    </ThemeProvider>
  );
}

export default ToggleColorMode;
