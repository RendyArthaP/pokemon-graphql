import styled from '@emotion/styled';
import { mediaQueries } from '../Global';

export const BackgroundNavbar = styled.div`
  background-color: #FFDE00;
  height: 5rem;
  width: 100%;
`;

export const Notification = `
  margin-top: -5px;
  margin-left: -8px;
  background-color: #FF5252;
  border-radius: 999px;
  width: 1.2rem;
  height: 1.2rem;
  right: 10px;
  top: 15px;
  display: none;
  ${mediaQueries[1]} {
    display: flex;
  }
`;

export const NotificationMobile = `
  margin-bottom: -10px;
  margin-left: 8.5rem;
  background-color: #FF5252;
  border-radius: 999px;
  width: 1.2rem;
  height: 1.2rem;
  right: 10px;
  top: 15px;
  display: flex;
  ${mediaQueries[1]} {
    display: none;
  }
`;

export const NavbarWrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const NavbarMobileWrapper = styled.main`
  background-color: #FFDE00;
  position: absolute;
  width: 100vw;
  height: 10rem;
  top: 5rem;
  left: 0;
  z-index: 50;
  display: flex;
  flex-direction: column;
  ${mediaQueries[1]} {
    display: none;
  }
`;

export const NavbarMobileSection = `
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const ListNavMobile = `
  font-size: 22px;
  font-family: 'Poppins', sans-serif;
  color: #555555;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
`

export const NavigateNavbar = styled.div`
  flex-direction: row;
  display: none;
  ${mediaQueries[1]} {
    display: flex;
  } 
`;

export const ListNav = `
  font-size: 20px;
  font-weight: normal;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  color: #555555
`;

export const HamburgerDisplay = `
  display: flex;
  cursor: pointer;
  ${mediaQueries[1]} {
    display: none;
  }
`;
