import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./styles/global.css";
import { DefaultTheme } from "./styles/DefaultTheme";
import { ThemeProvider } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={DefaultTheme}>
    <App />
  </ThemeProvider>
);
