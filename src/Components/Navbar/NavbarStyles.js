import { Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const NavigationBar = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #000;
  /* @media (max-width: 768px) {
    & {
      display: none !important;
      background-color: red;
    }
  } */
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  padding: inherit;
  padding-left: 3rem;
  padding-right: 3rem;
  height: 4rem;
  line-height: 4rem;
  color: #ffffff;
  border-right: 1px solid #ffffff;
  text-decoration: none;
  font-weight: 700;
  cursor: pointer;
  &:last-child {
    border-right: none;
  }
  &:hover {
    color: #f26b38;
  }
  &.active {
    background-color: #f54b64;
  }
`;

export { StyledNavLink, NavigationBar };
