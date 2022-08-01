import React from "react";
import { Alert, Button, Modal, TextField, Typography } from "@mui/material";
import styled from "styled-components";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  registerNewUser,
  registerUserFinish,
} from "Slices/authenticationSlice";
import { Box } from "@mui/system";
import Swal from "sweetalert2";

const ButtonLogin = styled(Button)`
  background-color: #fb4226;
`;
const NavLinkRegister = styled(NavLink)`
  &:hover {
    text-decoration: underline;
  }
`;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
// Validation schema
const schema = yup.object({
  taiKhoan: yup
    .string()
    .required("Tài khoản không được để trống")
    .matches(
      /^[a-zA-Z0-9]{5,15}$/,
      "Tài khoản chỉ gồm chữ hoa, thường, số và từ 5 đến 15 ký tự"
    ),
  matKhau: yup
    .string()
    .required("Mật khẩu không được để trống")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Mật khẩu ít nhất một chữ cái, một số và ít nhất 8 ký tự"
    ),
  email: yup
    .string()
    .required("Email không được để trống")
    .email("Email không đúng định dạng"),
  hoTen: yup
    .string()
    .required("Không được để trống")
    .matches(
      /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
      "Chỉ được nhập chữ cái, không nhập số và ký tự đặc biệt"
    ),
  soDT: yup
    .string()
    .required("Không được để trống")
    .matches(
      /(03|05|07|08|09|01[2|6|8|9])+([0-9]{6,})\b/,
      "Số điện thoại không hợp lệ "
    ),
});

const RegisterForm = (props) => {
  const { error, isRegisterSuccess } = useSelector(
    (state) => state.authenticationSlice
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      soDT: "",
    },
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = (user) => {
    dispatch(registerNewUser(user));
  };
  const onError = (error) => {};
  if (isRegisterSuccess) {
    dispatch(registerUserFinish());
    Swal.fire({
      icon: "success",
      title: "Đăng ký thành công",
      showConfirmButton: true,
      timer: 1500,
      didClose: () => {
        navigate("/home");
      },
    });
    return;
  }

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="bg-white w-full md:w-[640px] flex flex-col justify-center items-center p-3 rounded">
        <VpnKeyIcon fontSize="large" htmlColor="#fb4226" />
        <h1 className="text-[20px] font-bold">Đăng ký</h1>
        <div className="w-full md:w-[80%] m-5">
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <TextField
              id="taiKhoan"
              label="Tài khoản *"
              type="text"
              variant="outlined"
              sx={{ marginBottom: 2 }}
              {...register("taiKhoan")}
              helperText={
                errors.taiKhoan && (
                  <span className="text-[#ff0000]">
                    {errors.taiKhoan.message}
                  </span>
                )
              }
            />
            <TextField
              id="matKhau"
              label="Mật khẩu *"
              type="password"
              variant="outlined"
              sx={{ marginBottom: 2 }}
              {...register("matKhau")}
              helperText={
                errors.matKhau && (
                  <span className="text-[#ff0000]">
                    {errors.matKhau.message}
                  </span>
                )
              }
            />
            <TextField
              id="hoTen"
              label="Họ tên *"
              type="text"
              variant="outlined"
              sx={{ marginBottom: 2 }}
              {...register("hoTen")}
              helperText={
                errors.hoTen && (
                  <span className="text-[#ff0000]">{errors.hoTen.message}</span>
                )
              }
            />
            <TextField
              id="soDT"
              label="Số điện thoại *"
              type="text"
              variant="outlined"
              sx={{ marginBottom: 2 }}
              {...register("soDT")}
              helperText={
                errors.soDT && (
                  <span className="text-[#ff0000]">{errors.soDT.message}</span>
                )
              }
            />
            <TextField
              id="email"
              label="Email *"
              type="text"
              variant="outlined"
              sx={{ marginBottom: 2 }}
              {...register("email")}
              helperText={
                errors.email && (
                  <span className="text-[#ff0000]">{errors.email.message}</span>
                )
              }
            />{" "}
            {error && (
              <Alert severity="error" className="mb-4">
                {error}
              </Alert>
            )}
            <ButtonLogin type="submit" variant="contained">
              ĐĂNG KÝ
            </ButtonLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
