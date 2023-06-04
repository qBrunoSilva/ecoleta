import React, { useState } from "react";

import { Collapse } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import { CaretCircleLeft, CaretDown, CaretUp } from "@phosphor-icons/react";

import { DefaultIcons } from "src/constants/Icons";
import { DefaultProperties } from "./Layout";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function DrawerComponent({ open, setOpen }: Props) {
  const theme = useTheme();

  const [openPainelCollapse, setOpenPainelCollapse] = useState(true);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      open={open}
      anchor="left"
      sx={{
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: DefaultProperties.drawerWidth,
          boxSizing: "border-box",
        },
      }}
      onClose={handleDrawerClose}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          py: 1,
        }}
      >
        <IconButton color="info" onClick={handleDrawerClose}>
          <CaretCircleLeft
            size={32}
            color={theme.palette.text.secondary}
            weight="fill"
          />
        </IconButton>
      </Box>
      <ListItem>
        <ListItemButton
          onClick={() => {
            setOpenPainelCollapse((open) => !open);
          }}
        >
          <ListItemText secondary="Painel" />
          {openPainelCollapse ? (
            <CaretUp
              size={12}
              color={theme.palette.text.secondary}
              weight="duotone"
            />
          ) : (
            <CaretDown
              size={12}
              color={theme.palette.text.secondary}
              weight="duotone"
            />
          )}
        </ListItemButton>
      </ListItem>
      <Collapse in={openPainelCollapse} timeout="auto" unmountOnExit>
        <List>
          <ListItem>
            <ListItemButton href="/produtos">
              <ListItemIcon>
                <DefaultIcons.ProductIcon
                  size={24}
                  color={theme.palette.text.secondary}
                  weight="duotone"
                />
              </ListItemIcon>
              <ListItemText primary="Produtos" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton href="/padrinhos">
              <ListItemIcon>
                <DefaultIcons.EmpresaIcon
                  size={24}
                  color={theme.palette.text.secondary}
                  weight="duotone"
                />
              </ListItemIcon>
              <ListItemText primary="Padrinhos" />
            </ListItemButton>
          </ListItem>
        </List>
      </Collapse>
    </Drawer>
  );
}
