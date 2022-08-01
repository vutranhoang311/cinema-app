import React from "react";
import { AppBar } from "@mui/material";
import { StyledNavLink, NavigationBar } from "./NavbarStyles";
import useWindowSize from "hooks/useWindowSize";
const Navbar = () => {
  const { windowSize } = useWindowSize();
  const navBarRender = () => {
    if (windowSize.width < 768) {
      return <></>;
    } else {
      return (
        <AppBar position="relative" className="bg-[#1a1a1a]">
          <NavigationBar className="bg-[#1a1a1a]">
            <StyledNavLink to="ticket">Mua vé</StyledNavLink>

            <StyledNavLink to="movie">Phim</StyledNavLink>

            <StyledNavLink to="cinema">Rạp</StyledNavLink>

            <StyledNavLink to="member">Thành viên</StyledNavLink>
          </NavigationBar>
        </AppBar>
      );
    }
  };
  return navBarRender();
};

export default Navbar;
