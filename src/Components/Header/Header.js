import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import {
  Logo,
  StyledToolbar,
  StyledAppBar,
  StyledPersonIcon,
  StyledLogIn,
  ModalBox,
} from "./HeaderStyles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import LoginModal from "Components/LoginModal/LoginModal";
import NavigationDrawer from "Components/Navbar/NavigationDrawer";
import { Modal, Typography } from "@mui/material";
import useWindowSize from "hooks/useWindowSize";
import { useSelector } from "react-redux";
import MenuUser from "Components/MenuUser/MenuUser";
import Navbar from "Components/Navbar/Navbar";

const Header = () => {
  const { windowSize } = useWindowSize();
  const { currentUser } = useSelector((state) => state.authenticationSlice);
  const [open, setOpenModal] = useState(false);
  const handleOpen = () => {
    setOpenModal(!open);
  };

  return (
    <StyledAppBar
      sx={{
        position: "sticky",
        backgroundColor: "rgba(255,255,255,1) !important",
        top: 0,
        left: 0,
      }}
    >
      <StyledToolbar>
        <Link to={""}>
          <Logo />
        </Link>
        <Box>
          <Navbar />
        </Box>
        <Box sx={{ display: "flex" }}>
          {currentUser ? (
            <MenuUser currentUser={currentUser}></MenuUser>
          ) : (
            <StyledLogIn onClick={handleOpen}>
              <AccountCircleIcon sx={{ marginRight: 0.5 }} />
              <Typography variant="p">Đăng nhập</Typography>
            </StyledLogIn>
          )}

          {windowSize.width < 768 && <NavigationDrawer />}
        </Box>
      </StyledToolbar>
      <LoginModal open={open} handleOpen={handleOpen} />
    </StyledAppBar>
  );
};

export default Header;
