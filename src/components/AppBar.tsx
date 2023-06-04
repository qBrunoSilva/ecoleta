import { IconButton, Box } from "@mui/material";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { List } from "@phosphor-icons/react";

import { AppBarMUI } from "./AppBarMUI";
// import { LogoNavBar } from "./LogoNavBar";

interface Props extends MuiAppBarProps {
  handleToggleDrawer: () => void;
}

export function AppBarComponent({ handleToggleDrawer, ...props }: Props) {
  return (
    <>
      <AppBarMUI
        {...props}
        position="fixed"
        sx={{ bgcolor: "background.paper", border: "1px solid #e0e0e0" }}
        elevation={0}
      >
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              width: "50%",
              pl: 1,
              display: "flex",
            }}
          >
            <IconButton
              title="Abrir o Drawer"
              disableFocusRipple
              onClick={() => {
                handleToggleDrawer();
              }}
              color="primary"
            >
              <List weight="duotone" />
            </IconButton>
            {/* <LogoNavBar /> */}
            Logo
          </Box>
        </Box>
      </AppBarMUI>
    </>
  );
}
