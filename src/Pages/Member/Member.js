import React, { useEffect } from "react";
import { Paper, Container, Box } from "@mui/material";
import RegisterForm from "Components/RegisterForm/RegisterForm";
import backgroundCinema from "Assets/background.jpg";
import { useDispatch, useSelector } from "react-redux";
import UserDetail from "Components/UserDetail/UserDetail";
import { getCurrentUser } from "Slices/authenticationSlice";

const Member = () => {
  const { currentUser, accessToken } = useSelector(
    (state) => state.authenticationSlice
  );
  return (
    <Box sx={{ backgroundImage: `url(${backgroundCinema})` }} className="py-2">
      <Container>
        {currentUser?.accessToken ? (
          <UserDetail currentUser={currentUser} accessToken={accessToken} />
        ) : (
          <RegisterForm />
        )}
      </Container>
    </Box>
  );
};

export default Member;
