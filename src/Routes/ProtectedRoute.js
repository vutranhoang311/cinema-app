import React from "react";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useSelector((state) => state.autheticationSlice);
  if(!currentUser){
    return <h1></h1>
  }

  return <div>{children}</div>;
};

export default ProtectedRoute;
