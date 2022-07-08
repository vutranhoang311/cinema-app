import React from "react";
import { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";
const NavDrawer = styled(Drawer)``;

const NavigationDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <React.Fragment>
      <NavDrawer open={openDrawer} onClose={handleOpenDrawer} anchor="top">
        <List>
          <ListItemButton>
            <ListItemIcon>Login</ListItemIcon>
          </ListItemButton>
        </List>
      </NavDrawer>

      <IconButton onClick={handleOpenDrawer}>
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default NavigationDrawer;
