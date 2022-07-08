import React from "react";
import { AppBar } from "@mui/material";
import { StyledNavLink, NavigationBar } from "./NavbarStyles";
import NavigationDrawer from "./NavigationDrawer";

const Navbar = () => {
  return (
    <AppBar position="relative">
      <NavigationBar>
        <StyledNavLink to="ticket">Mua vé</StyledNavLink>

        <StyledNavLink to="movies">Phim</StyledNavLink>

        <StyledNavLink to="cinemas">Rạp</StyledNavLink>

        <StyledNavLink to="members">Thành viên</StyledNavLink>
      </NavigationBar>
      <NavigationDrawer />
    </AppBar>
  );
};

export default Navbar;
