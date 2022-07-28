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
import NavigationDrawer from "Components/Navbar/NavigationDrawer";

import { Modal, Typography } from "@mui/material";
import useWindowSize from "hooks/useWindowSize";

const Header = () => {
  const { windowSize } = useWindowSize();

  const [open, setOpenModal] = useState(false);
  const handleOpen = () => {
    setOpenModal(!open);
  };

  return (
    <StyledAppBar
      sx={{
        position: "sticky",
        backgroundColor: "rgba(255,255,255,0.95) !important",
        top: 0,
        left: 0,
      }}
    >
      <StyledToolbar>
        <Link to={""}>
          <Logo />
        </Link>
        <Box sx={{ display: "flex" }}>
          {windowSize.width > 768 ? (
            <StyledLogIn onClick={handleOpen}>
              <StyledPersonIcon />{" "}
              <Typography variant="p">Đăng nhập</Typography>
            </StyledLogIn>
          ) : (
            <NavigationDrawer />
          )}
        </Box>
      </StyledToolbar>

      <Modal open={open} onClose={handleOpen}>
        <ModalBox>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </ModalBox>
      </Modal>
    </StyledAppBar>
  );
};

export default Header;
