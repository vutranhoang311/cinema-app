import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";

import { mainNavBarItems } from "./navbarItems";

const NavDrawer = styled(Drawer)`
  background-color: transparent;
  color: green;
`;

const NavigationDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <React.Fragment>
      <NavDrawer open={openDrawer} onClose={toggleDrawer} anchor="top">
        <List>
          {mainNavBarItems.map((item) => {
            return (
              <ListItemButton
                key={item.id}
                onClick={() => {
                  handleNavigate(item.route);
                  toggleDrawer();
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {item.label}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            );
          })}
        </List>
      </NavDrawer>

      <IconButton onClick={toggleDrawer} sx={{}}>
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default NavigationDrawer;
