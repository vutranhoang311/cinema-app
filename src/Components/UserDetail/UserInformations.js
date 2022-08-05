import { Button, TextField, Box } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { updateUser } from "Slices/authenticationSlice";

const ButtonLogin = styled(Button)`
  background-color: #fb4226;
`;
// Validation schema
const schema = yup.object({
  //   taiKhoan: yup
  //     .string()
  //     .required("Tài khoản không được để trống")
  //     .matches(
  //       /^[a-zA-Z0-9]{5,15}$/,
  //       "Tài khoản chỉ gồm chữ hoa, thường, số và từ 5 đến 15 ký tự"
  //     ),
  matKhau: yup.string().required("Mật khẩu không được để trống"),
  // .matches(
  //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //   "Mật khẩu ít nhất một chữ cái, một số và ít nhất 8 ký tự"
  // ),
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

const UserInformations = ({ userInformations }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: userInformations.taiKhoan,
      matKhau: "",
      email: userInformations.email,
      hoTen: userInformations.hoTen,
      soDT: userInformations.soDT,
    },
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const dispatch = useDispatch();

  const onSubmit = (user) => {
    const updatedUser = {
      taiKhoan: user.taiKhoan,
      matKhau: user.matKhau,
      email: user.email,
      soDt: user.soDT,
      hoTen: user.hoTen,
    };
    dispatch(updateUser(updatedUser));
  };

  const onError = (error) => {
    console.log(error);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="bg-white w-full md:w-[640px] flex flex-col justify-center items-center p-3  rounded">
        <div className="w-full md:w-[80%]">
          <h1 className="text-black font-extrabold mb-5">
            Thông tin tài khoản
          </h1>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <Box
              className="flex flex-col sm:flex-row sm:justify-between"
              //   style={{
              //     display: "flex",
              //     flexDirection: "row",
              //     justifyContent: "space-between",
              //   }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "100%",
                  marginRight: 8,
                }}
              >
                <TextField
                  id="taiKhoan"
                  label="Tài khoản *"
                  type="text"
                  disabled
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
                      <span className="text-[#ff0000]">
                        {errors.hoTen.message}
                      </span>
                    )
                  }
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <TextField
                  id="soDT"
                  label="Số điện thoại *"
                  type="text"
                  variant="outlined"
                  sx={{ marginBottom: 2 }}
                  {...register("soDT")}
                  helperText={
                    errors.soDT && (
                      <span className="text-[#ff0000]">
                        {errors.soDT.message}
                      </span>
                    )
                  }
                />
                <TextField
                  id="email"
                  label="Email *"
                  type="text"
                  disabled
                  variant="outlined"
                  sx={{ marginBottom: 2 }}
                  {...register("email")}
                  helperText={
                    errors.email && (
                      <span className="text-[#ff0000]">
                        {errors.email.message}
                      </span>
                    )
                  }
                />{" "}
              </div>
            </Box>
            <ButtonLogin
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "#fb4226" }}
            >
              Cập nhập thông tin
            </ButtonLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserInformations;
