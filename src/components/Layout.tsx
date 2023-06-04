import { Box } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import { LayoutWrapper } from "src/components/LayoutWrapper";
import { AppBarComponent } from "./AppBar";
export const DefaultProperties = {
  radius: 6,
  padding: 8,
  headerHeight: 80,
  drawerWidth: 300,
  colors: {
    neutral: "#64748b",
  },
};
// import { AppBarComponent } from "./AppBar";
import { DrawerComponent } from "./Drawer";

export function FoodLayout() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        sx={{ pt: `${DefaultProperties.headerHeight}px` }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height={"100vh"}
        mt={2}
        bgcolor={"grey.200"}
      >
        <AppBarComponent handleToggleDrawer={() => setOpen(!open)} />
        <DrawerComponent open={open} setOpen={setOpen} />

        <Outlet />
      </Box>
    </>
  );
}
