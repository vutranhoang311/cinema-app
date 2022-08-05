import PersonIcon from "@mui/icons-material/Person";
import { AppBar, Toolbar, Box } from "@mui/material";
import styled from "styled-components";
import WebLogo from "Assets/web-logo.png";
import LogoMobile from "Assets/web-logo-2.png";
const Logo = styled(Box)`
  background-image: url(${WebLogo});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 7rem;
  height: 5rem;
  @media (max-width: 768px) {
    background-image: url(${LogoMobile});
    width: 5rem;

  }
`;
const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  height: 6.5rem;
`;
const StyledAppBar = styled(AppBar)`
  background-color: #f7f9fa;
`;
const StyledLogIn = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  color: #a0a3a7;
  cursor: pointer;
  &:hover {
    color: #f26b38;
  }
  &:focus {
    color: #f26b38;
  }
`;
const StyledPersonIcon = styled(PersonIcon)`
  margin-bottom: 6px;
  padding: 0;
`;

const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background-color: #ffffff;
  padding: 20px;
  width: 325px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    width: 450px;
  }
`;

export {
  Logo,
  StyledToolbar,
  StyledAppBar,
  StyledPersonIcon,
  StyledLogIn,
  ModalBox,
};
