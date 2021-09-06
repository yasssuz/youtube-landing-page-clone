import Home from "./Home";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { useContext } from "react";
import { ThemeSwitcherContext } from "../contexts/ThemeSwitcher";

function App() {
  const { darkMode } = useContext(ThemeSwitcherContext);
  const theme = createTheme({
    spacing: 4,
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#f44336",
      },
      secondary: {
        main: "#3EA6FF",
      },
      background: {
        default: darkMode ? "#232323" : "#fff",
        dark: darkMode ? "#181818" : "#f4f6f8",
        paper: darkMode ? "#232323" : "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
