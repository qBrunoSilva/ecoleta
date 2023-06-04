import { styled } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { DefaultProperties } from "./Layout";

export const AppBarMUI = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<MuiAppBarProps>(() => ({
  height: DefaultProperties.headerHeight,
  display: "flex",
  justifyContent: "center",
  borderRadius: 0,
}));
