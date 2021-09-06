import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App.jsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeSwitcherProvider } from "./contexts/ThemeSwitcher.jsx";

ReactDOM.render(
  <React.StrictMode>
    <ThemeSwitcherProvider>
      <CssBaseline />
      <App />
    </ThemeSwitcherProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
