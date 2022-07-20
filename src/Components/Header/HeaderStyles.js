import PersonIcon from "@mui/icons-material/Person";
import { AppBar, Toolbar, Box } from "@mui/material";
import styled from "styled-components";
import GalaxyLogo from "Assets/galaxy-logo.png";
import GalaxyLogoMobile from "Assets/galaxy-logo-mobile.png";
const Logo = styled(Box)`
  background-image: url(${GalaxyLogo});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 30rem;
  height: 5rem;
  @media (max-width: 768px) {
    background-image: url(${GalaxyLogoMobile});
    width: 10rem;
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
  background-color: #ffffff;
`;

export {
  Logo,
  StyledToolbar,
  StyledAppBar,
  StyledPersonIcon,
  StyledLogIn,
  ModalBox,
};
