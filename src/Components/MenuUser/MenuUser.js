import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { logOutUser } from "Slices/authenticationSlice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const MenuUser = ({ currentUser }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {currentUser.taiKhoan}
        <ArrowDropDownIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            navigate("/member");
          }}
        >
          Profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            Swal.fire({
              title: "Bạn muốn đăng xuất?",
              showCancelButton: true,
              confirmButtonText: "Đồng ý",
              cancelButtonText: `Hủy`,
            }).then((result) => {
              if (result.isConfirmed) {
                dispatch(logOutUser());
                Swal.fire({
                  title: "Đăng xuất thành công",
                  text: "Cám ơn bạn đã sử dụng dịch vụ",
                  icon: "success",
                  timer: 1500,
                }).then(navigate(""));
              }
            });
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuUser;
