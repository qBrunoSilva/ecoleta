import { createTheme, tableCellClasses } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
    icon: Palette["primary"];
    financeiro: Palette["primary"];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
    icon?: PaletteOptions["primary"];
    financeiro?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
    icon: true;
  }
}

declare module "@mui/material/ButtonGroup" {
  interface ButtonGroupPropsColorOverrides {
    neutral: true;
    icon: true;
  }
}

export interface ITheme {
  colors: {
    light: {
      primary: string;
      secondary: string;
    };
    dark: {
      primary: string;
      secondary: string;
    };
    icon: {
      dark: string;
      light: string;
    };
  };
  palette: {
    mode: "dark" | "light";
  };
}

export const DefaultProperties = {
  radius: 6,
  padding: 8,
  headerHeight: 80,
  drawerWidth: 300,
  colors: {
    neutral: "#64748b",
  },
};

export const createDefaultTheme = (theme: ITheme) =>
  createTheme({
    shape: {
      borderRadius: DefaultProperties.radius,
    },
    palette: {
      mode: theme.palette.mode,
      financeiro: {
        light: "#4caf50",
        main: "#2e7d32",
        dark: "#1b5e20",
      },
      neutral: {
        main: DefaultProperties.colors.neutral,
      },
      icon: {
        main: theme.colors.icon[theme.palette.mode],
      },
      primary: {
        main:
          theme.palette.mode === "light"
            ? theme.colors.light.primary
            : theme.colors.dark.primary,
      },
      secondary: {
        main:
          theme.palette.mode === "light"
            ? theme.colors.light.primary
            : theme.colors.dark.secondary,
      },
      background: {
        default: theme.palette.mode === "light" ? "#fcfcfc" : "#0D1117",
        paper: theme.palette.mode === "light" ? "#fcfcfc" : "#0D1117",
      },
    },
    typography: {
      fontFamily: "Signika, sans-serif",
      h1: {
        fontSize: "2.875rem",
      },
      h2: {
        fontSize: "2.325rem",
      },
      h3: {
        fontSize: "1.875rem",
      },
      h4: {
        fontSize: "1.325rem",
      },
      h5: {
        fontSize: "1.125rem",
      },
      subtitle1: {
        fontSize: "1rem",
      },
      subtitle2: {
        fontSize: "0.875rem",
      },
      body1: {
        fontSize: "0.875rem",
      },
      body2: {
        fontSize: "0.875rem",
      },
      button: {
        fontSize: "0.875rem",
      },
      caption: {
        fontSize: "0.75rem",
      },
    },
    components: {
      MuiTooltip: {
        defaultProps: {
          arrow: true,
          sx: {
            fontSize: 12,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: DefaultProperties.radius,
            padding: DefaultProperties.padding,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: DefaultProperties.radius,
          },
        },
      },
      MuiButton: {
        defaultProps: {
          variant: "contained",
        },
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: DefaultProperties.radius,
            padding: `${DefaultProperties.padding}px undefined`,
          },
          startIcon: {
            marginRight: 4,
            marginLeft: 2,
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paperAnchorLeft: {
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0,
          },
        },
      },
      MuiList: {
        defaultProps: {
          disablePadding: true,
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            borderRadius: DefaultProperties.radius,
            height: 50,
          },
        },
      },
      MuiListItem: {
        defaultProps: {
          disableGutters: true,
        },

        styleOverrides: {
          padding: {
            paddingTop: 0,
            paddingBottom: 0,
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            alignItems: "center",

            backgroundColor: "primary",
            "&.Mui-selected": {
              color: "white",

              "&:hover": {
                backgroundColor: "secondary",
              },
            },
          },
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            minWidth: "auto",
            marginRight: 16,
          },
        },
      },
      MuiAppBar: {
        defaultProps: {
          elevation: 1,
        },
        styleOverrides: {
          root: {
            backgroundColor: "primary",
            borderRadius: 0,
            height: DefaultProperties.headerHeight,
          },
        },
      },
      MuiLink: {
        defaultProps: {
          variant: "inherit",
          underline: "none",
          color: "inherit",
        },
        styleOverrides: {
          root: {
            display: "flex",
            alignItems: "center",
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: DefaultProperties.radius,
            padding: `${DefaultProperties.padding}px undefined`,
            minHeight: "auto",
          },
        },
        defaultProps: {
          iconPosition: "start",
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiButtonBase-root.MuiAutocomplete-clearIndicator": {
              color: "error",
              visibility: "visible",
            },
            borderRadius: DefaultProperties.radius,
          },
        },
        defaultProps: {
          size: "medium",
          fullWidth: true,
          inputProps: {
            maxLength: 200,
            style: {
              color: "primary",
            },
          },
        },
      },
      MuiTable: {
        defaultProps: {},
        styleOverrides: {
          root: {
            borderRadius: DefaultProperties.radius,
            padding: 0,
            width: "100%",
            "& td": {
              padding: "0 16px",
              // padding: 0
            },
          },
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: {},
        },
        defaultProps: {
          sx: {
            "& .MuiTableCell-root": {
              borderBottom: "thin solid #E0E0E0",
            },
          },
        },
      },
      MuiTableCell: {
        defaultProps: {
          align: "left",
          sx: {
            [`&.${tableCellClasses.head}`]: {
              backgroundColor: "action.selected",
              fontWeight: "bold",
            },
            [`&.${tableCellClasses.body}`]: {
              // fontSize: "0.875rem"
              fontWeight: 300,
            },
            minWidth: {
              // xs: 200,
              // md: "auto"
            },
          },
        },

        styleOverrides: {},
      },
      MuiTableRow: {
        defaultProps: {
          sx: {
            "&:nth-of-type(odd)": {
              bgcolor: "action.hover",
            },
          },
        },
      },
      MuiTableContainer: {
        // defaultProps: {
        //   sx: {
        //     borderRadius: 2,
        //   },
        // },
        styleOverrides: {
          root: {
            borderRadius: DefaultProperties.radius,
          },
        },
      },
      MuiDialog: {
        defaultProps: {
          fullWidth: true,
        },
        styleOverrides: {
          paper: {
            borderRadius: DefaultProperties.radius,
          },
        },
      },
      MuiDialogTitle: {
        styleOverrides: {
          root: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            textAlign: "center",
            borderBottom: "thin solid",
            gap: 4,
            padding: "24px 8px",
          },
        },
        defaultProps: {
          sx: {
            borderColor: "divider",
          },
        },
      },
      MuiDialogContent: {
        defaultProps: {
          sx: {
            paddingY: 2,
          },
        },
      },
      MuiDialogActions: {
        defaultProps: {
          sx: {
            display: "flex",
            justifyContent: "center",
            borderColor: "divider",
          },
        },
        styleOverrides: {
          root: {
            borderTop: "1px solid",
            padding: "24px 8px",
          },
        },
      },
      MuiStack: {
        defaultProps: {
          spacing: 1,
        },
      },
      MuiSnackbar: {
        defaultProps: {
          autoHideDuration: 3000,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right",
          },
        },
      },
      MuiAlert: {
        defaultProps: {
          elevation: 6,
          variant: "filled",
          sx: {
            color: "white",
          },
        },
      },
      MuiAutocomplete: {
        defaultProps: {
          sx: {
            p: 0,
            m: 0,
          },
          clearText: "Limpar",
          closeText: "Fechar",
          loadingText: "Carregando...",
          noOptionsText: "Nenhum resultado encontrado",
          openText: "Abrir",
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            padding: 7,
            "& .MuiSwitch-track": {
              borderRadius: 22 / 2,
              "&:before, &:after": {
                // eslint-disable-next-line quotes
                content: '""',
                position: "absolute",
                transform: "translateY(-50%)",
                width: 16,
                height: 16,
              },
              "&:before": {
                left: 12,
              },
              "&:after": {
                right: 12,
              },
              backgroundColor: "error.main",
            },
            "& .MuiSwitch-thumb": {
              width: 16,
              height: 16,
              margin: 2,
            },
          },
        },
      },
      MuiPagination: {
        defaultProps: {
          color: "standard",
          shape: "rounded",
          variant: "outlined",
        },
      },
    },
  });
