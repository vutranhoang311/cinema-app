import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
import {
  Logo,
  StyledToolbar,
  StyledAppBar,
  StyledPersonIcon,
  StyledLogIn,
  LogInBox,
} from "./HeaderStyles";
import galaxyLogo from "Assets/galaxy-logo.png";
import { Modal, Typography, Box } from "@mui/material";

const Header = () => {
  const [open, setOpenModal] = useState(false);
  const handleOpen = () => {
    setOpenModal(!open);
  };
  return (
    <StyledAppBar position="relative" color="transparent">
      <StyledToolbar>
        <Link to={""}>
          <Logo src={galaxyLogo} />
        </Link>

        <StyledLogIn onClick={handleOpen}>
          <StyledPersonIcon /> <Typography variant="p">Đăng nhập</Typography>
        </StyledLogIn>
      </StyledToolbar>

      <Modal
        open={open}
        onClose={handleOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <LogInBox>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </LogInBox>
      </Modal>
    </StyledAppBar>
  );
};

export default Header;
