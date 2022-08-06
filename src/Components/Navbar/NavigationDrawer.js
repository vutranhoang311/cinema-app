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
import { StyledNavLink } from "./NavbarStyles";

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

  return (
    <React.Fragment>
      <NavDrawer open={openDrawer} onClose={toggleDrawer} anchor="right">
        <List>
          {mainNavBarItems.map((item) => {
            return (
              <ListItemButton key={item.id}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <StyledNavLink
                  onClick={() => {
                    toggleDrawer();
                  }}
                  href=""
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={500}
                >
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {item.label}
                  </Typography>
                </StyledNavLink>
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
