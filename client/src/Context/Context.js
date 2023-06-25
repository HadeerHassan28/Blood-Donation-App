import React, { useState } from "react";
import { createContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const conTheme = createContext();
const ContextTheme = (props) => {
  const [isTheme, setIsTheme] = useState(false);
  const toggleTheme = () => {
    setIsTheme((prevTheme) => !prevTheme);
    document.body.setAttribute("data-theme", isTheme ? "light" : "dark");
  };

  const themeConfig = createTheme({
    palette: {
      mode: isTheme ? "dark" : "light",
    },
  });
  const themes = {
    isTheme: isTheme,
    toggleTheme: toggleTheme,
    themeConfig: themeConfig,
  };

  return (
    <conTheme.Provider value={themes}>
      <ThemeProvider theme={themeConfig}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </conTheme.Provider>
  );
};
export default ContextTheme;
