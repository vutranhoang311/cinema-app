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
        <NavigationBar className="">
          <StyledNavLink
            href=""
            to="movie-showing"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Lịch chiếu
          </StyledNavLink>

          <StyledNavLink
            href=""
            to="cinema-showing"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Cụm rạp
          </StyledNavLink>

          <StyledNavLink
            href=""
            to="news-showing"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Tin tức
          </StyledNavLink>

          <StyledNavLink
            href=""
            to="application-showing"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Ứng dụng
          </StyledNavLink>
        </NavigationBar>
      );
    }
  };
  return navBarRender();
};

export default Navbar;
