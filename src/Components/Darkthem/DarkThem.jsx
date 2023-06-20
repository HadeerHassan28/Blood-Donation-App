<<<<<<< HEAD:src/Components/Darkthem/DarkThem.js
// import { useState } from "react";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";

// function ToggleColorMode() {
//   const [theme, setTheme] = useState(false);
=======
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useTranslation } from 'react-i18next';

function ToggleColorMode() {
  const [theme, setTheme] = useState(false);
  const {t} = useTranslation();
>>>>>>> b02ec2b78ea6ad96cffb58316e8eca34b0da5ab7:src/Components/Darkthem/DarkThem.jsx

//   const toggleTheme = () => {
//     setTheme((prevTheme) => !prevTheme);
//   };

//   const themeConfig = createTheme({
//     palette: {
//       mode: theme ? "dark" : "light",
//     },
//   });

<<<<<<< HEAD:src/Components/Darkthem/DarkThem.js
//   return;
//      <ThemeProvider theme={themeConfig}>
//      <CssBaseline />
//       <button onClick={toggleTheme}>Toggle Theme</button>
//    </ThemeProvider>
// }
=======
  return (
    <ThemeProvider theme={themeConfig}>
      <CssBaseline />
      <button onClick={toggleTheme}>{t("Dark Mode")}</button>
    </ThemeProvider>
  );
}
>>>>>>> b02ec2b78ea6ad96cffb58316e8eca34b0da5ab7:src/Components/Darkthem/DarkThem.jsx

// export default ToggleColorMode;
