import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.8s all ease;

  @media screen and (max-width: 768px) {
    position: absolute;
    height: 60px;
    margin-top: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.8); /* Semi-transparent black for better contrast */
    backdrop-filter: blur(5px);
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;

  @media screen and (max-width: 768px) {
    height: 60px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    z-index: 20; /* Ensure it is above other navbar elements */
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

  @media screen and (max-width: 768px) {
    height: 60px;
  }
`;

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: 'Courier New', Courier, monospace;
  text-transform: uppercase;
  font-weight: bold;

  &.active {
    border-bottom: 3px solid #00FF41;
    color: #00FF41;
  }
  
  &:hover {
      color: #00FF41;
      transition: 0.2s ease-in-out;
  }
`;
