import ReactDOM from "react-dom/client";
import "./styles/global.css";
import { DefaultTheme } from "./styles/DefaultTheme";
import { Routes } from "./routes";
import { LocalizationProvider } from "@mui/x-date-pickers";
import ThemeProvider from "./contexts/ColorModeContext.tsx";

import ptBR from "date-fns/locale/pt-BR";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { NotificationProvider } from "./contexts/NotificationContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={DefaultTheme}>
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
      <NotificationProvider>
        <Routes />
      </NotificationProvider>
    </LocalizationProvider>
  </ThemeProvider>
);
