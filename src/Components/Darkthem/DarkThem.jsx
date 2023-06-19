import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useTranslation } from 'react-i18next';

function ToggleColorMode() {
  const [theme, setTheme] = useState(false);
  const {t} = useTranslation();

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
      <button onClick={toggleTheme}>{t("Dark Mode")}</button>
    </ThemeProvider>
  );
}

export default ToggleColorMode;
