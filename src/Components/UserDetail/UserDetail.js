import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInformation } from "Slices/authenticationSlice";
import store from "store";
import BookedTicketList from "./BookedTicketList";
import UserInformations from "./UserInformations";
const UserDetail = ({ currentUser, accessToken }) => {
  const dispatch = useDispatch();
  const { bookedTicketList } = useSelector(
    (state) => state.authenticationSlice
  );
  useEffect(() => {
    dispatch(getUserInformation(accessToken));
  }, []);
  return (
    <div className="text-white">
      <div className="mb-3">
        <UserInformations userInformations={currentUser} />
      </div>
      <div className="">
        {" "}
        <BookedTicketList bookedTicketList={bookedTicketList} />
      </div>
    </div>
  );
};

export default UserDetail;
