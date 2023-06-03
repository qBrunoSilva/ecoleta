import { useState, useMemo, createContext, useLayoutEffect } from "react";

import { CssBaseline, useMediaQuery } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ITheme, createDefaultTheme } from "src/styles/theme";

interface Props {
  children: React.ReactNode;
  theme: ITheme;
}

interface ColorModeContextData {
  toggleColorMode: () => void;
  mode: "light" | "dark" | "system";
  selectMode: (mode: "light" | "dark" | "system") => void;
}

export const ColorModeContext = createContext({} as ColorModeContextData);

export default function ThemeProvider({ children, theme }: Props) {
  const [mode, setMode] = useState<"light" | "dark" | "system">("system");
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useLayoutEffect(() => {
    const localMode = localStorage.getItem("mode");

    if (localMode) {
      setMode("light");
      // setMode(localMode as "light" | "dark" | "system");
    } else {
      setMode("light");
      // setMode("system");
    }
  }, [prefersDarkMode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        localStorage.setItem(
          "mode",
          mode === "system"
            ? prefersDarkMode
              ? "light"
              : "dark"
            : mode === "light"
            ? "dark"
            : "light"
        );
        setMode(
          mode === "system"
            ? prefersDarkMode
              ? "light"
              : "dark"
            : mode === "light"
            ? "dark"
            : "light"
        );
      },
    }),
    [mode, prefersDarkMode]
  );

  function selectMode(mode: "light" | "dark" | "system") {
    setMode(mode);
    localStorage.setItem("mode", mode);
  }

  const systemTheme = useMemo(
    () =>
      createDefaultTheme({
        ...theme,
        palette: {
          ...theme.palette,
          mode: mode === "system" ? (prefersDarkMode ? "dark" : "light") : mode,
        },
        colors: {
          ...theme.colors,
          icon: theme.colors.icon,
        },
      }),
    [mode, prefersDarkMode, theme]
  );

  return (
    <ColorModeContext.Provider
      value={{
        mode,
        toggleColorMode: colorMode.toggleColorMode,
        selectMode,
      }}
    >
      <MuiThemeProvider theme={systemTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
}
