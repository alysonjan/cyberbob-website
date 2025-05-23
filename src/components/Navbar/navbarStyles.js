import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  width: 100%;
  // background: #0b1c2c;
  background: linear-gradient(to bottom, #0a0f0f, #0e1a1a, #111f1f);

  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  z-index: 10;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 4px 1rem 0 1rem;
  height: 100%;
  cursor: pointer;
  border-bottom: 4px solid rgba(41, 151, 236, 0);

  &.active {
    padding-bottom: 0px;
    border-bottom: 4px solid #2998ec;
    transition: all 0.3s ease-in-out;
  }
`;
