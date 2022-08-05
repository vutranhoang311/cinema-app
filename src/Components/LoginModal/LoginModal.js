import {
  Alert,
  Box,
  Button,
  Modal,
  TextField,
  Backdrop,
  Fade,
} from "@mui/material";
import { ModalBox } from "Components/Header/HeaderStyles";
import React, { useEffect, useRef, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "Slices/authenticationSlice";
import Swal from "sweetalert2";

const ButtonLogin = styled(Button)`
  background-color: #fb4226;
`;
const NavLinkRegister = styled(NavLink)`
  &:hover {
    text-decoration: underline;
  }
`;

const LoginModal = ({ open, handleOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser, error } = useSelector(
    (state) => state.authenticationSlice
  );
  const { register, handleSubmit } = useForm({
    defaultValues: {
      taiKhoan: "tranhoangvu311",
      matKhau: "chip@0212",
    },
  });
  const onSubmit = (values) => {
    dispatch(signIn(values));
  };
  const onError = () => {};
  const isFirstRun = useRef(true);
  useEffect(() => {
    if (currentUser && !isFirstRun.current && currentUser !== null) {
      handleOpen();
      Swal.fire({
        icon: "success",
        title: "Đăng nhập thành công",
        text: `Xin chào ${currentUser.hoTen}`,
        showConfirmButton: true,
        timer: 1500,
        didClose: () => {},
      });
    }
    isFirstRun.current = false;
  }, [currentUser]);
  return (
    <Modal
      open={open}
      onClose={handleOpen}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <ModalBox>
          <Box sx={{ marginBottom: 2, textAlign: "center" }}>
            <AccountCircleIcon htmlColor="#fb4226" fontSize="large" />
            <h1 style={{ fontSize: 20, fontWeight: 700 }}>ĐĂNG NHẬP</h1>
          </Box>
          <Box sx={{ width: "100%", marginBottom: 2 }}>
            <form
              onSubmit={handleSubmit(onSubmit, onError)}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <TextField
                id="taiKhoan"
                label="Tài khoản"
                type="text"
                variant="outlined"
                sx={{ marginBottom: 2 }}
                {...register("taiKhoan")}
              />
              <TextField
                id="matKhau"
                label="Mật khẩu"
                type="password"
                variant="outlined"
                sx={{ marginBottom: 2 }}
                {...register("matKhau")}
              />{" "}
              {error && (
                <Alert
                  severity="error"
                  className="mb-4"
                  sx={{ marginBottom: 2 }}
                >
                  {error}
                </Alert>
              )}
              <ButtonLogin type="submit" variant="contained">
                ĐĂNG NHẬP
              </ButtonLogin>
            </form>
          </Box>
          <NavLinkRegister to="/member" onClick={handleOpen}>
            Bạn chưa có tài khoản? Đăng ký
          </NavLinkRegister>
        </ModalBox>
      </Fade>
    </Modal>
  );
};

export default LoginModal;
