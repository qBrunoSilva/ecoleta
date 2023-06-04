import { Box } from "@mui/material";
import { DefaultProperties } from "src/styles/theme";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{ pt: `${DefaultProperties.headerHeight}px` }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      mt={2}
      bgcolor={"grey.200"}
    >
      {children}
    </Box>
  );
}
