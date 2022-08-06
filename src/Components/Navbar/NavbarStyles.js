import { Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import styled from "styled-components";
const NavigationBar = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* @media (max-width: 768px) {
    & {
      display: none !important;
      background-color: red;
    }
  } */
`;

const StyledNavLink = styled(Link)`
  margin-right: 1rem;
  background-color: transparent;
  color: #000;
  font-weight: 500;
  /* display: block;
  padding: inherit;
  padding-left: 3rem;
  padding-right: 3rem;
  height: 4rem;
  line-height: 4rem;
  border-right: 1px solid #ffffff;
  text-decoration: none;
  font-weight: 700;
  cursor: pointer;
  &:last-child {
    border-right: none;
  }*/
  &:hover {
    color: #f26b38;
  }
  /* &.active {
    background-color: #f54b64;
  }  */
`;

export { StyledNavLink, NavigationBar };
